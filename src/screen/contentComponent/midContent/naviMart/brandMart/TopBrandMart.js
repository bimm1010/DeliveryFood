import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
const TopBrandMart = () => {
    return (
        <View>
            <TouchableOpacity style={{marginTop: "5%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View>
                    <Text style={{fontSize: 20}}>Top thương hiệu</Text>
                    <Text style={{marginTop: "2%", color: "#778899"}}>Top thương hiệu</Text>
                </View>

                <Icon name="chevron-thin-right" size={15}/>

            </TouchableOpacity>
        </View>
    )
}

export default TopBrandMart;