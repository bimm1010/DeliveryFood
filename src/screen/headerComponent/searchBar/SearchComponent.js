import React from "react";
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Row1 from "./buttonSearch/Row1";
import Row2 from "./buttonSearch/Row2";
import Row3 from "./buttonSearch/Row3";
import Row4 from "./buttonSearch/Row4";
import Row5 from "./buttonSearch/Row5";


const SearchComponent = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={Styles.Container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="ios-chevron-back-outline" size={20} />
                </TouchableOpacity>
                <TextInput
                    style={{paddingLeft: "2%"}}
                    autoFocus={true}
                    placeholder="tìm nhà hàng, món ăn"
                />
            </View>

            <ScrollView style={Styles.ScrollView}>
                <Text style={{paddingTop: "2%", paddingBottom: "2%", paddingLeft: "5%", fontWeight: "600"}}>Món gì đang hot?</Text>
                <Row1 />
                <Row2 />
                <Row3 />
                <Row4 />
                <Row5 />
            </ScrollView>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "2%"
    },
    ScrollView: {
        height: "100%",
        
    }
})

export default SearchComponent