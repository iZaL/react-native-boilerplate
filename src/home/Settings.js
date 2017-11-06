import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Settings extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() =>
            navigation.state.params &&
            navigation.state.params.handleLeftButtonPress()}>
          <FontAwesome name="bars" size={30} style={{padding: 10}} />
        </TouchableHighlight>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleLeftButtonPress: this.toggleDrawer,
    });
  }

  toggleDrawer = () => {
    this.props.navigation.navigate('DrawerToggle');
  };

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
        <Text style={{textAlign: 'center', fontSize: 40}}>Settings</Text>
      </View>
    );
  }
}
