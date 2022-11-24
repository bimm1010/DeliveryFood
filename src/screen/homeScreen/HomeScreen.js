import React from "react";
import { SafeAreaView, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import HeaderComponent from "../headerComponent/HeaderComponent";
import BannerComponent from "../contentComponent/bannerContent/BannerComponent";
import MartComponent from "../contentComponent/midContent/martComponent/MartComponent";
import OptionComponent from "../contentComponent/optionFood/optionComponent/OptionComponent";
import BannerSale from "../contentComponent/flashSale/bannerSale/BannerSale";

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={Styles.bg}>
        <View style={Styles.Container}>
          <HeaderComponent navigation={navigation} />
          <ScrollView contentContainerStyle={{height: screenHeight * 2}}>
            <BannerComponent />
            <MartComponent navigation={navigation}/>
            <OptionComponent />
            <BannerSale />
          </ScrollView>
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
