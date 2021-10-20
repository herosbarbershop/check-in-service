export interface CheckInInfo {
  id: number;
  customer: string;
  service: string;
  appointmentType: string;
  barber: string;
  payment: number;
  status?: ServiceStatus;
}

export enum ServiceStatus {
  COMPLETED = 'Completed',
  PENDING = 'Pending',
}

export enum View {
  CHECK_IN = 'checkin',
  MANAGE = 'manage',
}

export interface DailyCheckIn {
  id: number;
  date: string;
  checkInInfos: CheckInInfo[]
}

export interface Barber {
  firstName: string;
  lastName: string;
  alias?: string;
  code?: string;
}

export interface Service {
  id: number,
  name: string;
  price: number | string;
  active: boolean;
}

export interface AppAlert {
  show: boolean,
  message: string,
  color?: string;
}