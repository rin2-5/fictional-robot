import React from "react";
import { StatusBar, TouchableOpacity } from "react-native-web"
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import { FlatList } from "react-native-gesture-handler";

function HomeScreen() {
  const [colorArray, setColorArray] = useState([
    {red: 255, green: 0, blue: 0, id: "0"},
    {red: 0, green: 255, blue: 0, id: "1"},
    {red: 0, green: 0, blue: 255, id: "2"},
  ])

  function renderItem({item}) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} key={item.id} />
  }

  function addColor() {
    setColorArray([
      ...colorArray,
      {
        red: Math.floor(Math.random() * 256),
      }
    ])
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>

      </TouchableOpacity>
      <FlatList>
      style={styles.list}
      data={colorArray}
      renderItem={renderItem}
      </FlatList>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
