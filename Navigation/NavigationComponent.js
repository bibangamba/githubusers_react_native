import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from "../src/screens/Login/LoginScreen";
import UsersListScreen from "../src/screens/UsersList/UsersListScreen";
import ListItemComponent from "../src/screens/UsersList/ListItemComponent/ListItemComponent";
import DetailsScreen from "../src/screens/DetailsScreen/DetailsScreen";

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
      navigationOptions: () => ({ title: "Details" })
    },
    Preview: {
      screen: ListItemComponent,
      navigationOptions: () => ({ title: "PreviewScreen" })
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(Navigator);
