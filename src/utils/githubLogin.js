const base64 = require("base-64");

const AUTH_URL_PATH = "https://api.github.com/authorizations";
import {
  REACT_APP_GITHUB_APP_CLIENT_ID,
  REACT_APP_GITHUB_APP_CLIENT_SECRET
} from "react-native-dotenv";

const githubLogin = (username, password) => {
  const bytes = `${username.trim()}:${password}`;
  const encoded = base64.encode(bytes);

  return fetch(AUTH_URL_PATH, {
    method: "POST",
    headers: {
      Authorization: `Basic ${encoded}`,
      "User-Agent": "GitHub Issue Browser",
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/vnd.github.inertia-preview+json"
    },
    body: JSON.stringify({
      client_id: REACT_APP_GITHUB_APP_CLIENT_ID,
      client_secret: REACT_APP_GITHUB_APP_CLIENT_SECRET,
      scopes: ["user", "repo"],
      note: "lagos devs auth token"
    })
  }).then(response =>
    response
      .json()
      .then(json => {
        if (response.status == 201) {
          return json.token;
        } else {
          return response.status;
        }
      })
      .catch(error => ({
        error: error
      }))
  );
};

export default githubLogin;
