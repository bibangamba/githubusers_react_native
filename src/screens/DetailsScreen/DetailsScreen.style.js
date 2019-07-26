import { StyleSheet } from "react-native";
const DetailsScreenStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    flexDirection: "column"
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  usernameText: {
    fontSize: 30,
    marginTop: 8,
    marginBottom: 8
  },
  urlText: {
    fontSize: 20,
    color: "blue",
    textDecorationLine: "underline",
    textDecorationColor: "blue"
  },
  githubUrlLink: {
    marginBottom: 8,
    marginTop: 8,
    padding: 4
  },
  countersContainer: {
    flexDirection: "row",
    height: 50
  },
  countersItemContainer: {
    marginLeft: 40,
    marginRight: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  counterNumberText: {
    fontSize: 24,
    marginRight: 8
  },
  counterLabelText: {
    fontSize: 18,
    color: "#A9A9A9"
  },
  shareButton: {
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#5382A1",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 280,
    alignItems: "center"
  },
  shareText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24
  }
});

export default DetailsScreenStyles;
