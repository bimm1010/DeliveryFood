import React from "react";
import {SafeAreaView, View, StyleSheet} from "react-native";
import HeaderComponent from "../headerComponent/HeaderComponent";
const HomeScreen = ({navigation}) => {
  console.log(navigation);
  return(
    <SafeAreaView>
      <View style={Styles.Container}>
        <HeaderComponent />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  Container: {
    marginHorizontal: "4%",
    marginTop: "2%"
  }
})

export default HomeScreen;
