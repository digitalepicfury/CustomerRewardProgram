import { CHANGE_TODAYS_DATE } from "./actions";

export const initialState: Date = new Date();

export default function dateToday(state = initialState, action: any) {
  switch (action.type) {
    case CHANGE_TODAYS_DATE:
      return action.payload;      
    default:
      return state;
  }
}