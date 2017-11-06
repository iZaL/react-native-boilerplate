/**
 * @flow
 */
import React from 'react';
import Touchable from 'react-native-platform-touchable';
import PropTypes from 'prop-types';
import colors from 'assets/theme/colors';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerItem = ({title, onItemPress, active, icon, routeName}) => {
  return (
    <Touchable
      onPress={() => onItemPress(routeName)}
      background={Touchable.Ripple(colors.primary, false)}>
      <View style={styles.container}>
        <Ionicons
          name={icon}
          color={active ? colors.primary : colors.fadedBlack}
          size={20}
        />
        <Text style={[styles.itemTitle, active && styles.activeTitle]}>
          {title}
        </Text>
      </View>
    </Touchable>
  );
};

DrawerItem.propTypes = {
  title: PropTypes.string.isRequired,
  onItemPress: PropTypes.func.isRequired,
  active: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemTitle: {
    fontSize: 18,
    color: colors.fadedBlack,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  activeTitle: {
    color: colors.primary,
  },
});

export default DrawerItem;
