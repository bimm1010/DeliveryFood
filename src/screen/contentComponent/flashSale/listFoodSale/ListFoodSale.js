import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import { Brand } from '../../midContent/naviMart/API/APIMART'
const { width: screenWidth } = Dimensions.get('window')
const ListFoodSale = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(Brand)
    }, [])
    return (
        <View>
            <ScrollView horizontal contentContainerStyle={{width: (screenWidth / 2.2) * data.length}}>
                {data.map((e, index) => (
                        <TouchableOpacity key={index} style={Styles.container}>
                            <FastImage source={{ uri: e.imageBrand }} style={{ width: 120, height: 100 }} />
                            <Text>{e.name}</Text>
                            <Text>{e.title}</Text>
                            <Text>{e.add}</Text>
                        </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        paddingHorizontal: "1%",
        backgroundColor: "white",
        alignItems: "center",
        marginRight: "2%",
        paddingBottom: "1%",
        borderRadius: 10,
        marginTop: "2%",
        
    },
})

export default ListFoodSale;