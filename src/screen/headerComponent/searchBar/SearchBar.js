import React from "react";
import {TextInput, View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
  return(
    <View style={Styles.textInput}>
      <Icon name={"ios-search-outline"} size={15} style={Styles.icon}/>
      <TextInput
        style={{paddingHorizontal: "20%"}}
        placeholder={"tìm nhà hàng, món ăn"}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    alignContent: "center",
    paddingHorizontal: "2%",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    marginTop: "5%"
  },
  icon: {
    paddingTop: "4%",
    paddingHorizontal: "2%"
  }
})

export default SearchBar;
