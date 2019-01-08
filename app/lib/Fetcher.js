import { authSelectors } from "../state/auth";
import constants from "../../common/constants";

class Fetcher {
  constructor(getState) {
    this._csrf = null;
    this.getState = getState;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "fetcher";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["getState"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async fetch({ method, resource, data, csrf }) {
    let cookie = authSelectors.getCookie(this.getState());
    let url = constants.apiBase + resource;
    let response = await fetch(
      process.browser ? url : process.env.APP_INNER_SERVER + url,
      {
        method: method || "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRF-Token": csrf,
          Cookie: cookie || undefined
        },
        body: data && JSON.stringify(data)
      }
    );

    if (response.status === 403 && method === "POST") this._csrf = null;

    if (response.status !== 200) {
      const error = new Error(
        `Fetch failed: ${resource} [${response.status}]`,
        await response.json()
      );
      error.response = response;
      throw error;
    }

    return response.json();
  }

  async csrf() {
    if (this._csrf) return this._csrf;

    try {
      let data = await this.fetch({ resource: `${constants.apiBase}/csrf` });
      if (data.csrf) return (this._csrf = data.csrf);
    } catch (error) {
      console.error(`CSRF: ${error.message}`);
    }

    return new Promise(resolve => setTimeout(() => resolve(this.csrf()), 1000));
  }

  async query(operation, variables, cacheConfig, uploadables) {
    try {
      return await this.fetch({
        method: "POST",
        resource: constants.graphqlBase,
        data: {
          query: operation.text, // GraphQL text from input
          variables
        },
        csrf: await this.csrf()
      });
    } catch (error) {
      if (_.get(error, "response.status") === 403)
        return this.query(operation, variables, cacheConfig, uploadables);
    }
    return {};
  }
}

export default Fetcher;
