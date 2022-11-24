import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import FastImage from "react-native-fast-image";
import { Food } from "../APIFood/APIFood";

const OptionComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(Food)
    }, [])
    return(
        <View style={Styles.container}>
            {data.map((e, index) => (
                <TouchableOpacity key={index} style={Styles.item}> 
                    <FastImage source={{uri: e.imageOption}} style={{width: 64, height: 64}}/>
                    <Text style={{fontWeight: "500", paddingTop: "2%", fontSize: 12}}>{e.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginVertical: "5%",

    },
    item:{
        alignItems: "center",
        marginHorizontal: '2%',
        marginVertical: "2%",
        paddingBottom: "3%"
    }
})

export default OptionComponent;