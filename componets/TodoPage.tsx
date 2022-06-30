import { View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { GetDb } from "../stores/Misc";

const db = GetDb();

export function TodoPage() {
  const [todos, setItems] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from Todos where done = ?;`,
        [0],
        (_, { rows }) => {
          setItems(rows._array);
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
        (_, { rows }) => {
          console.log(`inserted row into Todos`);
          setItems([...todos, rows._array[0]]);
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
