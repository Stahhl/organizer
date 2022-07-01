import { Platform, View, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tab, Text } from "@rneui/themed";
import { Layout } from "./componets/Layout";
import tw from "twrnc";
import { Provider } from "react-redux";
// import { Store } from "./stores/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from "./state/Store";

export default function App() {
  // const db = GetDb();

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <SafeAreaView style={tw`flex-1`}>
          <Layout />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
