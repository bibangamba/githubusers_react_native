import React from "react";
import { WebView } from "react-native";

const WebViewScreen = props => {
  const url = props.navigation.state.params;
  return <WebView source={{ uri: url }} startInLoadingState />;
};

export default WebViewScreen;
