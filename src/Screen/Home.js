import React, { Component } from 'react';
import {  Container, Header, Title, Content,Form, Input, Item, Button, Left, Right, Body, Icon, Fab, List, Thumbnail, ListItem } from 'native-base';
import { Dimensions,Modal, TouchableHighlight, StyleSheet, View, Text,FlatLis, Image,FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import { FlatGrid } from 'react-native-super-grid';
import dummyData from '../component/dummyData';



export default class Home extends Component {
 
  

static navigationOptions ={
  drawerIcon:(
    <Image source={require('../image/writing.png')} style={{ height: 24, width: 24}}/>
  )
}

constructor(props) {
  super(props);

  this.state = {
    modalVisible: false,
      items : [
        { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
        { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
        { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
        { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
        { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
        { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
        { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
        { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
        { name: 'SILVER', code: '#bdc3c7' }
      ]
  }
}

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {

    return (
      <Container>

        <Header style={{backgroundColor: '#fff'}}>
          <Left style={{flex:1}}>
            <Button transparent onPress= {() => this.props.navigation.openDrawer()} style={{padding: 10}}>
              <Thumbnail small source={ require('../image/Logo.png')}/>
            </Button>
          </Left>
          <Body style={{flex:1}}>
            <Title style={{color:'#000'}}>NOTE APP</Title>
          </Body>
          <Right style={{flex:1}}>
            <Button transparent onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} style={{padding: 10}}>
              <Thumbnail square style={{ width: 20, height: 20}}source={ require('../image/Sort.png')}/>
            </Button>
          </Right>
        </Header>
          <Item style={{backgroundColor: 'transparent', borderBottomColor: 'transparent'}}>
            <Input style={styles.input} placeholder="Search"/>
          </Item>
        <Content>
        <View style={{flex: 1}}>
          <FlatList
            style={styles.gridView}
            data={dummyData}
            numColumns={2}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item, index}) =>
            <TouchableOpacity style={{
              flex: 1,
              marginBottom: 10,
              paddingright: 10

            }}
            onPress={()=> this.props.navigation.navigate('Edit', item)}
            >
            <View style={{ backgroundColor: item.code,borderRadius: 7, margin: 5}}>
                <View>
                  <Text style={styles.itemDate}>{item.time}</Text>
                </View>
                <View>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
                <View>
                  <Text style={styles.itemNote}>{item.category}</Text>
                </View>
                <View style={{height: 75}}>
                  <Text numberOfLines={4} style={styles.itemNote}>{item.note}</Text>
                </View>
              </View>
            </TouchableOpacity>
            }
          />
        </View>
         </Content>
         <Fab
              direction="up"
              containerStyle={{ }}
              style={{ backgroundColor: '#ffffff' }}
              position="bottomRight"
              onPress={() => this.props.navigation.navigate('Note')}>
              <Icon name="add" style={{color: '#000000'}} />
          </Fab>
            <Modal
            transparent={true}
            animationType="fade"
            visible={this.state.modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
            onPress={() => {this.setModalVisible(!this.state.modalVisible); }}
            >
            <View style={{
              marginTop: 22,
              position: 'absolute',
              right: '2%',
              top:'6%',
              backgroundColor: '#fff'
            }}>
              <View style={{
                paddingBottom: 20,
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 7
              }}>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{fontSize: 14}}>ASCENDING</Text>
                </TouchableHighlight>
                
              </View>
              <View style={{
                paddingBottom: 20,
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 7
              }}>
                <TouchableHighlight onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{fontSize: 14}}>DESCENDING</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
       </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 5,
    flex: 1
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    marginTop: 10
  },
  itemTitle: {
    fontSize: 15,
    paddingLeft: 10,
    color: '#fff',
    fontWeight: '600',
  },
  itemDate:{
    marginTop: 10,
    paddingLeft: '65%',
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10
  },

  itemNote: {
    fontWeight: '600',
    fontSize: 10,
    color: '#fff',
    paddingLeft: 10,
  },
  input:{
    width: '86.5%',
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 50,
    backgroundColor: '#eeeeee',
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 10,
  }
});