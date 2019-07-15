import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Navigator from "./Navigation/NavigationComponent";
import styles from "./App.style";

export default class App extends Component {
  state = {
    access_token: "",
    client: new ApolloClient({
      link: new HttpLink({
        uri: "https://api.github.com/graphql",
        headers: {
          authorization: ""
        }
      }),
      cache: new InMemoryCache()
    })
  };

  componentDidMount() {
    AsyncStorage.getItem("access_token")
      .then(access_token => {
        if (access_token) {
          this.setState({ access_token: access_token });
          this.setState({
            client: new ApolloClient({
              link: new HttpLink({
                uri: "https://api.github.com/graphql",
                headers: {
                  authorization: `Bearer ${access_token}`
                }
              }),
              cache: new InMemoryCache()
            })
          });
        } else {
          this.setState({ access_token: undefined });
        }
      })
      .catch(() => this.setState({ access_token: undefined }));
  }

  setAccessTokenInToState = access_token => {
    this.setState({ access_token: access_token });
    this.setState({
      client: new ApolloClient({
        link: new HttpLink({
          uri: "https://api.github.com/graphql",
          headers: {
            authorization: `Bearer ${access_token}`
          }
        }),
        cache: new InMemoryCache()
      })
    });
  };

  render() {
    return (
      <ApolloProvider client={this.state.client}>
        <Navigator
          style={styles.container}
          screenProps={{
            setAccessTokenInToState: this.setAccessTokenInToState
          }}
        />
      </ApolloProvider>
    );
  }
}
