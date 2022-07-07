export type Todo = {
  id: number;
  done: boolean;
  value: string;
};

export enum ReminderInterval {
  EVERY_DAY = "Every day",
  EVERY_WEEK = "Every week",
  EVERY_OTHER_WEEK = "Every other week",
  EVERY_THIRD_WEEK = "Every third week",
  EVERY_MONTH = "Every month",
  EVERY_YEAR = "Every year",
}

export type Reminder = {
  id: number;
  title: string;
  description: string;
  interval: ReminderInterval;
  lastCompletedOn: Date;
  nextDueOn: Date;
};
