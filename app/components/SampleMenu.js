import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { styles } from '../utils/AppStyle.js';

const menuList = require('../utils/Constants.js');

class Menu extends Component {
  render() {
    return (
      <View style={styles.menu}>
        <ScrollView>
          {menuList.MENU_LIST.map(item => (
            <TouchableOpacity
              key={item.index}
              onPress={() => console.log('entered menu')}
            >
              <Text style={{color: 'white', fontSize: 16, paddingLeft: 20, paddingTop: 16}}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Menu