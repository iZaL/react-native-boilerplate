import PropTypes from 'prop-types';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import colors from 'theme/colors';
import {isRTL} from 'common/locale';

export default class NavButton extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onPress: PropTypes.func.isRequired,
  };

  handlePress() {
    this.props.onPress();
  }

  render() {
    const {style, title, icon, iconSize, containerStyle} = this.props;

    return (
      <TouchableHighlight
        onPress={() => {
          this.handlePress();
        }}
        underlayColor="transparent"
        activeOpacity={0.4}
        style={[styles.container, containerStyle]}>
        {icon ? (
          typeof icon === 'string' ? (
            <Ionicons
              name={icon}
              size={iconSize ? iconSize : 40}
              color={colors.primary}
              style={[styles.icon, style]}
            />
          ) : (
            icon
          )
        ) : (
          <Text style={[styles.title, style]}>{title}</Text>
        )}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  title: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
    paddingHorizontal: isRTL ? 15 : 10,
  },
  icon: {
    width: 40,
    height: 40,
    color: colors.primary,
    // paddingHorizontal:isRTL ? 15 : 5,
  },
});
