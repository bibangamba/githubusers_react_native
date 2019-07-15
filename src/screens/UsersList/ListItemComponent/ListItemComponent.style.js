import { StyleSheet } from "react-native";
const ListItemComponentStyles = StyleSheet.create({
  listItemContainer: {
    borderWidth: 2,
    borderColor: "#B8B8B8",
    marginLeft: 12,
    marginRight: 12,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 12,
    flex: 1,
    flexDirection: "row",
    minHeight: 98,
    alignItems: "center"
  },
  usernameText: {
    fontSize: 24,
    fontWeight: "300",
    paddingLeft: 4,
    paddingRight: 4
  }
});

export default ListItemComponentStyles;
