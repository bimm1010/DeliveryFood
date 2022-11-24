import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import { Brand } from '../API/APIMART'

const { width: screenWidth } = Dimensions.get('window')

const BrandMart = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        setData(Brand)
    }, [data])
    return (
        <View>
            <Text style={{ marginTop: "5%", fontWeight: "700" }}>Xem các thương hiệu</Text>
            <View>
                <ScrollView
                    horizontal
                    contentContainerStyle={{width: (screenWidth / 4) * data.length}}
                >
                    {data.map((e, index) => (
                        <TouchableOpacity key={index} style={Styles.container}>
                            <FastImage source={{ uri: e.imageBrand }} style={Styles.image} resizeMode={FastImage.resizeMode.stretch} />
                            <Text style={{ fontSize: 10 }}>{e.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: "1%",
        alignItems: 'center',
        marginRight: "4.8%"
    },
    image: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
    }
})

export default BrandMart;