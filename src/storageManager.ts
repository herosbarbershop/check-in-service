export function getItem<T>(key: string): T | null {
  const stringItem = localStorage.getItem(key);

  if (!stringItem) {
    return null;
  }

  return JSON.parse(stringItem);
}

export function setItem(key: string, item: any) {
  const stringItem: string = JSON.stringify(item);
  localStorage.setItem(key, stringItem);
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}

export enum storageKeys {
  DAILY_CHECKINS = '_$dailyCheckIns',
  BARBERS = '_$barbers',
  SERVICES = '_$services',
  VIEW = '_$view',
  CHECKIN_MANAGE_ACTION = '_$checkInManageAction',
}