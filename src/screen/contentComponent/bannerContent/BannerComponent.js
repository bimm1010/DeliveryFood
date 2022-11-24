import React, { useEffect, useState, useRef } from "react";
import {  ScrollView, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import FastImage from "react-native-fast-image";

const { width: screenWidth } = Dimensions.get('window')


const BannerComponent = () => {
    const [imageListState, setImageListState] = useState([])

    const stepUp = useRef(null);
    
    useEffect(() => {
        const imageList = [
            'https://www.emg.com.vn/wp-content/uploads/2022/01/baemin-la-gi-1.png',
            'https://cdn.tgdd.vn//GameApp/-1//1-800x450-174.png',
            'https://vtv1.mediacdn.vn/thumb_w/650/2021/9/22/photo-1-1632304300620440413136-crop-16323047011891636679780.jpg'
        ]
        setImageListState(imageList)
    }, [])


    useEffect(() => {
        if(imageListState.length > 0){
            let index = 0;
            const timer = setInterval(() => {
                stepUp.current.scrollTo({x: index * screenWidth, y: 0, animated: true})
                index += 1;
                if(index === imageListState.length){
                    index = 0;
                }
            }, 3000)
            return(() => {
                clearInterval(timer)
            })
        }
    }, [imageListState])


    // lấy index image
    // const handleScroll = (e) => {
    //     if (!e) {
    //         return;
    //     }
    //     const { nativeEvents } = e //gán biến = eventPoint
    //     if(nativeEvents && nativeEvents.contentOffset){
    //         const currentOffset = nativeEvents.contentOffset.x;
    //         let imageIndex = 0;
    //         if(nativeEvents.contentOffset.x > 0){
    //             imageIndex = Math.floor((nativeEvents.contentOffset.x + screenWidth / 2) / screenWidth)
    //         }
    //     }
    // }
    return (
        <View style={Styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                // onScroll={handleScroll}
                scrollEventThrottle={16}
                ref={stepUp}
                contentContainerStyle={{ width: screenWidth * imageListState.length, height: 200 }}
            >
                {imageListState.map(item => (
                    <TouchableOpacity key={item} style={Styles.imageStyle}>
                        <FastImage
                            style={{ width: screenWidth, height: "100%", borderRadius: 5 }}
                            source={{ uri: item }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: "5%",
        flexDirection: "row"
    },
    imageStyle: {
        marginRight: "1%"
    }
})

export default BannerComponent;