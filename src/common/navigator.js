import React from 'react';
import Login from 'auth/Login';
import Register from 'auth/Register';
import Forgot from 'auth/Forgot';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import Drawer from 'components/Drawer';
import Home from 'home/Home';
import Settings from 'home/Settings';
import CreateOrder from 'orders/CreateOrder';
import {TouchableHighlight} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AuthStack = StackNavigator(
  {
    LoginScreen: {
      screen: Login,
    },
    RegisterScreen: {
      screen: Register,
    },
    ForgotScreen: {
      screen: Forgot,
    },
  },
  {
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false,
      },
    },
    initialRouteName: 'LoginScreen',
  },
);

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        gesturesEnabled: false,
        headerLeft: (
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => navigation.navigate('DrawerToggle')}>
            <FontAwesome name="bars" size={30} style={{paddingLeft: 20}} />
          </TouchableHighlight>
        ),
      }),
    },
    CreateOrder: {screen: CreateOrder},
    Settings: {screen: Settings},
  },

  {navigationOptions: {gesturesEnabled: false}},
);

const CreateOrderStack = StackNavigator(
  {
    CreateOrder: {
      screen: CreateOrder,
      navigationOptions: ({navigation}) => ({
        gesturesEnabled: false,
        headerLeft: (
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => navigation.navigate('DrawerToggle')}>
            <FontAwesome name="bars" size={30} style={{paddingLeft: 20}} />
          </TouchableHighlight>
        ),
      }),
    },
    Home: {screen: Home},
    Settings: {screen: Settings},
  },
  {navigationOptions: {gesturesEnabled: false}},
);

const SettingsStack = StackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: ({navigation}) => ({
        gesturesEnabled: false,
        headerLeft: (
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => navigation.navigate('DrawerToggle')}>
            <FontAwesome name="bars" size={30} style={{paddingLeft: 20}} />
          </TouchableHighlight>
        ),
      }),
    },
    Home: {screen: Home},
    CreateOrder: {screen: CreateOrder},
  },

  {navigationOptions: {gesturesEnabled: false}},
);

const DrawerRoutes = {
  HomeStack: {
    screen: HomeStack,
  },
  CreateOrderStack: {
    screen: CreateOrderStack,
  },
  SettingsStack: {
    screen: SettingsStack
  }
};

const DrawerStack = DrawerNavigator(DrawerRoutes, {
  gesturesEnabled: false,
  contentComponent: props => <Drawer {...props} />,
  drawerWidth: 275,
});

// const DrawerNavigation = StackNavigator(
//   {
//     DrawerStack: {screen: DrawerNavigator(DrawerRoutes)},
//   },
//   {
//     headerMode: 'none',
//     navigationOptions: ({navigation}) => ({
//       gesturesEnabled: false,
//       headerLeft: (
//         <TouchableHighlight
//           underlayColor="transparent"
//           onPress={() => navigation.navigate('DrawerToggle')}>
//           <FontAwesome name="bars" size={30} style={{paddingLeft: 20}}/>
//         </TouchableHighlight>
//       ),
//     }),
//   },
// );

export default (Navigator = StackNavigator(
  {
    Main: {screen: DrawerStack},
    Auth: {screen: AuthStack},
  },
  {
    headerMode: 'none',
    // initialRouteName: 'Auth',
  },
));
