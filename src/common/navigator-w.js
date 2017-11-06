import React from 'react';
import Login from 'auth/Login';
import Register from 'auth/Register';
import Forgot from 'auth/Forgot';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import Home from 'home/Home';
import {TouchableHighlight} from 'react-native';
import DrawerContainer from '../components/Drawer';
import Drawer from '../app/Drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AuthStack = StackNavigator(
  {
    LoginScreen: {screen: Login},
    RegisterScreen: {screen: Register},
    ForgotScreen: {screen: Forgot},
  },
  {
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false,
      },
    },
  },
);

export const DrawerStack = DrawerNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
    SettingsScreen: {
      screen: Drawer,
    },
  },
  {
    gesturesEnabled: false,
    contentComponent: props => <DrawerContainer {...props} />,
  },
);

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: {screen: DrawerStack},
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false,
      headerLeft: (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate('DrawerToggle')}>
          <FontAwesome name="bars" size={30} style={{padding: 10}} />
        </TouchableHighlight>
      ),
    }),
  },
);

export default (Navigator = StackNavigator(
  {
    Auth: {screen: AuthStack},
    Drawer: {screen: DrawerNavigation},
    // Drawer: {screen: DrawerStack}
  },
  {
    headerMode: 'none',
    mode: 'modal',
    swipeEnabled: false,
    initialRouteName: 'Drawer',
  },
));
