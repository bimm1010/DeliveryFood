import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ChangeLocation = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={{ paddingTop: "4%" }}>
          <Icon name={"search"} size={15} />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder={"Địa điểm hiện tại của bạn ở đâu?..."}
        />
        <TouchableOpacity style={{ paddingTop: "4%" }}>
          <Icon name={"map"} size={15} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: "5%", marginTop: "3%" }}>
          <Text>Địa điểm của tôi</Text>
          <TouchableOpacity>
            <Text style={{ color: "#3ac5c9" }}>Chỉnh sửa</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "4%", paddingHorizontal: "5%", padding: "2%", backgroundColor: "white" }}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Icon name={"home"} size={20} style={{ paddingTop: "3%" }} />
            <View style={{ paddingLeft: "3%" }}>
              <Text style={{ fontWeight: "500" }}>Nhà</Text>
              <Text style={{ fontSize: 10, paddingTop: "1%" }}>lưu địa chỉ</Text>
            </View>
            <Icon name={"chevron-right"} size={18} style={{ paddingLeft: "75%", paddingTop: "3%" }} />
          </TouchableOpacity>
        </View>

        <View style={{
          marginTop: "1%",
          paddingHorizontal: "5%",
          padding: "2%",
          backgroundColor: "white",
          borderBottomColor: "gray",
        }}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Icon name={"briefcase"} size={20} style={{ paddingTop: "3%" }} />
            <View style={{ paddingLeft: "3%" }}>
              <Text style={{ fontWeight: "500" }}>Công ty</Text>
              <Text style={{ fontSize: 10, paddingTop: "1%" }}>lưu địa chỉ</Text>
            </View>
            <Icon name={"chevron-right"} size={18} style={{ paddingLeft: "75%", paddingTop: "3%" }} />
          </TouchableOpacity>
        </View>

        <View style={{
          marginTop: "1%",
          paddingHorizontal: "5%",
          padding: "3%",
          backgroundColor: "white",
          borderBottomColor: "gray",
        }}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Icon name={"plus"} size={20} style={{ paddingTop: "1%" }} color={"#3ac5c9"} />
            <View style={{ paddingLeft: "3%" }}>
              <Text style={{ fontWeight: "500", paddingTop: "1%", color: "#3ac5c9" }}>Thêm địa chỉ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    backgroundColor: "white",
  },
  textInput: {
    paddingRight: "25%",
    fontWeight: "bold",
  },
});
export default ChangeLocation;
