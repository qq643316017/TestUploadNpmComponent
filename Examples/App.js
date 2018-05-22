/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ChartDemo from 'testuploadnpmcomponent';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <ChartDemo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
});
