import React from "react";
import { View, StyleSheet } from "react-native";
import Location from "./location/Location";
import MenuBar from "./menuRight/MenuBar";
import Message from "./message/Message";
import SearchBar from "./searchBar/SearchBar";

const HeaderComponent = ({ navigation }) => {
  return (
    <View>
      <View style={Styles.Container}>
        <Location navigation={navigation} />
        <View>
          <Message navigation={navigation} />
        </View>
        <View style={{ paddingLeft: "4%" }}>
          <MenuBar navigation={navigation} />
        </View>
      </View>

      <View>
        <SearchBar />
      </View>
    </View>

  );
};

const Styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

});
export default HeaderComponent;
