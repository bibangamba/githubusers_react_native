import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./DetailsScreen.style";
const DetailsScreen = props => {
  const {
    avatarUrl,
    repos,
    starred,
    url,
    username
  } = props.navigation.state.params;
  const { navigate } = props.navigation;
  return (
    <View style={styles.viewContainer}>
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />
      <Text style={styles.usernameText}>{username}</Text>
      <TouchableOpacity
        style={styles.githubUrlLink}
        onPress={() => navigate("WebViewScreen", url)}
      >
        <Text style={styles.urlText}>{url}</Text>
      </TouchableOpacity>
      <View style={styles.countersContainer}>
        <View style={styles.countersItemContainer}>
          <Text style={styles.counterNumberText}>{repos}</Text>
          <Text style={styles.counterLabelText}>repos</Text>
        </View>
        <View style={styles.countersItemContainer}>
          <Text style={styles.counterNumberText}>{starred}</Text>
          <Text style={styles.counterLabelText}>starred</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.shareButton} onPress={this.shareProfile}>
        <Text style={styles.shareText}>SHARE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
