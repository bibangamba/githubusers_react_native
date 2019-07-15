import { StyleSheet } from "react-native";
const LoginScreenStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column"
  },
  fieldContainer: {
    marginTop: 100,
    width: "100%",
    paddingRight: 32,
    paddingLeft: 32,
    paddingBottom: 12
  },
  textInput: {
    borderColor: "black",
    borderRadius: 4,
    padding: 4,
    height: 40,
    paddingLeft: 12,
    marginBottom: 30,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 16
  },
  githubLogo: {
    width: 185,
    height: 185
  },
  signinButton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#5382A1",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  signinText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24
  }
});

export default LoginScreenStyles;
