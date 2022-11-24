import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Feather'

const Message = ({navigation}) => {
  return(
    <TouchableOpacity onPress={() => navigation.navigate("Mess")}>
      <Icon name={"mail"} size={20}/>
    </TouchableOpacity>
  )
}

export default Message;
