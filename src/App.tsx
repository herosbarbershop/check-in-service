import React, { useState, useEffect } from 'react';
import './App.css';
import { getItem, setItem } from './storageManager';

function App() {
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [checkInInfos, setCheckInInfos] = useState<CheckInInfo[]>(() => update());

  function update(){
    return getItem<CheckInInfo[]>('checkInInfos') ?? [];
  }

  useEffect(() => {
    setCheckInInfos(update());
  }, [isCheckingIn])

  return (
    <div className="App">
      <nav className="navbar navbar-dark navi-color nav-border-bottom">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Hero's Barbershop</span>
          <span className="navbar-brand mb-0 h1 btn">Manage</span>
        </div>
      </nav>
      <header className="App-header header-border-bottom mb-3">
        {<button onClick={() => setIsCheckingIn(!isCheckingIn)} className="btn btn-lg navi-color text-light w-25 py-3 fs-1 fw-bold">{isCheckingIn ? 'Cancel Check In' : 'Check In'}</button>}
      </header>
      {isCheckingIn && <CheckInComponent setIsCheckingIn={setIsCheckingIn} />}
      {!isCheckingIn && <div className="container">
        <table className="table table-borderless mb-5">
          <thead className="navi-color text-light border-light">
            <tr className="table-font border-bottom ">
              <th className="" scope="col">Pos.</th>
              <th className="" scope="col">Customer</th>
              <th scope="col">Haircut</th>
              <th scope="col">Appointment Type</th>
              <th scope="col">Barber</th>
            </tr>
          </thead>
          <tbody>
            {checkInInfos.map((info, i) => (
              <tr key={i} className="table-font border-bottom rounded">
                <td className="">{i + 1}.</td>
                <td className="">{info.customer}</td>
                <td>{info.haircut}</td>
                <td>{info.appointmentType}</td>
                <td>{info.barber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
    </div>
  );
}

interface CheckInComponentProps {
  setIsCheckingIn: (isCheckingIn: boolean) => void;
}

interface CheckInInfo {
  customer: string;
  haircut: string;
  appointmentType: string;
  barber: string;
  payment?: number;
}

function CheckInComponent(props: CheckInComponentProps) {
  const [state, setCheckInState] = useState<string[]>([]);
  const [nextState, setNextState] = useState<number>(0);

  const handleChanges = (input: any) => {
    const newState = [...state];

    if (typeof (input) === 'string') {
      newState[nextState] = input;
    }

    if (typeof (input) === 'object') {
      newState[nextState] = input.target.value
    }

    setCheckInState(newState);
  }

  const handleSubmit = () => {
    const [customer, haircut, appointmentType, barber] = state;
    const checkInInfos = getItem<CheckInInfo[]>('checkInInfos') ?? [];
    const updatedCheckInInfos = [...checkInInfos, { customer, haircut, appointmentType, barber }]
    setItem('checkInInfos', updatedCheckInInfos);
    props.setIsCheckingIn(false);
  }

  const CustomerInput = () => {
    return nextState === 0 ?
      (<input
        onChange={handleChanges}
        value={state[0] ?? ''}
        className="check-in-input fs-1 fw-bold text-center w-100"
        type="text"
        name="search"
        placeholder="Enter Preferred Name"
      />
      ) : null;
  }

  const HairCutInput = () => {
    return nextState === 1 ?
      (<div className="list-group fw-bold fs-2">
        <h5 className="h2">Select Haircut</h5>
        <ul className="list-group px-0">
          <li onClick={() => handleChanges("Mens Haircut")} className="list-group-item">Mens Haircut</li>
          <li onClick={() => handleChanges("Women Haircut")} className="list-group-item">Ladies Haircut</li>
          <li onClick={() => handleChanges("Kids Haircut")} className="list-group-item">Kids Haircut</li>
          <li onClick={() => handleChanges("Beard Trim")} className="list-group-item">Beard Trim</li>
        </ul>
      </div>
      ) : null;
  }

  const AppointmentTypeInput = () => {
    return nextState === 2 ?
      (<div className="list-group fw-bold fs-2">
        <h5 className="h2">Select your appointment type</h5>
        <ul className="list-group px-0">
          <li onClick={() => handleChanges("Google")} className="list-group-item">Google</li>
          <li onClick={() => handleChanges("Booksy")} className="list-group-item">Booksy</li>
          <li onClick={() => handleChanges("Walk-in")} className="list-group-item">Walk-in</li>
          <li onClick={() => handleChanges("Other")} className="list-group-item">Other</li>
        </ul>
      </div>
      ) : null;
  }

  const BarberInput = () => {
    return nextState === 3 ?
      (<div className="list-group fw-bold fs-2">
        <h5 className="h2">Select your Barber</h5>
        <ul className="list-group px-0">
          <li onClick={() => handleChanges("Perfect Lane")} className="list-group-item">Perfect Lane</li>
          <li onClick={() => handleChanges("Cute Liner")} className="list-group-item">David</li>
          <li onClick={() => handleChanges("Killer Cutter")} className="list-group-item">Killer Cutter</li>
          <li onClick={() => handleChanges("Line Master")} className="list-group-item">Line Master</li>
        </ul>
      </div>
      ) : null;
  }

  return (
    <div className="container">
      <div className="card border-0 mx-auto w-50 my-5 text-center">
        <div className="card-body mb-3 px-0">
          {CustomerInput()}
          {HairCutInput()}
          {AppointmentTypeInput()}
          {BarberInput()}
        </div>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" disabled={nextState < 1} onClick={() => setNextState(nextState - 1)} className="btn btn-lg btn-outline-danger fs-1 fw-bold">Back</button>
          <button type="button" disabled={nextState > 2} onClick={() => setNextState(nextState + 1)} className="btn btn-lg btn-outline-danger fs-1 fw-bold">Next</button>
        </div>
        <button type="button" disabled={state.length < 4} onClick={handleSubmit} className="mt-2 btn btn-lg btn-outline-danger fs-1 fw-bold">Submit</button>
      </div>
    </div>);
}

export default App;
