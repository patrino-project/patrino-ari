import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, FlatList, Image, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Form, Thumbnail, Container, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";

import AsyncStorage from '@react-native-community/async-storage';

import { StackNavigator } from "react-navigation";

import { BarChart, Grid } from 'react-native-svg-charts';

import BarChartE from "./BarChartExample";
import Help from "./Help";

export default class Pedidos extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation: null
    },
    header: null
  };

  render() {
    return (
      <Container>
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
        <ScrollView>
          <Help />
          
        </ScrollView>
      </Container>
    );
  }

}

AppRegistry.registerComponent("Pedidos", () => Pedidos);
