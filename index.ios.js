/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} = React;

var ReactNativeReactWebview = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webView}
          url='web/helloworld.html'
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998',
  },
  webView: {
    height: 350,
  },
});

AppRegistry.registerComponent('ReactNativeReactWebview', () => ReactNativeReactWebview);
