/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';


class ThumbnailMovie extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;
    return (
      <View>
        <Image
            source={{uri: image}}
            style={styles.thumbnail}
          />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  thumbnail: {
    width: 53,
    height: 81,
  }
});

module.exports = ThumbnailMovie;