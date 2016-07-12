/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ListView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

//var ScrollableTabView = require('react-native-scrollable-tab-view');

import ThumbnailMovie from '../components/ThumbnailMovie';

var DrawerLayout = require('react-native-drawer-layout');

class MainPage extends React.Component {

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    var navigationView = (
    <View style={{flex: 1, backgroundColor: '#EDEDEC'}}>

      <Image source={require('../img/header.jpg')} />
      
      

      <View style={{ flex:1, flexDirection:'row'}}>
      <Image source={require('../img/icon_user.png')} style={{marginLeft:10, marginTop: 10}}/>
      <Text style={{fontSize: 18, textAlign: 'left', marginLeft: 20, marginTop:20}}>Login</Text>
      </View>
      
      <View style={{ flex:1, flexDirection:'row'}}>
        <Image source={require('../img/icon_home.png')} style={{marginLeft:10, marginTop: 10}}/>
        <Text style={{fontSize: 18, textAlign: 'left', marginLeft: 20, marginTop:20}}>Home</Text>
      </View>

      <View style={{ flex:1, flexDirection:'row'}}>
        <Image source={require('../img/icon_settings.png')} style={{marginLeft:10, marginTop: 10}}/>
        <Text style={{fontSize: 18, textAlign: 'left', marginLeft: 20, marginTop:20}}>Settings</Text>
      </View>
      
    </View>);

    return (
      <DrawerLayout
      drawerWidth={300}
      drawerPosition={DrawerLayout.positions.Left}
      renderNavigationView={() => navigationView}
      ref={(drawer) => { return this.drawer = drawer  }}>
      <ToolbarAndroid
          navIcon={require('../img/menu.png')}
          onIconClicked={() => this.drawer.openDrawer()}
          style={styles.toolbar}
          title="" />
      
      <View style={{flex: 1,flexDirection: 'column'}}>
        
        <View style={{ height:180, backgroundColor: '#4D75B3', flexDirection: 'column', alignItems: 'center'}}>

          <Image source={require('../img/avatar.png')} style={{ width:68, height: 80, opacity: 0.5}} />
          <Text style={{fontSize:18, color: 'white', marginTop:15}}>Bienvenido</Text>
          <Text style={{fontSize:14, color: 'white', marginTop:5}}>Miercoles 15/06 - 17:10 hs</Text>

        </View>

      </View>

      <View style={{flex: 2,flexDirection: 'column', padding:8, marginTop:25}}>
        <View style={{ height:140, backgroundColor: '#7BB5B2', alignItems: 'center', flexDirection: 'row' ,justifyContent: 'space-between'}}>
          <Image source={require('../img/icon_truck.png')} style={{ width:90, height:65, opacity: 0.5, marginLeft:20}} />
          <Text style={{ fontSize:18, color: 'white', fontWeight: 'bold', marginRight: 50}}>Movimientos</Text>
        </View>

        <View style={{ height:140, backgroundColor: '#856DA6', marginTop:10, alignItems: 'center', flexDirection: 'row' ,justifyContent: 'space-between'}}>
          <Image source={require('../img/inventory.png')} style={{ width:45, height:80, opacity: 0.5, marginLeft:35}} />
          <Text style={{ fontSize:18, color: 'white', fontWeight: 'bold', marginRight: 50}}>Inventario</Text>
      </View>
      </View>

    </DrawerLayout>
          );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies ...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <ThumbnailMovie image={movie.posters.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex:1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  toolbar: {
    backgroundColor: '#4D75B3',
    height: 56,
  }
});

module.exports = MainPage;