import { shallow } from "enzyme";
import UsersListScreen from "../UsersListScreen";
import { LAGOS_JAVA_DEVS_QUERY } from "../../../queries/LagosJavaDevs";
import { MockedProvider } from "react-apollo/test-utils";

import React from "react";
import renderer from "react-test-renderer";
const wait = require("waait");
const mocks = [
  {
    request: {
      query: LAGOS_JAVA_DEVS_QUERY
    },
    result: {
      data: {
        search: {
          __typename: "SearchResultItemConnection",
          edges: [
            {
              __typename: "SearchResultItemEdge",
              node: {
                __typename: "User",
                avatarUrl:
                  "https://avatars2.githubusercontent.com/u/8110201?v=4",
                bio: "",
                id: "MDQ6VXNlcjgxMTAyMDE=",
                login: "moyheen",
                name: "Moyinoluwa Adeyemi",
                repositories: {
                  __typename: "RepositoryConnection",
                  totalCount: 31
                },
                starredRepositories: {
                  __typename: "StarredRepositoryConnection",
                  totalCount: 159
                },
                url: "https://github.com/moyheen"
              }
            },
            {
              __typename: "SearchResultItemEdge",
              node: {
                __typename: "User",
                avatarUrl:
                  "https://avatars0.githubusercontent.com/u/276286?v=4",
                bio: "",
                id: "MDQ6VXNlcjI3NjI4Ng==",
                login: "chalu",
                name: "Charles Opute Odili",
                repositories: {
                  __typename: "RepositoryConnection",
                  totalCount: 19
                },
                starredRepositories: {
                  __typename: "StarredRepositoryConnection",
                  totalCount: 3
                },
                url: "https://github.com/chalu"
              }
            },
            {
              __typename: "SearchResultItemEdge",
              node: {
                __typename: "User",
                avatarUrl:
                  "https://avatars3.githubusercontent.com/u/13552664?v=4",
                bio:
                  "Android, iOS Developer ... UX/UI enthusiast ... In other words, pretty big nerd.",
                id: "MDQ6VXNlcjEzNTUyNjY0",
                login: "aliumujib",
                name: "Abdul-Mujib Aliu",
                repositories: {
                  __typename: "RepositoryConnection",
                  totalCount: 60
                },
                starredRepositories: {
                  __typename: "StarredRepositoryConnection",
                  totalCount: 900
                },
                url: "https://github.com/aliumujib"
              }
            },
            {
              __typename: "SearchResultItemEdge",
              node: {
                __typename: "User",
                avatarUrl:
                  "https://avatars1.githubusercontent.com/u/4929406?v=4",
                bio: "",
                id: "MDQ6VXNlcjQ5Mjk0MDY=",
                login: "o-kamiye",
                name: "Oluwakamiye Adelemoni",
                repositories: {
                  __typename: "RepositoryConnection",
                  totalCount: 42
                },
                starredRepositories: {
                  __typename: "StarredRepositoryConnection",
                  totalCount: 27
                },
                url: "https://github.com/o-kamiye"
              }
            }
          ]
        }
      }
    }
  }
];
const mocksError = [
  {
    request: {
      query: LAGOS_JAVA_DEVS_QUERY
    },
    error: new Error("oh no, what an error...")
  }
];

describe("Test UsersListScreen", () => {
  it("should match the snapshot", () => {
    const component = shallow(<UsersListScreen />);
    expect(component).toMatchSnapshot();
  });

  it("should render the UsersListScreen in loading state", () => {
    const apolloConnectedListComponent = (
      <MockedProvider mocks={mocks}>
        <UsersListScreen navigation />
      </MockedProvider>
    );
    const renderedScreen = renderer
      .create(apolloConnectedListComponent)
      .toJSON();
    expect(renderedScreen).toBeTruthy();
    expect(renderedScreen.children).toContain("Loading...");
  });

  it("should render the UsersListScreen with users list", async () => {
    const apolloConnectedListComponent = (
      <MockedProvider mocks={mocks}>
        <UsersListScreen navigation />
      </MockedProvider>
    );
    const renderedScreen = renderer.create(apolloConnectedListComponent);
    /**
     *  delays until the next "tick" of the event loop,
     * and allows time for that Promise returned from
     * MockedProvider to be fulfilled
     *
     * (https://www.apollographql.com/docs/react/recipes/testing/#testing-final-state)
     *
     */
    await wait(0);

    expect(renderedScreen.toJSON()).toBeTruthy();

    const firstUser = renderedScreen.root.findAllByType("Text")[0];
    expect(firstUser.children).toContain("moyheen");
  });
  it("should render the UsersListScreen with error message", async () => {
    const apolloConnectedListComponent = (
      <MockedProvider mocks={mocksError}>
        <UsersListScreen navigation />
      </MockedProvider>
    );
    const renderedScreen = renderer.create(apolloConnectedListComponent);
    await wait(0);
    const tree = renderedScreen.toJSON();
    expect(tree).toBeTruthy();
    expect(tree.children).toContain("Network error: oh no, what an error...");
  });
});
