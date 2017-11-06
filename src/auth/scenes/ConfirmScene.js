import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import colors from 'theme/colors';
import NavBar from 'components/NavBar';
import NavButton from 'components/NavButton';
import I18n, {isRTL} from 'common/locale';
import FormLabel from 'components/FormLabel';
import FormTextInput from 'components/FormTextInput';
import FormSubmit from 'components/FormSubmit';

export default class ConfirmScene extends Component {
  static propTypes = {
    onFieldChange: PropTypes.func.isRequired,
    onRecoverPassword: PropTypes.func.isRequired,
    onForgotPassword: PropTypes.func.isRequired,
    onRightButtonPress: PropTypes.func.isRequired,
    confirmationCode: PropTypes.string.isRequired,
  };

  render() {
    const {
      onFieldChange,
      confirmationCode,
      onRecoverPassword,
      onForgotPassword,
      onRightButtonPress,
    } = this.props;

    return (
      <View style={styles.container}>
        <FormLabel title={I18n.t('confirmation_code')} />

        <FormTextInput
          onChangeText={value => onFieldChange('confirmationCode', value)}
          value={confirmationCode}
          maxLength={40}
          placeholder={I18n.t('confirmation_code')}
        />

        <FormSubmit
          onPress={() => onRecoverPassword()}
          underlayColor="transparent"
          disabled={!confirmationCode}
          title={I18n.t('confirm')}
          style={{marginTop: 50}}
        />

        <TouchableHighlight
          onPress={() => onForgotPassword()}
          style={[{paddingTop: 100}]}
          underlayColor="transparent">
          <Text style={[styles.link]}>
            {I18n.t('resend_confirmation_code')}
          </Text>
        </TouchableHighlight>
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
  link: {
    marginTop: 20,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
