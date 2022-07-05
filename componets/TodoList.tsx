import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { CheckBox } from "@rneui/base";
import { deleteTodo, Todo, useAppDispatch } from "../state/Store";
import tw from "twrnc";

export function TodoList(prop: Todo) {
  const [isSelected, setSelection] = useState(false);
  const dispatch = useAppDispatch();

  function foobar() {
    // console.log("foobar");
    alert("foobar");
  }

  return (
    <View style={tw`flex flex-row items-center m-1 px-5 shadow-sm`}>
      <CheckBox checked={isSelected} onPress={() => foobar()} />
      <Text>{prop.value}</Text>
      <View style={tw`ml-auto`}>
        <Button
          type="clear"
          icon={{ name: "trash", type: "ionicon", color: "black" }}
          onPress={() => foobar()}
        />
      </View>
    </View>
  );
}
