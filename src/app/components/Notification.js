import PropTypes from 'prop-types';
import React from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import colors from 'theme/colors';

export default class Notification extends React.Component {
  static propTypes = {
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    messageType: PropTypes.string,
    dismissNotification: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.fadeAnim = new Animated.Value(1);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.message !== nextProps.message;
  }

  hideMessage = () => {
    this.props.dismissNotification();
    StatusBar.setHidden(false);
  };

  showMessage = () => {
    StatusBar.setHidden(true);
    Animated.timing(this.fadeAnim, {
      toValue: 1, // Target
      duration: 500, // Configuration
      easing: Easing.bounce,
    }).start();
  };

  componentDidMount() {
    setTimeout(this.hideMessage, 4000);
    this.showMessage();
  }

  render() {
    const {messageType, message} = this.props;

    return (
      <Animated.View
        style={[
          styles.container,
          styles[messageType],
          {opacity: this.fadeAnim},
        ]}>
        <TouchableHighlight
          onPress={() => this.hideMessage()}
          underlayColor="transparent">
          <Text style={styles.title}>{message}</Text>
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    zIndex: 10000,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textShadowColor: colors.fadedBlack,
    textShadowOffset: {width: 0.1, height: 0.1},
  },
  success: {
    backgroundColor: colors.success,
  },
  error: {
    backgroundColor: colors.error,
  },
  info: {
    backgroundColor: colors.info,
  },
});
