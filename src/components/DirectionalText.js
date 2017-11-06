import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import I18n from 'common/locale';

export default class DirectionalText extends Component {
  static propTypes = {
    ...Text.propTypes,
  };

  render() {
    const {children} = this.props;
    return (
      <Text {...this.props} style={[styles.text, this.props.style]}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    writingDirection: ['ar'].indexOf(I18n.locale) > -1 ? 'rtl' : 'ltr',
  },
});
