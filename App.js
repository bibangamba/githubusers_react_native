import React from "react";
import { View } from "react-native";
import Navigator from "./Navigation/NavigationComponent";
import styles from "./App.style";

export default function App() {
  return <Navigator style={styles.container} />;
}
