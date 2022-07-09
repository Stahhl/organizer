import { Reminder, ReminderInterval } from "./Types";

export function CalculateDaysLeft(reminder: Reminder) {
  const now = new Date();
  const nextDueOn = new Date(reminder.nextDueOn);
  const daysLeft = Math.ceil(
    (nextDueOn.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );
  reminder.daysLeft = daysLeft;
}

export function Reset(reminder: Reminder) {
  switch (reminder.interval) {
    case ReminderInterval.EVERY_DAY:
      reminder.daysLeft = 1;
      break;
    case ReminderInterval.EVERY_WEEK:
      reminder.daysLeft = 7;
      break;
    case ReminderInterval.EVERY_OTHER_WEEK:
      reminder.daysLeft = 14;
      break;
    case ReminderInterval.EVERY_THIRD_WEEK:
      reminder.daysLeft = 21;
      break;
    case ReminderInterval.EVERY_MONTH:
      reminder.daysLeft = 30;
      break;
    case ReminderInterval.EVERY_YEAR:
      reminder.daysLeft = 365;
      break;
  }
}

export function DiffInDays(future: Date, past: Date): number {
  return Math.ceil((future.getTime() - past.getTime()) / (1000 * 60 * 60 * 24));
}

export function Recalculate(lastRecalc: Date, reminders: Reminder[]): Date {
  const now = new Date();
  const diffInDays = DiffInDays(now, lastRecalc);

  if (diffInDays <= 0) return lastRecalc;

  reminders.forEach((element) => {
    element.daysLeft -= diffInDays;
  });

  return now;
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
