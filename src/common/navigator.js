import React from 'react';
import Login from 'auth/Login';
import Register from 'auth/Register';
import Forgot from 'auth/Forgot';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import Drawer from 'components/Drawer';
import Home from 'home/Home';
import Settings from "home/Settings";
import colors from 'assets/theme/colors';

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
      cardStyle: {backgroundColor: 'transparent'},
      headerStyle: {backgroundColor: colors.primary},
    },
    initialRouteName: 'LoginScreen',
  },
);

const Stack = {
  Home: {screen: Home},
  Settings: {screen: Settings},
};

const DrawerRoutes = {
  Screen1: {
    screen: StackNavigator(Stack),
  },
  Screen2: {
    screen: StackNavigator(Stack),
  },
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
    Drawer: {screen: DrawerStack},
    // Drawer: {screen: DrawerNavigation},
    Auth: {screen: AuthStack},
  },
  {
    headerMode: 'none',
    // initialRouteName: 'Auth'
  },
));
