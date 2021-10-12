import React, { useState, useEffect } from 'react';
import { getItem } from './storageManager';
import './App.css';
import { CheckInListComponent } from './areas/customerCheckIn/CheckInListComponent';
import { CheckInInfo, CheckInComponent } from './areas/customerCheckIn/CheckInComponent';

function App() {
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [checkInInfos, setCheckInInfos] = useState<CheckInInfo[]>(() => update());

  function update() {
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
        {<button onClick={() => setIsCheckingIn(!isCheckingIn)} className="btn btn-lg navi-color text-light w-25 py-3 fs-1 fw-bold fade-in">{isCheckingIn ? 'Cancel Check In' : 'Check In'}</button>}
      </header>
      {isCheckingIn && <CheckInComponent setIsCheckingIn={setIsCheckingIn} />}
      {!isCheckingIn && <CheckInListComponent checkInInfos={checkInInfos} />}
    </div>
  );
}

export default App;
