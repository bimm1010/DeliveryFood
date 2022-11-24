import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import FastImage from "react-native-fast-image";


const MartComponent = ({ navigation }) => {
    return (
        <TouchableOpacity style={Styles.Container} onPress={() => navigation.navigate('MainNavi')}>
            <FastImage source={{uri: 'https://img.icons8.com/stickers/100/null/shopaholic.png'}} style={{width: 64, height: 64}}/>
            <Text>Mart</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    Container: {
        marginTop: "10%",
        alignItems: "center",
        backgroundColor: "#DCDCDC",
        marginRight: "70%",
        borderRadius: 15
    },

})

export default MartComponent;


