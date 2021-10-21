import React, { useEffect, useState } from 'react';
import { getItem, setItem, storageKeys } from '../../../storageManager';
import { Barber, CheckInInfo, DailyCheckIn, Service, ServiceStatus } from '../../../types';

interface CheckInEditComponentProps {
  checkInInfo: CheckInInfo | undefined;
  setShouldRefresh: (event: any) => void;
}

export function CheckInEditComponent(props: CheckInEditComponentProps) {
  const [optionKey, setOptionKey] = useState<string>();
  const [newValue, setOptionNewValue] = useState<string>();
  const [values, setValues] = useState<{ [key: string]: any; }>();
  const [barbers] = useState<Barber[]>(() => {
    return getItem<Barber[]>(storageKeys.BARBERS) ?? [];
  });
  const [services] = useState<string[]>(() => {
    return getItem<Service[]>(storageKeys.SERVICES)?.filter(s => s.active).map(s => `${s.name} ($${s.price})`) ?? [];
  });

  useEffect(() => {
    if (props.checkInInfo) {
      const { customer, service, status, barber, appointmentType } = props.checkInInfo ?? {} as CheckInInfo;
      setValues({
        Customer: customer,
        Service: service,
        Status: status,
        Barber: barber,
        Appointment: appointmentType
      });
    }
  }, [props.checkInInfo]);

  useEffect(() => {
    if (values && optionKey && newValue) {
      setValues({ ...values, ...{ [`${optionKey}`]: newValue } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newValue]);

  const mapping: { [key: string]: any; } = {
    Service: services,
    Appointment: ['Walk-in', 'Booksy', 'Phone', 'Other'],
    Status: [ServiceStatus.COMPLETED, ServiceStatus.PENDING],
    Barber: barbers.map(b => `${b.firstName} ${b.lastName} (${b.alias})`)
  };

  const handleSaveChanges = () => {
    const updatedCheckIn = {
      ...props.checkInInfo,
      service: values?.Service,
      status: values?.Status,
      barber: values?.Barber,
      appointmentType: values?.Appointment
    } as CheckInInfo;

    const dailyCheckIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];

    for (const item of dailyCheckIns) {
      item.checkInInfos = item.checkInInfos.map(checkin => {
        if (checkin.id === updatedCheckIn.id) {
          return updatedCheckIn;
        }
        return checkin;
      });
    }

    setItem(storageKeys.DAILY_CHECKINS, dailyCheckIns);
    props.setShouldRefresh(Date.now());
  };

  return (
    <div className="mt-3 fade-in">
      <h1 className="fs-5">Click on the category to show options.</h1>
      <div className="mb-3">
        {Object
          .entries(values ?? {} as { [key: string]: any; })
          .filter(([key]) => key)
          .map(([key, value]) => <button onClick={() => setOptionKey(key)} type="button" key={key} className="m-1 badge rounded-pill fs-5 navi-background-color">{`${key}: ${value}`}</button>)}
      </div>
      {optionKey && <div className="mb-3 fade-in">
        <h5 className="fs-5">Click to select new options</h5>
        {mapping[optionKey as string]?.map((value: string, i: number) => <button type="button" disabled={value === newValue} onClick={() => value !== newValue && setOptionNewValue(value)} key={i} className="btn btn-sm navi-background-color mx-1">{value}</button>)}
      </div>}
      <div className="mb-3">
        {newValue && <button type="button" onClick={handleSaveChanges} className="btn btn-sm btn-primary fs-5 fade-in">Save Changes</button>}
      </div>
    </div>
  );
}
