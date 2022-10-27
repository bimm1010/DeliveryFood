import React from "react";
import Provider from "./src/store/provider/Provider";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stack/MainStack";
const App = () => {
  return(
    <Provider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
