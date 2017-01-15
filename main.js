// @flow

import Exponent from 'exponent';
import React from 'react';
import App from './src/app';

import { View, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sbar: {
    height: StatusBar.currentHeight,
    backgroundColor: '#5067FF'
  }
});

class Wrapper extends React.Component {
  state = { fontsAreLoaded: false };

  async componentWillMount() {
    await Exponent.Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({fontsAreLoaded: true});
  }

  render() {
    if (this.state.fontsAreLoaded) {
      return (<View style={styles.container}>
          <View style={styles.sbar}/>
          <StatusBar barStyle='default'/>
          <App/>
        </View>);
    } else
      return <Exponent.Components.AppLoading/>;
  }
}

Exponent.registerRootComponent(Wrapper);
