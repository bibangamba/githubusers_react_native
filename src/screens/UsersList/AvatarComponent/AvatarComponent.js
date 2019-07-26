import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./AvatarComponent.style";

const AvatarComponent = ({ avatarUrl }) => (
  <View style={styles.imageContainer}>
    <Image source={{ uri: avatarUrl }} style={styles.image} />
  </View>
);

AvatarComponent.propTypes = {
  avatarUrl: PropTypes.string
};

AvatarComponent.defaultProps = {
  avatarUrl: "https://avatars1.githubusercontent.com/u/0"
};

export default AvatarComponent;
