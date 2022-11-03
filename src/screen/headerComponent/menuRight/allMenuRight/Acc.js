import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import FooterHeader from "./FooterHeader";
import Content1 from "./Content1";
import Content2 from "./Content2";
const Acc = () => {
  return(
    <ScrollView>
      <TouchableOpacity style={styles.header}>
        <Image source={require('../../../../image/maxresdefault.jpg')} style={styles.imageConfig}/>
        <Text style={{marginRight: "50%", fontSize: 18, fontWeight: "bold"}}>Hoang Nam</Text>
        <Icon name={"chevron-thin-right"} size={18}/>
      </TouchableOpacity>
      <View>
        <FooterHeader />
      </View>

      <View>
        <Content1 />
      </View>

      <View>
        <Content2 />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    padding: "1%",
    paddingHorizontal: "5%"
  },
  imageConfig: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius:50,
    borderColor: "#3ac5c9",
    borderWidth: 2,
    overflow: "hidden"

  }
})

export default Acc;
