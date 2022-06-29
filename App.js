import { Platform, View, StyleSheet } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tab, Text, TabView } from "@rneui/themed";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

export default function App() {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql("insert into items (done, value) values (0, ?)", ["Hello"]);
  //     tx.executeSql("select * from Items;", [], (_, { rows }) => {
  //       console.log(JSON.stringify(rows));
  //     });
  //   });
  // }, []);

  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1">
        <View className="flex-1"> 
          <Text>Hello</Text>
        </View>
        <View>
          <Tab
            className=""
            indicatorStyle={{
              backgroundColor: "white",
              height: 3,
            }}
            variant="primary"
          >
            <Tab.Item
              title="Recent"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: "timer", type: "ionicon", color: "white" }}
            />
            <Tab.Item
              title="favorite"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: "heart", type: "ionicon", color: "white" }}
            />
            <Tab.Item
              title="cart"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: "cart", type: "ionicon", color: "white" }}
            />
          </Tab>
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}