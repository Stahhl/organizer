import React, { useState } from "react";
import { ReminderInterval } from "../utils/Types";
import DropDownPicker from "react-native-dropdown-picker";

function ItemsArray(): { label: ReminderInterval; value: ReminderInterval }[] {
  const result: { label: ReminderInterval; value: ReminderInterval }[] = [];

  for (const eStr in ReminderInterval) {
    let eVal: ReminderInterval = ReminderInterval[eStr];
    result.push({ label: eVal, value: eVal });
  }

  return result;
}

export function IntervalPicker(props: {
  intervalType: ReminderInterval;
  setIntervalType: React.Dispatch<React.SetStateAction<ReminderInterval>>;
}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(ItemsArray());

  return (
    <DropDownPicker
      zIndex={1}
      open={open}
      setOpen={setOpen}
      value={props.intervalType}
      setValue={props.setIntervalType}
      items={items}
      setItems={setItems}
    />
  );
}
