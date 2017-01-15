// @flow

import React from 'react';
import { Container, Text, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import { TouchableWithoutFeedback, View, Animated, Easing, StyleSheet } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

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

const border = 1;
const gap = 2;
const duration = 100;
const size = 30;
const bg = '#5067FF';
const fg = '#FFFFFF';

const styles = StyleSheet.create({
  circle: {
    width: size,
    height: size,
    borderRadius: size/2,
    borderWidth: border,
    borderColor: bg,
    backgroundColor: fg,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    backgroundColor: bg
  },
  checkmark: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: fg,
    height: size-2*border,
    fontSize: size-2*border
  }
});

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      opacity: new Animated.Value(props.selected ? 100 : 0)
    };
  }

  toggle = () => {
    this.setState({selected: !this.state.selected});
    Animated.timing(this.state.opacity, {
      toValue: this.state.selected ? 100 : 0,
      duration: duration
    }).start();
  }

  render() {
    const color = this.state.opacity.interpolate({
      inputRange: [0, 100],
      outputRange: [fg, bg]
    });

    return (
      <TouchableWithoutFeedback onPress={this.toggle}>
        <Animated.View style={[styles.circle, {backgroundColor: color}]}>
          <Ionicon style={styles.checkmark} name="ios-checkmark"/>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

class Radiobox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      size: new Animated.Value(props.selected ? size-gap*2-border*2 : 0)
    };
  }

  toggle = () => {
    this.setState({selected: !this.state.selected});
    Animated.timing(this.state.size, {
      toValue: this.state.selected ? size-gap*2-border*2 : 0,
      duration: duration
    }).start();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.toggle}>
        <View style={styles.circle}>
          <Animated.View style={[styles.dot, {
            width: this.state.size,
            height: this.state.size,
            borderRadius: Animated.divide(this.state.size, 2),
          }]}>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

@observer
class App extends React.Component {
  render() {
    return (
      <Container>
          <Header>
            <Button transparent>
              <Icon name='ios-menu'/>
            </Button>
            <Title>Header</Title>
          </Header>

          <Content>
            <Text>Text</Text>
            <View style={{flex: 1, flexDirection: 'row'}}><Checkbox/><Text style={{margin: 10}}>Hello</Text></View>
            <View style={{flex: 1, flexDirection: 'row'}}><Radiobox/><Text>World</Text></View>
          </Content>

          <Footer>
              <FooterTab>
                  <Button>
                    Map
                    <Icon name='ios-map' />
                  </Button>
                  <Button active>
                    Search
                    <Icon name='ios-search' />
                  </Button>
                  <Button>
                    Call
                    <Icon name='ios-call' />
                  </Button>
              </FooterTab>
          </Footer>
      </Container>
    );
  }
}

export default App;
