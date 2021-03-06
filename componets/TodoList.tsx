import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { deleteTodo, useAppDispatch } from "../utils/Store";
import tw from "twrnc";
import { Todo } from "../utils/Types";

export function TodoList(prop: Todo) {
  const dispatch = useAppDispatch();

  function removeTodo() {
    console.log("foobar");
    dispatch(deleteTodo(prop.id));
  }

  return (
    <View style={tw`flex flex-row items-center m-1 px-5 shadow-sm`}>
      <Text>{prop.value}</Text>
      <View style={tw`ml-auto`}>
        <Button
          type="clear"
          icon={{ name: "trash", type: "ionicon", color: "black" }}
          onPress={() => removeTodo()}
        />
      </View>
    </View>
  );
}
