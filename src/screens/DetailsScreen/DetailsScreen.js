import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column"
  }
});

const DetailsScreen = data => {
  console.log("data from listview ======> ", data);
  return (
    <View style={styles.viewContainer}>
      <Image
        style={styles.githubLogo}
        source={require("../../../assets/github.png")}
      />
    </View>
  );
};

export default DetailsScreen;
