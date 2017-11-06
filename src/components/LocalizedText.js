import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';
import I18n from 'common/locale';

export default class LocalizedText extends Component {
  setNativeProps = nativeProps => {
    this._root.setNativeProps(nativeProps);
  };

  static propTypes = {
    en: PropTypes.string,
    ar: PropTypes.string,
  };

  render() {
    const {en, ar} = this.props;

    let content;
    if (I18n.locale === 'en') {
      content = en ? en : ar;
    } else {
      content = ar ? ar : en;
    }

    return (
      <Text
        ref={component => (this._root = component)}
        {...this.props}
        style={[styles.text, this.props.style]}>
        {content ? content : ' '}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    // textAlign: 'left',
    // writingDirection: ['ar'].indexOf(I18n.locale) > -1 ? 'rtl' : 'ltr',
  },
});
