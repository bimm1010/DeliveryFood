import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Feather'

const Message = () => {
  return(
    <TouchableOpacity>
      <Icon name={"mail"} size={20}/>
    </TouchableOpacity>
  )
}

export default Message;
