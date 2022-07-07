import { View, TextInput, FlatList, Modal, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, addTodo } from "../utils/Store";
import { TodoList } from "../componets/TodoList";
import { TodoForm } from "../componets/TodoForm";
import tw from "twrnc";
import { Todo } from "../utils/Types";

export function TodoPage() {
  console.log("TodoPage");
  const [modalOpen, modalToggle] = useState(false);
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos) as Todo[];

  console.log(`todos: ${todos?.length}`);

  return (
    <View style={tw`flex-1`}>
      <TodoForm {...{modalOpen, modalToggle}} />

      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoList {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Add Todo"
        color="red"
        onPress={() => {
          console.log("button - addTodo");
          modalToggle(true);
        }}
      />
    </View>
  );
}
