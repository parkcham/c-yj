import { format } from "date-fns";

export const todayDate = new Date();

export const todayMidnight = timeFormat(todayDate, "00:00:00");

export function conditional(day: number) {
  if (day >= 0) {
    return "past";
  }
  return "future";
}

export function day(date: Date) {
  const dis = +todayMidnight - +date;
  return Math.ceil(dis / (1000 * 60 * 60 * 24));
}

export function timeFormat(date: Date, time: string) {
  return new Date(`${format(date, "yyyy-MM-dd")} ${time}`);
}

// export function dateFormat( formatDate: string,date?: Date) {
//   return format(new Date(date), formatDate);
// }
