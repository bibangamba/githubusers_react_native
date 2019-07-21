import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from "../src/screens/Login/LoginScreen";
import UsersListScreen from "../src/screens/UsersList/UsersListScreen";

const Navigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({ title: "Login" })
    },
    UsersList: {
      screen: UsersListScreen,
      navigationOptions: () => ({ title: "Java Devs" })
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(Navigator);
