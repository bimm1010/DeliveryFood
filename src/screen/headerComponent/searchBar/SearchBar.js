import React from "react";
import {TextInput, View, StyleSheet, TouchableOpacity, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({navigation}) => {
  return(
    <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={Styles.textInput}>
      <Icon name={"ios-search-outline"} size={15} style={Styles.icon}/>
      <Text>tìm nhà hàng, món ăn</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    alignContent: "center",
    paddingHorizontal: "2%",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    marginTop: "5%",
    padding: "2%",
    justifyContent: 'center'
  },
  icon: {
    paddingHorizontal: "2%"
  }
})

export default SearchBar;
