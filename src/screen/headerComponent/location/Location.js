import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons'

const Location = () => {

  return(
    <TouchableOpacity style={{flexDirection: "row", paddingRight: 100}} >
      <View style={{paddingTop: "2%"}}>
        <Icon name={"location"} size={16} color={'#00FF00'}/>
      </View>

      <Text> 2 Ngõ 690 Lạc Long Quân</Text>

      <View style={{paddingTop: "1%"}}>
        <Icon name={"chevron-right"} size={20} />
      </View>
    </TouchableOpacity>
  )
}

export default Location;
