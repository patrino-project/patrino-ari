import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, FlatList, Image, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Form, Thumbnail, Container, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";

import AsyncStorage from '@react-native-community/async-storage';

import { StackNavigator } from "react-navigation";

import { BarChart, Grid } from 'react-native-svg-charts';

import BarChartE from "./BarChartExample";

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
              <View>
                <Card>
                  <CardItem header>
                    <Text>Amostras analisadas</Text>
                  </CardItem>
                  <BarChartE />
                </Card>
              </View>

              <View>
                <Card>
                  <CardItem header>
                    <Text>Número de doadoras</Text>
                  </CardItem>
                  <BarChartE />
                </Card>
              </View>

              <View>
                <Card>
                  <CardItem header>
                    <Text>Número de leite coletado</Text>
                  </CardItem>
                  <BarChartE />
                </Card>
              </View>
            </ScrollView>
      </Container>
    );
  }

}

AppRegistry.registerComponent("Insights", () => Insights);
