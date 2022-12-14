import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Content1 = () => {
  return (
    <View style={Styles.Container}>
      <View>
        <TouchableOpacity style={Styles.itemRow}>
          <Icon name={"ios-wallet-outline"} size={15} />
          <Text style={Styles.textPadding}>
            Ví Coupon
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{borderTopWidth: 0.2, borderBottomWidth: 0.2, borderColor: "gray"}}>
        <TouchableOpacity style={Styles.itemRow}>
          <Icon name={"ios-wallet-outline"} size={15} />
          <Text style={Styles.textPadding}>
            Quản lý thanh toán
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={Styles.itemRow}>
          <Icon name={"ios-wallet-outline"} size={15} />
          <Text style={Styles.textPadding}>
            Chia sẻ thông tin cá nhân
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

});
export default Content1;
