import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const LocationMart = () => {
    return (
        <View style={{marginTop: "2%"}}>
            <TouchableOpacity style={Styles.Container}>
                <Text>Giao đến: </Text>
                <Icon name={'ios-location-sharp'} size={15} style={{paddingRight: "2%", color: "#3ac5c9"}}/>
                <Text style={{fontWeight: "700"}}>2 ngõ 690 Lạc Long Quân</Text>
                <Icon name="ios-chevron-down" size={20} style={{color: "#3ac5c9"}}/>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        alignItems: "center"
    }
})

export default LocationMart;