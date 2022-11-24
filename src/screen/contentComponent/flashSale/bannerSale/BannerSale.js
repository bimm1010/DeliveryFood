import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import ListFoodSale from "../listFoodSale/ListFoodSale";


const BannerSale = () => {
    const [second, setSecond] = useState(59)
    const [minute, setMinute] = useState(59)
    const [hour, setHour] = useState(2)
    const [show, setShow] =  useState(true)
    useEffect(() => {
        const timer = setInterval(() => {
            setSecond(second - 1)
            if(second === 0){
                setSecond(59)
                setMinute(minute - 1)
                if(minute === 0) {
                    setMinute(59)
                    setHour(hour - 1)
                    if(hour === 0 && minute === 0 && second === 0){
                        setHour(0)
                        setMinute(0)
                        setSecond(0)
                        setShow(false)
                        clearInterval(timer)
                    }
                }
            }
        }, 1000)
        return(() => {
            clearInterval(timer)
        })
    },[second])

    return (
        <View style={{marginVertical: "10%"}}>
            <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>{/**flash sale  */}
                        <FastImage source={{uri: "https://www.pngall.com/wp-content/uploads/2/Flash-Sale-PNG-Image.png"}} style={{width: 120, height: 50}}/>
                        <View style={s.timer}>
                            <Text style={s.text}>
                                {hour} 
                            </Text>
                        </View>
                        <Text style={s.emo}>:</Text>
                        <View style={s.timer}>
                            <Text style={s.text}>
                                {minute} 
                            </Text>
                        </View>
                        <Text style={s.emo}>:</Text>
                        <View style={s.timer}>
                            <Text style={s.text}>
                                {second}
                            </Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 19, fontWeight: "600"}}>Mart khao đến 100k</Text>
                </View>
                <FastImage source={{uri: "https://blog.baemin.vn/desktop/images/baedale-cat-sherlock-01-pts.png"}} style={{width: 100, height: 100}} resizeMode={FastImage.resizeMode.contain}/>
            </TouchableOpacity>
            {!show ? "" : <ListFoodSale /> }
        </View>
    )
}

const s = StyleSheet.create({
    timer: {
        backgroundColor: "red",
        padding: "3%",
        borderRadius: 5
    },
    text: {
        fontSize: 16,
        fontWeight: '800',
        color: 'white'
    },
    emo: {
        color: "red",
        fontSize: 18
    }
})

export default BannerSale;