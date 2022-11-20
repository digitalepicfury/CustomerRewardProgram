export const CHANGE_TODAYS_DATE = "CHANGE_TODAYS_DATE";

export const changeTodaysDate = (dateToday: Date) => ({
  type: CHANGE_TODAYS_DATE,
  payload: dateToday,
});