import React, { useState } from "react";
import { Button, Modal, TextInput, View } from "react-native";
import { addTodo, useAppDispatch } from "../utils/Store";
import { Formik } from "formik";
import tw from "twrnc";
import DropDownPicker from "react-native-dropdown-picker";
import { IntervalPicker } from "./IntervalPicker";
import { ReminderInterval } from "../utils/Types";

export type ReminderFormProps = {
  modalOpen: boolean;
  modalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ReminderFormData = {};

export function ReminderForm(pageProps: ReminderFormProps) {
  const [interval, setInterval] = useState<ReminderInterval>(
    ReminderInterval.EVERY_DAY
  );

  function SubmitReminderForm(tile: string, desc: string) {
    console.log("SubmitReminderForm");
    // dispatch(addTodo(text));
    // setText(null);
    // props.modalToggle(false);
  }

  return (
    <Modal visible={pageProps.modalOpen}>
      <View style={tw`flex-1 flex-col m-1`}>
        <Formik
          initialValues={{ title: "", desc: "" }}
          onSubmit={(values) => SubmitReminderForm(values.title, values.desc)}
        >
          {(props) => (
            <View style={tw`flex-1`}>
              <View style={tw`flex-1 justify-center text-left`}>
                <TextInput
                  style={tw`shadow-sm p-5 h-1/8`}
                  placeholder="Title..."
                  onChangeText={props.handleChange("title")}
                  value={props.values.title}
                />
                <TextInput
                  style={tw`shadow-sm p-5 h-1/6`}
                  placeholder="Description..."
                  onChangeText={props.handleChange("desc")}
                  value={props.values.desc}
                  multiline={true}
                />
                <IntervalPicker
                  {...{ intervalType: interval, setIntervalType: setInterval }}
                />
              </View>
              <View style={tw`flex flex-row mt-auto`}>
                <View style={tw`w-1/2`}>
                  <Button
                    title="Cancel"
                    color="red"
                    onPress={() => {
                      console.log("button - reminder - cancel");
                      pageProps.modalToggle(false);
                    }}
                  />
                </View>
                <View style={tw`w-1/2`}>
                  <Button
                    title="Save"
                    color="green"
                    onPress={() => {
                      console.log("button - reminder - save");
                      SubmitReminderForm("", "");
                    }}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
}
