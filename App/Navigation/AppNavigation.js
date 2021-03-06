import React from "react";
import { createStackNavigator } from "react-navigation";
import Home from "../Containers/Screens/Home";
import { Provider } from 'react-redux'
import createStore from '../Redux'

const RootStackNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    gesturesEnabled: false,
    // contentComponent: IntroductionSlider,
    headerMode: "none",
    initialRouteName: "Home",
    gesturesEnabled: true
  }
);

// const AppContainer = createAppContainer(RootStackNavigator);

// export default AppContainer;

export default class AppNavigation extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStackNavigator />
      </Provider>
    )
  }
}

// export default AppNavigation;