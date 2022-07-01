import { Platform, View, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tab, Text } from "@rneui/themed";
import { Layout } from "./componets/Layout";
import { GetDb } from "./stores/misc";
import tw from "twrnc";
import { Provider } from "react-redux";
import { Store } from "./stores/Store";

export default function App() {
  // const db = GetDb();

  return (
    <Provider store={Store}>
      <SafeAreaView style={tw`flex-1`}>
        {/* <View style={tw`flex-1`}>
        <Text style={tw`text-red-500`}>Hello</Text>
      </View> */}
        <Layout />
      </SafeAreaView>
    </Provider>
  );
}
