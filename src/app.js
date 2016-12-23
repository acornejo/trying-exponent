// @flow

import React, { Component } from 'react';
import { LayoutAnimation, ScrollView, StatusBar, Text, TouchableOpacity } from 'react-native';

import { action, observable } from 'mobx';
import { observer } from 'mobx-react/native';

class Store {
  @observable list: Array<string> = [
    'Hello World!',
    'Hello React Native!',
    'Hello Exponent!'
  ];

  @action add = (item: string) => this.list.push(item);
}

const store = new Store();

@observer
class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text style={{ color: '#1b73b4', fontSize: 24 }}>
          My Hellos ({store.list.length})
        </Text>

        {store.list.map((item, key) => (
          <Text key={`item-${key}`} style={{ color: '#444' }}>
            {item}
          </Text>
        ))}

        <TouchableOpacity onPress={() => store.add('Hello!')}>
          <Text style={{ color: '#1b73b4' }}>
            sayHello()
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default App;
