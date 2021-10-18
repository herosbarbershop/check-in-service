import { getItem, storageKeys } from "../storageManager";
import { DailyCheckIn } from "../types";
import { getTodayDate } from "./dateUtils";

export const getTodayCheckIn = () => {
  const checkIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];
  return checkIns.find(c => c.date === getTodayDate());
}