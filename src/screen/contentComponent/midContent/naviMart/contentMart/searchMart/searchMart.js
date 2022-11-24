import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const SearchMart = () => {
    return (
        <TouchableOpacity style={Styles.Container}>
            <Icon name="search" size={15} style={{paddingRight: "5%"}}/>
            <Text>Tìm cửa hàng hay sản phẩm</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "5%",
        backgroundColor: "#f5f5f5",
        padding: "3%",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        marginBottom: "2%"

    }
})

export default SearchMart;