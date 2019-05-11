import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, Button, View, FlatList, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Header, Left, Body, Icon, Right, Title, Card, CardItem, Badge } from "native-base";

import { StackNavigator } from "react-navigation";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation: null
    },
    header: null
  };

  render() {
    return (
      <View></View>
    );
  }

}

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
