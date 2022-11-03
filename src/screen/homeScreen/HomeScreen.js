import React from "react";
import {SafeAreaView, View, StyleSheet} from "react-native";
import HeaderComponent from "../headerComponent/HeaderComponent";

const HomeScreen = ({navigation}) => {
  return(
      <SafeAreaView>
        <View style={Styles.bg}>
          <View style={Styles.Container}>
            <HeaderComponent navigation={navigation}/>
          </View>
        </View>

      </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  Container: {
    marginHorizontal: "4%",
    marginTop: "2%",
  },
  bg: {
    backgroundColor: "white"
  }
})

export default HomeScreen;
