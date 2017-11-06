/**
 @flow
 */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ACTIONS} from './common/actions';
import RegisterScene from './scenes/RegisterScene';

type State = {
  name_en: string,
  name_ar: string,
  email: string,
  password: string,
  mobile: string,
};

class Register extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state: State = {
    name_en: '',
    name_ar: '',
    email: '',
    mobile: '',
    password: '',
    password_confirmation: '',
  };

  handleRegister = () => {
    let credentials = {
      ...this.state,
      isCompany: this.props.navigation.state.params.isCompany || false,
    };

    this.props.actions.register(credentials);
  };

  onFieldChange = (field, value) => {
    this.setState({[field]: value});
  };

  render() {
    const {auth} = this.props;
    return (
      <RegisterScene
        {...this.state}
        handleRegister={this.handleRegister}
        onFieldChange={this.onFieldChange}
        busy={auth.register.busy}
        isCompany={this.props.navigation.state.params.isCompany}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(ACTIONS, dispatch)};
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
