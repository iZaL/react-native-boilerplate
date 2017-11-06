import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import NavBar from 'components/NavBar';
import NavButton from 'components/NavButton';
import I18n, {isRTL} from 'common/locale';
import FormLabel from 'components/FormLabel';
import FormTextInput from 'components/FormTextInput';
import FormSubmit from 'components/FormSubmit';

export default class ForgotScene extends Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    busy: PropTypes.bool.isRequired,
    onRightButtonPress: PropTypes.func.isRequired,
    onForgotPassword: PropTypes.func.isRequired,
    onFieldChange: PropTypes.func.isRequired,
  };

  render() {
    const {
      email,
      onFieldChange,
      onForgotPassword,
      onRightButtonPress,
    } = this.props;

    return (
      <View style={styles.container}>
        <FormLabel title={I18n.t('email')} />

        <FormTextInput
          onChangeText={value => onFieldChange('email', value)}
          value={email}
          maxLength={40}
          placeholder={I18n.t('email')}
          keyboardType="email-address"
        />

        <FormSubmit
          onPress={() => onForgotPassword()}
          title={I18n.t('recover_password')}
          style={{marginTop: 50}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 20,
  },
});
