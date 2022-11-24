import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Row2 = () => {
    const buttonList = ['Bánh mì', 'Xôi', 'Bún đậu', 'Bún']
    return(
        <View style={Styles.Container}>
            {buttonList.map((item, index) => (
                <TouchableOpacity style={Styles.item} key={index}>
                    <Text style={Styles.itemFood}>{item}</Text>
                </TouchableOpacity>
            ))} 
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        paddingLeft: "5%",
        paddingBottom: "3%",
        flexDirection: "row",
        
    },
    item: {
        borderRadius: 25,
        backgroundColor: "#DCDCDC",
        marginRight: "5%"
    },
    itemFood: {
        padding: "1%",
        paddingHorizontal: "4%"
    }

})

export default Row2;