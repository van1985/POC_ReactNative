
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  ListView,
  Navigator,  
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

var Swiper = require('react-native-swiper')

class SplashPage extends React.Component {
  render() {
    return (      
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image style={styles.icon_img1} source={require('../img/icon_about.png')} />
          <Text style={styles.text}>Bienvenido a Iventory</Text>
          <Text style={styles.text_description}>Con esta app podrás tener el control de los productos que tienes en stock y asi administrar mejor tu negocio</Text>
        </View>
        <View style={styles.slide2}>
          <Image style={styles.icon_img2} source={require('../img/icon_truck.png')} />
          <Text style={styles.text}>Controla e ingresa</Text>
          <Text style={styles.text_description}>Ten control de los movimientos de ingreso y egreso de productos a tu stock y compara ambos.</Text>
        </View>
        <Navigator
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar 
              routeMapper={NavigationBarRouteMapper} />
        } />
          
      </Swiper>


    );
  }

  renderScene(route, navigator) {
    return (
        <View style={styles.slide3}>
        <Image style={styles.icon_img3} source={require('../img/icon_mobile.png')} />
          <Text style={styles.text}>Visualiza y edita</Text>
          <Text style={styles.text_description}>Visualiza todos los productos. Edita y elimina productos de la lista para tenerla siempre actualizada.</Text>
          <View style={{paddingTop: 0, position: 'absolute', right:30, bottom:50}}>
          <TouchableHighlight 
              onPress={this.gotoNext.bind(this)}>
            <Text style={styles.btn_navigate}>Saltar</Text>
          </TouchableHighlight>
          </View>
        </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'Main Page',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return null;
    /*
    return (
      
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          POC react-native Login
        </Text>
      </TouchableOpacity>
    );*/
  }
};


var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#448AFF',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0097A7',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9575CD',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
  },
  icon_img1: {
    width: 93,
    height: 81,
  },
  icon_img2:{
    width:120,
    height:90,
  },
  icon_img3:{
    width:60,
    height:100,
  },
  text_description: {
    color: '#fff',
    fontSize:16,
    width:300,
    textAlign: 'center',
    marginTop: 15,
  },
  btn_navigate: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:15,
    alignItems: 'flex-end',

  }
})


module.exports = SplashPage;