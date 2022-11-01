import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
const FooterHeader = () => {
  return (
    <View style={styles.Container}>
      <View style={{ borderRightWidth: 0.2, borderColor: "gray", paddingHorizontal: "8%"}}>
        <TouchableOpacity style={{alignItems: "center"}}>
          <Icon name={"sticky-note"} size={18}/>
          <Text>Đơn hàng</Text>
        </TouchableOpacity>
      </View>

      <View style={{ borderRightWidth: 0.2, borderColor: "gray", paddingHorizontal: "8%"}}>
        <TouchableOpacity style={{alignItems: "center"}}>
          <Icon name={"sticky-note"} size={18}/>
          <Text>Quán yêu thích</Text>
        </TouchableOpacity>
      </View>


      <View style={{ paddingHorizontal: "8%"}}>
        <TouchableOpacity style={{alignItems: "center"}} >
          <Icon name={"sticky-note"} size={18}/>
          <Text>Sổ địa chỉ</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderTopWidth: 0.2,
    borderColor: "gray"
  },
});

export default FooterHeader;
