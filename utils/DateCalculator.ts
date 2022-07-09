import { Reminder, ReminderInterval } from "./Types";

export function Recalculate(reminders: Reminder[]) {
  reminders.forEach((element) => {
    DateCalculator(element);
  });
}

export function DateCalculator(reminder: Reminder) {
  const now = new Date();
  const lastCompletedOn = new Date(reminder.lastCompletedOn);
  const nextDueOn = new Date(reminder.nextDueOn);
  const interval = reminder.interval;

  switch (interval) {
    case ReminderInterval.EVERY_DAY:
      nextDueOn.setDate(lastCompletedOn.getDate() + 1);
      break;
    case ReminderInterval.EVERY_WEEK:
      nextDueOn.setDate(lastCompletedOn.getDate() + 7);
      break;
    case ReminderInterval.EVERY_OTHER_WEEK:
      nextDueOn.setDate(lastCompletedOn.getDate() + 14);
      break;
    case ReminderInterval.EVERY_THIRD_WEEK:
      nextDueOn.setDate(lastCompletedOn.getDate() + 21);
      break;
    case ReminderInterval.EVERY_MONTH:
      nextDueOn.setMonth(lastCompletedOn.getMonth() + 1);
      break;
    case ReminderInterval.EVERY_YEAR:
      nextDueOn.setFullYear(lastCompletedOn.getFullYear() + 1);
      break;
  }

  if (nextDueOn < now) {
    nextDueOn.setDate(nextDueOn.getDate() + 1);
  }

  reminder.nextDueOn = nextDueOn;
}
