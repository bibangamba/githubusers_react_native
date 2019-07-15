import React from "react";
import { View, Text, FlatList } from "react-native";
import { Query } from "react-apollo";
import { LAGOS_JAVA_DEVS_QUERY } from "../../queries/LagosJavaDevs";
import ListItemComponent from "./ListItemComponent/ListItemComponent";

const UsersListScreen = props => (
  <Query query={LAGOS_JAVA_DEVS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :( {error.message}</Text>;

      const developersArray = data.search.edges.map(element => {
        element["avatarUrl"] = element["node"]["avatarUrl"];
        element["bio"] = element["node"]["bio"];
        element["id"] = element["node"]["id"];
        element["username"] = element["node"]["login"];
        element["name"] = element["node"]["name"];
        element["url"] = element["node"]["url"];
        element["repos"] = element["node"]["repositories"]["totalCount"];
        element["starred"] =
          element["node"]["starredRepositories"]["totalCount"];
        delete element["node"];
        return element;
      });
      const { navigation } = props;
      return (
        <View style={{ marginBottom: 8 }}>
          <FlatList
            keyExtractor={developer => developer.id}
            data={developersArray}
            renderItem={developer => (
              <ListItemComponent
                key={developer.index}
                developer={developer}
                navigation={navigation}
              />
            )}
          />
        </View>
      );
    }}
  </Query>
);

export default UsersListScreen;
