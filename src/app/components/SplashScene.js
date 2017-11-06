import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Swiper from 'react-native-swiper';
import colors from 'theme/colors';
import images from 'theme/images';

export default class SplashScene extends React.Component {
  static propTypes = {};

  renderPagination = (index, total, context) => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}>
          {styles.dot}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar hidden={true} />

        <Swiper
          style={styles.wrapper}
          height={Dimensions.get('window').height - 100}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          autoplay={false}
          autoplayTimeout={2.5}
          paginationStyle={styles.pagination}
          loop={false}>
          <View
            style={styles.slide}
            title={
              <Text style={styles.text}>
                Search properties across gulf countries
              </Text>
            }>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={images.splash1}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text style={styles.text}>
                Robust filters for quick search !!!
              </Text>
            }>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={images.splash2}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text style={styles.text}>
                Browse through thousands of properties
              </Text>
            }>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={images.splash3}
            />
          </View>

          <View
            style={styles.slide}
            title={
              <TouchableHighlight
                hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}
                onPress={() => {
                  this.props.actions.setBootstrapped(true);
                }}>
                <Text style={[styles.text, styles.textUnderline]}>
                  Start Browsing
                </Text>
              </TouchableHighlight>
            }>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={images.splash4}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#e6ffff',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '100',
    marginTop: 25,
  },
  image: {
    width: Dimensions.get('window').width - 100,
  },
  pagination: {
    bottom: -23,
    left: null,
    right: 10,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
});
