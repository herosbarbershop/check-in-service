import React, { useState } from 'react';
import { getItem, setItem } from '../../storageManager';
import { SelectionComponent } from './SelectionComponent';

interface CheckInComponentProps {
  setIsCheckingIn: (isCheckingIn: boolean) => void;
}

export interface CheckInInfo {
  customer: string;
  haircut: string;
  appointmentType: string;
  barber: string;
  payment?: number;
}

export function CheckInComponent(props: CheckInComponentProps) {
  const [state, setCheckInState] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleChanges = (input: any) => {
    const newState = [...state];

    if (typeof (input) === 'string') {
      newState[currentIndex] = input;
    }

    if (typeof (input) === 'object') {
      newState[currentIndex] = input.target.value;
    }

    setCheckInState(newState);
  };

  const handleSubmit = () => {
    const [customer, haircut, appointmentType, barber] = state;
    const checkInInfos = getItem<CheckInInfo[]>('checkInInfos') ?? [];
    const updatedCheckInInfos = [...checkInInfos, { customer, haircut, appointmentType, barber }];
    setItem('checkInInfos', updatedCheckInInfos);
    props.setIsCheckingIn(false);
  };

  const CustomerInput = () => {
    return currentIndex === 0 ?
      (<input
        onChange={handleChanges}
        value={state[0] ?? ''}
        className="check-in-input display-4 text-center w-100 fade-in"
        type="text"
        name="search"
        placeholder="Enter Preferred Name"
        autoFocus={true} />
      ) : null;
  };

  const haircuts = ['Mens Haircut', 'Women Haircut', 'Kids Haircut', 'Beard Trim'];
  const appointmentTypes = ['Walk-in', 'Google', 'Booksy', 'Other'];
  const barbers = ['Perfect Lane', 'Cute Cutter', 'Line Master', 'Hair Doctor', 'Art of Cute'];
  const finish = state.length === 4;
  let finishButtonClass = "mt-2 btn btn-lg fs-1 fw-bold w-50 mx-auto";

  if (finish) {
    finishButtonClass = `${finishButtonClass} btn-danger`
  } else {
    finishButtonClass = `${finishButtonClass} btn-outline-danger`
  }

  return (
    <div className="container fade-in">
      <div className="card border-0 mx-auto my-5 text-center">
        <div className="card-body mb-3 px-0">
          <div className="mb-3">
            {state.map((item, i) => <span key={i} className="badge rounded-pill fs-3 mx-1 navi-color">{item}</span>)}
          </div>
          {CustomerInput()}
          <SelectionComponent index={1} options={haircuts} title="Select Haircut" currentIndex={currentIndex} handleChanges={handleChanges} />
          <SelectionComponent index={2} options={appointmentTypes} title="Select Appointment Type" currentIndex={currentIndex} handleChanges={handleChanges} />
          <SelectionComponent index={3} options={barbers} title="Select Barber" currentIndex={currentIndex} handleChanges={handleChanges} />
        </div>
        <div className="btn-group w-50 mx-auto" role="group" aria-label="Basic outlined example">
          <button type="button" disabled={currentIndex < 1} onClick={() => setCurrentIndex(currentIndex - 1)} className="btn btn-lg btn-outline-danger fs-1 fw-bold">Back</button>
          <button type="button" disabled={currentIndex > 2} onClick={() => setCurrentIndex(currentIndex + 1)} className="btn btn-lg btn-outline-danger fs-1 fw-bold">Next</button>
        </div>
        <button type="button" disabled={!finish} onClick={handleSubmit} className={finishButtonClass}>Finish</button>
      </div>
    </div>);
}
