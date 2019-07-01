import { View,Image } from "react-native";
import React, { Component } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

import { 
  Container, 
  Header, 
  Left, 
  Form, 
  Body, 
  Right,
  Input, 
  Textarea,
  Picker, 
  Button, 
  Icon, 
  Title, 
  Text, 
  Thumbnail, 
  Content, 
  Label 
} from 'native-base';

import {StyleSheet} from 'react-native';
import dummycategory from '../component/dummyCategory';

export default class Note extends Component {

    constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      showAlert: false
    };
    }

    onValueChange(value: string) {
        this.setState({
          selected: value,
          
        });
      }

  dummycategory = () => {
    let dummydata = []
    for(let i = 0; i < dummycategory.length; i++){
      dummydata.push(
          <Picker.Item key={i} label={dummycategory[i].category} value={dummycategory[i].category}/>
      )
    }
    return dummydata;

  }

  showAlert = () => {
    this.setState({
      showAlert: true
    })
  }
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    })
  }

  render() {
    return (
      <Container>
      <Header style={{backgroundColor: '#fff'}}>
        <Left style={{flex:1}}>
           <Button transparent onPress= {() => this.props.navigation.goBack()} style={{}}>
              <Icon style={{color:'#000000'}} name='arrow-back' />
            </Button> 
        </Left>
        <Body style={{flex:1}}>
            <Title style={{color: '#000'}}>ADD NOTE</Title>
        </Body>
        <Right style={{flex:1}}>
            <Button transparent onPress= {() => {this.showAlert()}} style={{padding: 10}}>
               <Thumbnail square style={{ width: 30, height: 30, alignItems: 'center', paddingRight: 15}}source={ require('../image/checked.png')}/>
            </Button>
        </Right>
      </Header>
        <Content>
            <Form>
                <Input placeholder="ADD TITLE..." placeholderIconColor='#ecf0f1' style={styles.textStyle}/>
                <Textarea rowSpan={12} placeholder="ADD DESCRIPTION..."style={styles.textAreaStyle}/>
                <Label style={styles.labelstyle}>Category</Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    placeholder="Select Category"
                    placeholderStyle={{ color: "#eeeeee" }}
                    placeholderIconColor="#eee"
                    style={styles.pickerStyle}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}>
                    {this.dummycategory()}
                  </Picker>
            </Form>
        </Content>
        <AwesomeAlert
              show={this.state.showAlert}
              showProgress={false}
              title="WARNING"
              message="Save Data?!"
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={true}
              cancelText="No, cancel"
              confirmText="Yes, Save it"
              confirmButtonColor="#DD6B55"
              onCancelPressed={() => {
                this.hideAlert();
              }}
              onConfirmPressed={() => {
                this.hideAlert();
              }}
            />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    textStyle: {
        width: '80%',
        paddingLeft: 15,
        marginLeft:'10%',
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 27,
        marginTop: 10

    },
    textAreaStyle: {
        width: '80%',
        paddingLeft: 15,
        marginLeft:'10%',
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 27,
        marginTop: 10
    },
    pickerStyle: {
        width: '50%',
        marginLeft: '10%',
        
    },
    labelstyle:{
        fontSize: 19, 
        fontWeight:"600", 
        color:'#000000',
        marginLeft: '10%',
        marginTop: 10
    }

});