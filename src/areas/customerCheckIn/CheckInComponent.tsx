import React, { useState } from 'react';
import { getItem, setItem, storageKeys } from '../../storageManager';
import { Barber, DailyCheckIn, Service, ServiceStatus } from '../../types';
import { getTodayDate } from '../../utils/dateUtils';
import { SelectionComponent } from './SelectionComponent';

interface CheckInComponentProps {
  setIsCheckingIn: (isCheckingIn: boolean) => void;
}

export function CheckInComponent(props: CheckInComponentProps) {
  const [state, setCheckInState] = useState<string[]>(['']);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [services] = useState<string[]>(() => {
    return getItem<Service[]>(storageKeys.SERVICES)?.filter(s => s.active).map(s => `${s.name} ($${s.price})`) ?? [];
  });
  const [barbers] = useState<Barber[]>(() => {
    return getItem<Barber[]>(storageKeys.BARBERS) ?? [];
  });

  const handleChanges = (input: any) => {
    const newState = [...state];

    if (typeof (input) === 'string' && input) {
      newState[currentIndex] = input;
    }

    if (typeof (input) === 'object') {
      newState[currentIndex] = input.target.value ?? '';
    }

    setCheckInState(newState);
  };

  const handleSubmit = () => {
    const dailyCheckIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];
    const todayDate = getTodayDate();
    const [customer, service, appointmentType, barber] = state;
    const checkin = { id: Date.now(), status: ServiceStatus.PENDING, customer: customer.trim(), service, appointmentType, barber, payment: 0 };

    const index = dailyCheckIns.findIndex(d => d.date === todayDate);

    if (index > -1) {
      dailyCheckIns[index].checkInInfos.push(checkin);
    } else {
      const todayCheckIns = { id: Date.now(), date: todayDate, checkInInfos: [checkin] };
      dailyCheckIns.push(todayCheckIns)
    }

    setItem(storageKeys.DAILY_CHECKINS, dailyCheckIns);
    props.setIsCheckingIn(false);
  };

  const CustomerInput = () => {
    return currentIndex === 0 ? (
      <input
        onChange={handleChanges}
        value={state[0]}
        className="check-in-input fs-2 text-center w-100 fade-in"
        type="text"
        name="search"
        placeholder="Enter preferred name"
        autoFocus={true}
        autoComplete="off"
      />
    ) : null;
  };

  const categories = ['Name', 'Service', 'Appointment', 'Barber'];
  const appointmentTypes = ['Walk-in', 'Booksy', 'Phone', 'Other'];
  const finish = state.filter(value => value?.trim()).length === 4;
  let finishButtonClass = "mt-2 btn btn-lg fs-1 fw-bold w-50 mx-auto";

  if (finish) {
    finishButtonClass = `${finishButtonClass} finish-button`
  } else {
    finishButtonClass = `${finishButtonClass} selection-button`
  }

  if (services.length === 0 || barbers.length === 0) {
    return (<div className="container fade-in">
      <div className="card border-0 mx-auto my-5 text-center">
        <div className="card-body mb-3 px-0">
          <h1 className="card-title fs-3 bg-danger p-3 text-light">You have not added your services and barbers yet. Go to the Manage page and add them.</h1>
        </div>
      </div>
    </div>);
  }

  return (
    <div className="container fade-in">
      <div className="card border-0 mx-auto my-5 text-center">
        <div className="card-body mb-3 px-0">
          <div className="mb-3">
            {state.filter(item => item).map((item, i) => <span key={i} className="badge rounded-pill fs-5 m-1 navi-background-color">{`${categories[i]}: ${item}`}</span>)}
          </div>
          {CustomerInput()}
          <SelectionComponent index={1} options={services} title="What service are you getting?" currentIndex={currentIndex} handleChanges={handleChanges} />
          <SelectionComponent index={2} options={appointmentTypes} title="Select the appointment." currentIndex={currentIndex} handleChanges={handleChanges} />
          <SelectionComponent index={3} options={barbers.map(b => `${b.firstName} ${b.lastName} (${b.alias})`)} title="Who's your hero barber?" currentIndex={currentIndex} handleChanges={handleChanges} />
        </div>
        <div className="btn-group w-50 mx-auto" role="group" aria-label="Basic outlined example">
          <button type="button" disabled={currentIndex < 1} onClick={() => setCurrentIndex(currentIndex - 1)} className="selection-button btn btn-lg fs-1 fw-bold"><i className="fa-solid fa-circle-left"></i> Back</button>
          <button type="button" disabled={currentIndex > 2} onClick={() => setCurrentIndex(currentIndex + 1)} className="selection-button btn btn-lg fs-1 fw-bold">Next <i className="fa-solid fa-circle-right"></i></button>
        </div>
        <button type="button" disabled={!finish} onClick={handleSubmit} className={finishButtonClass}>Finish <i className="fa-solid fa-circle-plus"></i></button>
      </div>
    </div>);
}
