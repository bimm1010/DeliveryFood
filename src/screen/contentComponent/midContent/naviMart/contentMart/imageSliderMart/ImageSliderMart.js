import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView, Text, Dimensions, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { imageSliderMart } from '../../API/APIMART'
const { width: screenWidth } = Dimensions.get('window')
const ImageSliderMart = () => {
    const [data, setData] = useState([])
    const slideUp = useRef(null)


    useEffect(() => {
        setData(imageSliderMart)
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            let index = 0;
            const timer = setInterval(() => {
                slideUp.current.scrollTo({ x: index * screenWidth, y: 0, animated: true })
                index += 1;
                if (index === data.length) {
                    index = 0
                }
            }, 3000)
            return(() => {
                clearInterval(timer)
            })
        }
    }, [data])
    return (
        <View style={{ marginTop: "5%" }}>
            <ScrollView
                horizontal
                ref={slideUp}
                pagingEnabled
                contentContainerStyle={{ width: screenWidth * data.length, height: 200 }}
            >
                {data.map((e, index) => (
                    <TouchableOpacity key={index}>
                        <FastImage
                            style={{ width: screenWidth, height: "100%", borderRadius: 5 }}
                            source={{ uri: e.imageURL }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}


export default ImageSliderMart;