const defaults = {};

if (__DEV__) {
  module.exports = {
    ...defaults,
    // API_URL: 'http://re.dev/api',
    API_URL: 'http://sood.ideasowners.net/api',
    GOOGLE_MAPS_KEY: 'AIzaSyCpQX4H0QPxVgKuNMZ0ELG_ymgT8RHcKh4',
    GOOGLE_MAPS_IOS_KEY: 'AIzaSyDPCgdWqrkBe4v3uSuU-MZGJIZ0AQxfbCo',
    GOOGLE_MAPS_ANDROID_KEY: 'AIzaSyCpQX4H0QPxVgKuNMZ0ELG_ymgT8RHcKh4',
    CODEPUSH_ENABLED: false,
    // SOCKET_SERVER: 'http://re.dev:3000',
    SOCKET_SERVER: 'http://sood.ideasowners.net:3000',
  };
} else {
  module.exports = {
    ...defaults,
    API_URL: 'http://sood.ideasowners.net/api',
    GOOGLE_MAPS_KEY: 'AIzaSyCpQX4H0QPxVgKuNMZ0ELG_ymgT8RHcKh4',
    GOOGLE_MAPS_IOS_KEY: 'AIzaSyDPCgdWqrkBe4v3uSuU-MZGJIZ0AQxfbCo',
    GOOGLE_MAPS_ANDROID_KEY: 'AIzaSyCpQX4H0QPxVgKuNMZ0ELG_ymgT8RHcKh4',
    CODEPUSH_ENABLED: true,
    SOCKET_SERVER: 'http://sood.ideasowners.net:3000',
  };
}
