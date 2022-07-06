import React, { useState } from "react";
import { Button, Modal, TextInput, View } from "react-native";
import { addTodo, useAppDispatch } from "../state/Store";
import tw from "twrnc";

export type TodoFormProps = {
  modalOpen: boolean;
  modalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export function TodoForm(props: TodoFormProps) {
  const [text, setText] = useState<string>(null);
  const dispatch = useAppDispatch();

  function SubmitTodoForm() {
    dispatch(addTodo(text));
    setText(null);
    props.modalToggle(false);
  }

  return (
    <Modal visible={props.modalOpen}>
      <View style={tw`flex-1 flex-col m-1`}>
        <TextInput
          style={tw`flex-1 shadow-sm text-center mt-auto`}
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
                props.modalToggle(false);
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
  );
}
