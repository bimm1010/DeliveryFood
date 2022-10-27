import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

const Location = ({ navigation }) => {

  return (
    <TouchableOpacity
      style={{ flexDirection: "row", paddingRight: 100 }}
      onPress={() => navigation.navigate("ChangeLocation")}>
      <View style={{ paddingTop: "2%" }}>
        <Icon name={"location"} size={16} color={"#3ac5c9"} />
      </View>

      <Text> 2 Ngõ 690 Lạc Long Quân</Text>

      <View style={{ paddingTop: "1%" }}>
        <Icon name={"chevron-right"} size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default Location;
