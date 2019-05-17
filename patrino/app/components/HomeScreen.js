import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, FlatList, Image, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Form, Thumbnail, Container, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";

import AsyncStorage from '@react-native-community/async-storage';

import { StackNavigator } from "react-navigation";

import { BarChart, Grid } from 'react-native-svg-charts';

import Question from "./Question";
import BarChartE from "./BarChartExample";
import Helps from "./Helps";
import Doadoras from "./Doadoras";

import myTheme from './Theme';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation: null
    },
    header: null
  };

  constructor(props){
    super(props);
  }

  async sair() {
    await AsyncStorage.setItem("email", "");
    await AsyncStorage.setItem("password", "");
    await AsyncStorage.setItem("logging", "false");

    this.props.navigation.navigate("Login");

  }


  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Image style={styles.logo} source={require("./heart.png")} />
          </Left>
          <Body>
            <Title>Patrino</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={this.sair.bind(this)}
            >
              <Icon type="MaterialIcons" name="exit-to-app" />
            </Button>
          </Right>
        </Header>

        <Tabs>
          <Tab heading="Início">
            <View>
              <Button block success style={{ margin: 20 }}
                onPress={() => {
                  this.props.navigation.navigate("QRCodeReader");
                }}
              >
                <Icon type="MaterialCommunityIcons" name="qrcode-scan" />
                <Text>Ler QR Code do Frasco</Text>
              </Button>

            </View>
            <View>
              <Button block light style={{ margin: 20 }}
                onPress={() => {
                  this.props.navigation.navigate("Insights");
                }}
              >
                <Text>Ver Insights</Text>
              </Button>

            </View>

            <View>
              <Button block light style={{ margin: 20 }}
                onPress={() => {
                  this.props.navigation.navigate("Pedidos");
                }}
              >
                <Text>Ver Pedidos de Doação</Text>
              </Button>

            </View>
          </Tab>

          <Tab heading="Doadoras">
            <Doadoras />
          </Tab>

          <Tab heading="Campanhas">
            <View>
              <Button block success style={{ margin: 20 }}
                onPress={() => {
                  this.props.navigation.navigate("QRCodeReader");
                }}
              >
                <Icon type="MaterialCommunityIcons" name="qrcode-scan" />
                <Text>Nova</Text>
              </Button>

            </View>

        <ScrollView>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("./heart.png")} />
                <Body>
                  <Text>Patrino</Text>
                  <Text note>Equipe de Comunicação</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={require("./1.jpg")} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active type="MaterialIcons" name="search" />
                  <Text>Editar</Text>
                </Button>
              </Left>

              <Right>
                <Text>11h atrás</Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("./heart.png")} />
                <Body>
                  <Text>Patrino</Text>
                  <Text note>Equipe de Comunicação</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={require("./2.jpg")} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active type="MaterialIcons" name="search" />
                  <Text>Editar</Text>
                </Button>
              </Left>

              <Right>
                <Text>11h atrás</Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("./heart.png")} />
                <Body>
                  <Text>Patrino</Text>
                  <Text note>Equipe de Comunicação</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={require("./3.jpg")} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active type="MaterialIcons" name="search" />
                  <Text>Editar</Text>
                </Button>
              </Left>

              <Right>
                <Text>11h atrás</Text>
              </Right>
            </CardItem>
          </Card>

        </ScrollView>

          </Tab>

        </Tabs>

      </Container>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 30,
    height: 30
  },
  subtext: {
    color: "black",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    backgroundColor: 'blue',
    color: 'white'
  },
  button: {
    backgroundColor: "#3c8dbc",
    paddingVertical: 15
  },
  window: {
    marginBottom: 15
  }
});


AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
