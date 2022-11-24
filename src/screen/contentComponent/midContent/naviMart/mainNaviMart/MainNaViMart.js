import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import BackTitle from "../headerMart/backTitle/BackTItle";
import LocationMart from "../headerMart/LocationMart/LocationMart";
import SearchMart from "../contentMart/searchMart/searchMart";
import ImageSliderMart from "../contentMart/imageSliderMart/ImageSliderMart";
import OptionMart from "../contentMart/optionMart/OptionMart";
import BrandMart from "../brandMart/BrandMart";
import TopBrandMart from "../brandMart/TopBrandMart";
import ListTopBrandMart from "../brandMart/ListTopBrandMart";
const MainNaviMart = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={Styles.Container}>
                <BackTitle navigation={navigation} />
                <LocationMart />
                <ScrollView>
                    <SearchMart />
                    <ImageSliderMart />
                    <OptionMart navigation={navigation} />
                    <BrandMart />
                    <TopBrandMart />
                    <ListTopBrandMart />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    Container: {
        marginHorizontal: "4%",
    }
})
export default MainNaviMart;

