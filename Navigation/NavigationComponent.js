import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from "../src/screens/Login/LoginScreen";
import UsersListScreen from "../src/screens/UsersList/UsersListScreen";
import DetailsScreen from "../src/screens/DetailsScreen/DetailsScreen";
import WebViewScreen from "../src/screens/WebViewScreen/WebViewScreen";

const Navigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({ title: "Login" })
    },
    UsersList: {
      screen: UsersListScreen,
      navigationOptions: () => ({ title: "Java Devs" })
    },
    DetailsScreen: {
      screen: DetailsScreen,
      navigationOptions: () => ({ title: "Profile" })
    },
    WebViewScreen: {
      screen: WebViewScreen,
      navigationOptions: () => ({ title: "Github Profile" })
    },
    Preview: {
      screen: DetailsScreen,
      navigationOptions: () => ({ title: "PreviewScreen" })
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(Navigator);
