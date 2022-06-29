import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";
import { useEffect } from "react";

export function GetDb(): SQLite.WebSQLDatabase {
  console.log("GetDb...");

  if (Platform.OS === "web") {
    throw new Error("GetDb not implemented for web");
  }

  const db = SQLite.openDatabase("db.db");

  // Create the tables if they don't exist.
  // Console log existing rows rows.
  db.transaction((tx) => {
    console.log("Creating tables...");
    tx.executeSql(
      "create table if not exists Todos (id integer primary key not null, done int, value text)"
    );
  });

  return db;
}