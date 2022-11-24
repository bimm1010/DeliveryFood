import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import FastImage from "react-native-fast-image";
import { MartAPI } from '../../API/APIMART'

const OptionMart = ({ navigation }) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        setData(MartAPI)
    }, [])
    
    return (
        <View style={Styles.Container}>
            {data.map((e, index) => (
                <TouchableOpacity key={index} style={Styles.item} onPress={() => navigation.navigate(e.navigator)}>
                    <FastImage source={{ uri: e.imageURL }} style={Styles.image} resizeMode={FastImage.resizeMode.contain} />
                    <Text style={{ fontSize: 10, paddingTop: "1%" }}>{e.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between'
    },
    item: {
        alignItems: "center",
        marginTop: "5%",
        marginRight: '3%'

    },
    image: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 50
    }
})

export default OptionMart;