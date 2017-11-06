import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const LanguageSelectScene = ({onLanguageSelect}) => {
  return (
    <View style={[styles.container]}>
      <TouchableHighlight
        onPress={() => onLanguageSelect('en')}
        style={styles.selectLanguageWrapper}
        underlayColor="transparent"
        activeOpacity={0.6}>
        <Text style={styles.languageTitle}> English </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => onLanguageSelect('ar')}
        style={styles.selectLanguageWrapper}
        underlayColor="transparent"
        activeOpacity={0.6}>
        <Text style={styles.languageTitle}> العربي </Text>
      </TouchableHighlight>
    </View>
  );
};

LanguageSelectScene.propTypes = {
  onLanguageSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  selectLanguageWrapper: {
    flex: 1,
    justifyContent: 'space-around',
  },
  languageTitle: {
    color: 'black',
    fontWeight: '100',
    fontSize: 70,
    textAlign: 'center',
  },
});

export default LanguageSelectScene;
