import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import AvatarComponent from "../AvatarComponent/AvatarComponent";
import styles from "./ListItemComponent.style";

const ListItemComponent = listProps => {
  const { username, avatarUrl } = listProps.developer.item;
  const { navigate } = listProps.navigation;
  return (
    <TouchableOpacity
      onPress={() => navigate("DetailsScreen", listProps.developer.item)}
    >
      <View style={styles.listItemContainer}>
        <AvatarComponent avatarUrl={avatarUrl} />
        <View style={styles.textContainer}>
          <Text style={styles.usernameText}>@{username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItemComponent.propTypes = {
  listProps: PropTypes.shape({
    developer: {
      item: {
        username: PropTypes.string,
        avatarUrl: PropTypes.string,
        githubUrl: PropTypes.string,
        repos: PropTypes.string,
        starred: PropTypes.string
      }
    },
    navigation: PropTypes.func.isRequired
  })
};

ListItemComponent.defaultProps = {
  developer: {
    item: {
      username: "username",
      avatarUrl: "https://avatars1.githubusercontent.com/u/0",
      githubUrl: "https://github.com/bibangamba",
      repos: "100",
      starred: "100"
    }
  }
};

export default ListItemComponent;
