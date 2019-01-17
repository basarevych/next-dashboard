import { authSelectors, authOperations } from "../../auth/state";
import constants from "../../../common/constants";

class Fetcher {
  constructor(getState, dispatch) {
    this.getState = getState;
    this.dispatch = dispatch;
    this.cookie = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "fetcher";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["getState", "dispatch"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  setCookie(cookie) {
    this.cookie = cookie;
  }

  async fetch({ method, resource, data }) {
    method = method || "GET";

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    if (this.cookie) headers["Cookie"] = this.cookie;

    let csrf;
    if (process.env.NODE_ENV === "production" && method !== "GET") {
      csrf = await this.getCsrf();
      if (csrf) headers["X-CSRF-Token"] = csrf;
    }

    if (
      !process.browser &&
      method !== "GET" &&
      (!this.cookie || (process.env.NODE_ENV === "production" && !csrf))
    ) {
      let errors = [];
      if (!this.cookie) errors.push("no cookie");
      if (process.env.NODE_ENV === "production" && !csrf)
        errors.push("no csrf");
      let query = data.query;
      if (query) query = _.split(query, /\r?\n/);
      process.stderr.write(
        [
          `Broken fetch in SSR: ${resource} (${errors.join(", ")})`,
          JSON.stringify(query || data, undefined, 4)
        ].join("\n") + "\n"
      );
    }

    let response = await fetch(
      process.browser ? resource : process.env.APP_INNER_SERVER + resource,
      {
        method,
        credentials: "include",
        headers,
        body: data && JSON.stringify(data)
      }
    );

    if (response.status === 403 && csrf)
      await this.dispatch(authOperations.setCsrf({ csrf: null }));

    if (response.status !== 200) {
      const error = new Error(`Fetch failed: ${resource} [${response.status}]`);
      error.status = response.status;
      error.query = data;
      throw error;
    }

    return response.json();
  }

  async getCsrf() {
    let csrf = authSelectors.getCsrf(this.getState());
    if (csrf || !process.browser) return csrf;

    try {
      let data = await this.fetch({ resource: `${constants.apiBase}/csrf` });
      if (data.csrf) csrf = data.csrf;
    } catch (error) {
      console.error(`CSRF: ${error.message}`);
    }

    if (csrf) {
      await this.dispatch(authOperations.setCsrf({ csrf }));
      return csrf;
    }

    return new Promise(resolve =>
      setTimeout(() => resolve(this.getCsrf()), 3000)
    );
  }

  async getToken() {
    try {
      let data = await this.fetch({ resource: `${constants.apiBase}/token` });
      if (data.token) return data.token;
    } catch (error) {
      console.error(`TOKEN: ${error.message}`);
    }

    return new Promise(resolve =>
      setTimeout(() => resolve(this.getToken()), 3000)
    );
  }

  async query(operation, variables, cacheConfig, uploadables) {
    try {
      return await this.fetch({
        method: "POST",
        resource: constants.graphqlBase,
        data: {
          query: operation.text, // GraphQL text from input
          variables
        }
      });
    } catch (error) {
      if (process.browser && error.status === 403) {
        return new Promise(resolve =>
          setTimeout(
            () =>
              resolve(
                this.query(operation, variables, cacheConfig, uploadables)
              ),
            1000
          )
        );
      }
      return {
        errors: [{ message: error.message, query: error.query }]
      };
    }
  }
}

export default Fetcher;
