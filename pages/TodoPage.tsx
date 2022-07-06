import { View, TextInput, FlatList, Modal, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, addTodo, Todo } from "../state/Store";
import { TodoList } from "../componets/TodoList";
import { TodoForm } from "../componets/TodoForm";
import tw from "twrnc";

export function TodoPage() {
  console.log("TodoPage");
  const [modalOpen, modalToggle] = useState(false);
  const [text, setText] = useState<string>(null);
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos) as Todo[];

  console.log(`todos: ${todos?.length}`);

  function SubmitTodoForm() {
    dispatch(addTodo(text));
    setText(null);
    modalToggle(false);
  }

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
