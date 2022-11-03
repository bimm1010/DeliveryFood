import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import homeScreen from "../screen/homeScreen/HomeScreen";
import ChangeLocation from "../screen/headerComponent/location/ChangeLocation";
import MessagePage from "../screen/headerComponent/message/MessagePage";
import Acc from "../screen/headerComponent/menuRight/allMenuRight/Acc";
import SearchComponent from "../screen/headerComponent/searchBar/SearchComponent";

const Stack = createNativeStackNavigator()
const MainStack = () => {
    return (
        <Stack.Navigator initialRouterName={'Home'}>
            <Stack.Screen name={"Home"} component={homeScreen} options={{headerShown: false}}/>
            <Stack.Screen name={'ChangeLocation'} component={ChangeLocation} options={{title: "Nhập địa chỉ"}}/>
            <Stack.Screen name={"Mess"} component={MessagePage} options={{title: "Hộp thư"}}/>
            <Stack.Screen name={'Account'} component={Acc} options={{title: "Thông tin tài khoản"}}/>
            <Stack.Screen name={"Search"} component={SearchComponent}/>
        </Stack.Navigator>
    )
}

export default MainStack;
