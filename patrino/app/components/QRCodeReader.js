'use strict';

import React, { Component } from 'react';

import {Form, Thumbnail, Container, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";


import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeReader extends Component {
  static navigationOptions = {
    title: 'Voltar',
    headerStyle: {
      backgroundColor: "#1e88e5",
      elevation: null,
      color: "#fff"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    header: null
  };

  onSuccess(e) {
    /*Linking
      .openURL(e.data)
      .catch(err => console.error('Um erro aconteceu!', err));
    */
    this.props.navigation.navigate("Bottle");
  }

  render() {
    return (
      <ScrollView>
        <Header hasTabs>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}

            >
              <Icon type="MaterialIcons" name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Voltar</Title>
          </Body>
        </Header>
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}

        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
