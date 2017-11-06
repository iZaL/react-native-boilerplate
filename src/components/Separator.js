import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import colors from 'theme/colors';

const Separator = ({style}) => <View style={[styles.container, style]} />;

Separator.propTyes = {
  style: PropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    height: 0.5,
    backgroundColor: colors.lightGrey,
  },
});

export default Separator;
