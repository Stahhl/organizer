import React, { useState } from "react";
import { Text, FlatList, View, Button } from "react-native";
import { useAppSelector, Reminder } from "../state/Store";
import tw from "twrnc";
import { ReminderForm } from "../componets/ReminderForm";

export function ReminderPage() {
  console.log("ReminderPage");
  const [modalOpen, modalToggle] = useState(false);
  const reminders = useAppSelector((state) => state.reminders) as Reminder[];

  return (
    <View style={tw`flex-1`}>
      <ReminderForm {...{ modalOpen, modalToggle }} />

      <FlatList
        data={reminders}
        renderItem={({ item }) => <Text>lol</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Add Reminder"
        color="red"
        onPress={() => {
          console.log("button - addReminder");
          modalToggle(true);
        }}
      />
    </View>
  );
}
