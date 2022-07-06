import React, { useState } from "react";
import { ReminderInterval } from "../state/Store";
import DropDownPicker from "react-native-dropdown-picker";


export function IntervalPicker(props: {
  intervalType: ReminderInterval;
  setIntervalType: React.Dispatch<React.SetStateAction<ReminderInterval>>;
}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: ReminderInterval.EVERY_DAY, value: ReminderInterval.EVERY_DAY },
    { label: ReminderInterval.EVERY_WEEK, value: ReminderInterval.EVERY_WEEK },
    { label: ReminderInterval.EVERY_OTHER_WEEK, value: ReminderInterval.EVERY_OTHER_WEEK },
    { label: ReminderInterval.EVERY_THIRD_WEEK, value: ReminderInterval.EVERY_THIRD_WEEK },
    { label: ReminderInterval.EVERY_MONTH, value: ReminderInterval.EVERY_MONTH },
    { label: ReminderInterval.EVERY_YEAR, value: ReminderInterval.EVERY_YEAR },
  ]);

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
