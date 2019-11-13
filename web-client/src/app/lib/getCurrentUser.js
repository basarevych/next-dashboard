const fetch = require("isomorphic-unfetch");
const constants = require("../../../common/constants");

module.exports = async function getCurrentUser(server, accessToken) {
  let user = null;

  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
    const response = await fetch(server + constants.graphqlBase, {
      method: "POST",
      credentials: "include",
      headers,
      body: JSON.stringify({
        query: `{
              viewer {
                me {
                  isAuthenticated
                  userId
                  name
                  email
                  isEmailVerified
                  roles
                  providers {
                    name
                    isLinked
                  }
                }
              }
            }`
      })
    });
    if (response.ok) {
      const result = await response.json();
      user = ((result.data || {}).viewer || {}).me || null;
    }
  } catch (error) {
    console.error(error);
  }

  return user;
};
