import { View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { GetDb } from "../stores/Misc";
import { Tab, Text } from "@rneui/themed";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import {
  useAppDispatch,
  useAppSelector,
  addTodos,
  removeTodo,
  clearTodos,
  Todo,
} from "../stores/Store";

const db = GetDb();

export function TodoPage() {
  // const [todos, setItems] = useState(null);
  console.log("TodoPage");
  const [text, setText] = useState(null);
  const dispatch = useAppDispatch();
  let todos = useAppSelector((state) => state.todos);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from Todos where done = ?;`,
        [0],
        (_, { rows }) => {
          // setItems(rows._array);
          // dispatch(clearTodos());
          console.log(`selected ${rows._array.length} rows from Todos`);
          dispatch(addTodos(rows._array));
        }
      );
    });
  }, []);

  console.log(`todos: ${todos.length}`);

  const add = (text) => {
    // is text empty?
    if (text === null || text === "") {
      return false;
    }

    db.transaction((tx) => {
      tx.executeSql(
        "insert into Todos (done, value) values (0, ?)",
        [text],
        (_, result) => {
          console.log(`inserted ${result.rowsAffected} rows into Todos`);
          dispatch(addTodos([{ id: result.insertId, done: false, value: text }]));
        },
        (_, error) => {
          console.log(error);
          return true;
        }
      );
    });
  };

  return (
    <View>
      <Text>Hello</Text>
      <TextInput
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => {
          add(text);
          setText(null);
        }}
        placeholder="what do you need to do?"
        value={text}
      />
    </View>
  );
}
