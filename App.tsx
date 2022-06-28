import { StatusBar } from "expo-status-bar";
import { Platform, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import tw from "twrnc";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";

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

  useEffect(() => { 
    db.transaction((tx) => {
      tx.executeSql("insert into items (done, value) values (0, ?)", ["Hello"]);
      tx.executeSql("select * from Items;", [], (_, { rows }) => {
        console.log(JSON.stringify(rows));
      });
    });
  }, []);

  return (
    <TailwindProvider>
      <View style={tw`flex-1 items-center justify-center bg-red-500`}>
        <Text>Open up App.js to start working on your app! testt</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
