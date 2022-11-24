import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const BackTitle = ({navigation}) => {
    return(
        <View style={Styles.Container}>
            <TouchableOpacity style={Styles.item} onPress={() => navigation.goBack()}> 
                <Icon name="ios-arrow-back" size={20}/>
            </TouchableOpacity>
            <Text style={{fontSize: 18}}>MART</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        alignItems: "center"
    }, 
    item: {
        marginRight: "8%"
    }
})


export default BackTitle;