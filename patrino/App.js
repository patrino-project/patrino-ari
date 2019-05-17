import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Alert, Image} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from "./app/components/Login";
import HomeScreen from "./app/components/HomeScreen";
import QRCodeReader from "./app/components/QRCodeReader";
import Test from "./app/components/Test";
import Insights from "./app/components/Insights";
import Pedidos from "./app/components/Pedidos";
import Bottle from "./app/components/Bottle";


class Home extends Component<{}> {

  constructor() {
    super();

    logging = "false";
  }

  componentDidMount() {
    logging: this.retrieveData();
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation: null
    },
    header: null
  };

  async retrieveData() {
    const value = await AsyncStorage.getItem('logging');

    return value
  };

  render() {

    if(logging == "true") {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="white" />
          <Login navigation={this.props.navigation} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="white" />
          <Login navigation={this.props.navigation} />
        </View>
      );
    }
  }
}

const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
        title: "HomeScreen"
      },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Insights: {
    screen: Insights,
    navigationOptions: {
      title: "Insights"
    }
  },
  Bottle: {
    screen: Bottle,
    navigationOptions: {
      title: "Bottle"
    }
  },
  Pedidos: {
    screen: Pedidos,
    navigationOptions: {
      title: "Pedidos"
    }
  },
  QRCodeReader: {
    screen: QRCodeReader,
    navigationOptions: {
      title: "Leitor de QR Code"
    }
  },
  Test: {
    screen: Test,
    navigationOptions: {
      title: "Teste"
    }
  },
});

export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});
