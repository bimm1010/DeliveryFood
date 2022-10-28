import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const MessagePage = () => {
  return (
    <View style={styles.Container}>
      <Image style={styles.resizeImage}  source={require('../../../image/baedale-cat-sherlock-01-pts.png')} />
      <View style={{alignItems: "center"}}>
        <Text style={{fontWeight: "bold"}}>Đang hóng tin nhắn đầu tiên...</Text>
        <Text style={{fontSize: 12}}>BAEMIN sẽ sớm trở lại, lợi hại hơn xưa!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resizeImage : {
    width: "100%",
    height: "50%",
    resizeMode: "center"
  },
  Container: {
    flex: 1,

  }
})

export default MessagePage;
