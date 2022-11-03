import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Content2 = () => {
  return(
    <View style={Styles.Container}>
      <View>
        <TouchableOpacity style={Styles.itemRow}>
          <Icon name={"wallet"} size={15}/>
          <Text style={Styles.textPadding}>
            Đánh giá BAEMIN
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.borderLine}>
        <TouchableOpacity style={Styles.itemRow}>
          <Icon name={"wallet"} size={15}/>
          <Text style={Styles.textPadding}>
            Thông báo
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{borderBottomWidth: 0.2, borderColor: "gray"}}>
        <TouchableOpacity style={Styles.itemRow}>
          <Icon name={"wallet"} size={15}/>
          <Text style={Styles.textPadding}>
            Hỗ trợ
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={Styles.itemRow}>
          <Icon name={"wallet"} size={15}/>
          <Text style={Styles.textPadding}>
            Điều khoản và chính sách
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  Container: {
    marginTop: "3%",
    backgroundColor: "white",
  },
  itemRow: {
    flexDirection: "row",
    paddingHorizontal: "5%",
    padding: "3%"
  },
  textPadding: {
    paddingLeft: "3%"
  },
  borderLine: {
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: "gray",
  }
})

export default Content2
