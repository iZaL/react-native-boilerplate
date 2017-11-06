import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {isRTL} from 'common/locale';

const NavBar = ({style, left, right, middle}) => (
  <View style={[styles.navBar, style]}>
    <View style={styles.left}>{left}</View>
    <View style={styles.middle}>{middle}</View>
    <View style={styles.right}>{right}</View>
  </View>
);

NavBar.propTypes = {
  left: PropTypes.object,
  middle: PropTypes.object,
  right: PropTypes.object,
};

const styles = StyleSheet.create({
  navBar: {
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#EFEFF2',
    paddingTop: 20,
    flexDirection: 'row',
  },
  left: {
    minWidth: 60,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    minWidth: 60,
    marginHorizontal: isRTL ? -5 : -5,
    // backgroundColor:'blue'
  },
});

export default NavBar;
