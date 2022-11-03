import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/Entypo";

const MenuBar = ({navigation}) => {
  return(
    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
      <View>
          <Icon name={"menu"} size={20}/>
      </View>

    </TouchableOpacity>
  )
}




export default MenuBar;
