import { CalculateDaysLeft, DiffInDays } from "../utils/DateCalculator";
import { Reminder, ReminderInterval } from "../utils/Types";

test("CalculateDaysLeft", () => {
  const data = [
    [new Date(2020, 0, 1), new Date(2020, 0, 1), 0],
    [new Date(2020, 0, 2), new Date(2020, 0, 1), 1],
    [new Date(2020, 0, 1), new Date(2020, 0, 2), -1],
  ];
  data.forEach((element) => {
    expect(DiffInDays(element[0] as Date, element[1] as Date)).toBe(
      element[2] as number
    );
  });
});
