import React from "react";
import { StatusBar } from "react-native";
import Provider from "./src/store/provider/Provider";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stack/MainStack";
const App = () => {
  return(
    <Provider>
      <StatusBar 
        backgroundColor={"#3ac5c9"}
      />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
