import { View, TextInput, FlatList, Modal, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, addTodo, Todo } from "../state/Store";
import { TodoList } from "../componets/TodoList";
import tw from "twrnc";

// const db = GetDb();

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

      <Modal visible={modalOpen} presentationStyle={"pageSheet"}>
        <View style={tw`flex-1 flex-col m-1`}>
          <TextInput
            style={tw`flex-1 shadow-sm  text-center mt-auto`}
            placeholder="what do you need to do?"
            value={text}
            onChangeText={setText}
            onSubmitEditing={SubmitTodoForm}
          />
          <View style={tw`flex flex-row mt-auto`}>
            <View style={tw`w-1/2`}>
              <Button
                title="Cancel"
                color="red"
                onPress={() => {
                  console.log("button - addTodo - cancel");
                  modalToggle(false);
                }}
              />
            </View>
            <View style={tw`w-1/2`}>
              <Button
                title="Save"
                color="green"
                onPress={() => {
                  console.log("button - addTodo - save");
                  SubmitTodoForm();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

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
