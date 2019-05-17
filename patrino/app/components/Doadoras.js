import React from 'react';
import {ScrollView} from "react-native";
import {Form, Thumbnail, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";

import Help from "./Help";

export default class Doadoras extends React.PureComponent {

    render() {
      return (
        <ScrollView>
        <Header searchBar rounded>
          <Item>
            <Icon type="MaterialIcons" name="exit-to-app" />
            <Input placeholder="Pesquisa" />
            <Icon type="MaterialIcons" name="exit-to-app" />
          </Item>
          <Button transparent>
            <Text>Pesquisa</Text>
          </Button>
        </Header>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Maria Ineude Silva Vieira</Text>
                <Text>Endereço</Text>
                <Text note>Avenida 1, Vila Sarney Filho, São José de Ribamar - MA</Text>

                <Text>Números de doações</Text>
                <Text note>10 doações</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Left>
              <Button transparent>
                <Icon active type="MaterialIcons" name="search" />
                <Text>Visualizar</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Cristiana Gomes Oliveira</Text>
                <Text>Endereço</Text>
                <Text note>Rua Cinco, Maiobão, Paço do Lumiar - MA</Text>

                <Text>Números de doações</Text>
                <Text note>2 doações</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Left>
              <Button transparent>
                <Icon active type="MaterialIcons" name="search" />
                <Text>Visualizar</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>

        </ScrollView>

      );
    }

}
