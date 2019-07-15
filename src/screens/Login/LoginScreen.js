import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  Platform
} from "react-native";
import githubLogin from "../../utils/githubLogin";
import styles from "./LoginScreen.style";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: "",
    password: "",
    error: ""
  };

  onUsernameFieldChange = username => {
    this.setState({ username: username });
  };

  onPasswordFieldChange = password => {
    this.setState({ password: password });
  };

  onSubmit = () => {
    const { username, password } = this.state;
    githubLogin(username, password).then(result => {
      console.log("RESULT from auth fetch: ", result);

      if (typeof result === "object" && result !== null) {
        console.log("############ got an error: ", result["error"]);
      }

      AsyncStorage.setItem("access_token", result)
        .then(() => console.log("// saved data to async storage"))
        .catch(error => console.log("// Error saving data ", error));
      const { navigation } = this.props;
      navigation.navigate("UsersList");
    });
  };

  render() {
    const verticalKeyboardOffset = 500;
    return (
      <KeyboardAvoidingView
        style={styles.viewContainer}
        behavior="padding"
        keyboardVerticalOffset={Platform.select({
          ios: 0,
          android: verticalKeyboardOffset
        })}
      >
        <Image
          style={styles.githubLogo}
          source={require("../../../assets/github.png")}
        />
        <View style={styles.fieldContainer}>
          <TextInput
            onChangeText={this.onUsernameFieldChange}
            style={styles.textInput}
            placeholder="username"
            autoCapitalize="none"
            textContentType="username"
            placeholderTextColor="#888888"
          />
          <TextInput
            onChangeText={this.onPasswordFieldChange}
            style={styles.textInput}
            placeholder="password"
            autoCapitalize="none"
            placeholderTextColor="#888888"
            textContentType="password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.signinButton} onPress={this.onSubmit}>
            <Text style={styles.signinText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;
