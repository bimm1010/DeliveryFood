import React from "react";
import {View, StyleSheet} from "react-native";
import Location from "./location/Location";
import MenuBar from "./menuRight/MenuBar";
import Message from "./message/Message";
const HeaderComponent = () => {
  return(
    <View style={Styles.Container}>
      <Location />

        <View>
          <Message />
        </View>
        <View style={{paddingLeft: "1%"}}>
          <MenuBar />
        </View>


    </View>
  )
}

const Styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
export default HeaderComponent
