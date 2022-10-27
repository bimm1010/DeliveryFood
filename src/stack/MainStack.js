import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homeScreen from "../screen/homeScreen/HomeScreen";
import ChangeLocation from "../screen/headerComponent/location/ChangeLocation";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return(
    <Stack.Navigator initialRouterName={'Home'}>
      <Stack.Screen name={"Home"}  component={homeScreen} options={{headerShown: false}}/>
      <Stack.Screen name={'ChangeLocation'} component={ChangeLocation} options={{title: "Nhập địa chỉ"}}/>
    </Stack.Navigator>
  )
}

export default MainStack;
