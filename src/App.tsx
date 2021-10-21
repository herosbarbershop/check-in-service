import React, { useState, useEffect } from 'react';
import { getItem, setItem, storageKeys } from './storageManager';
import './App.css';
import { CheckInListComponent } from './areas/customerCheckIn/CheckInListComponent';
import { CheckInComponent } from './areas/customerCheckIn/CheckInComponent';
import { Barber, CheckInInfo, DailyCheckIn, ServiceStatus, View } from './types';
import { ManageAuthComponent } from './areas/manageCheckIn/ManageAuthComponent';
import { ManageComponent } from './areas/manageCheckIn/ManageComponent';
import { getTodayDate } from './utils/dateUtils';

function App() {
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [checkInInfos, setDailyCheckIns] = useState<CheckInInfo[]>(() => update());
  const [view, setView] = useState<View>(updateView());
  const [isModelOpen, setIsModalOpen] = useState(false);

  function update() {
    const checkIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];
    return checkIns
      .find(c => c.date === getTodayDate())?.checkInInfos
      .filter(c => c.status === ServiceStatus.PENDING) ?? [];
  }

  function updateView() {
    return getItem<View>(storageKeys.VIEW) ?? View.CHECK_IN;
  }

  useEffect(() => {
    setDailyCheckIns(update());
  }, [isCheckingIn, view]);

  const handleViewChange = (view: View) => {
    setItem(storageKeys.VIEW, view);
    setView(updateView());
  }

  let checkInButtonLabel = 'Check-in';
  let checkInButtonIcon = <i className="fa-solid fa-calendar-check"></i>;

  if (isCheckingIn) {
    checkInButtonLabel = 'Cancel Check-in';
    checkInButtonIcon = <i className="fa-solid fa-solid fa-x"></i>;
  }

  const authorize = () => {
    handleViewChange(View.MANAGE);
    setIsModalOpen(false);
  };

  const initializeAuth = () => {
    if (getItem<Barber[]>(storageKeys.BARBERS)) {
      setIsModalOpen(true);
    } else {
      authorize();
    }
  };

  return (
    <div className="App mb-5">
      <nav className="navbar navbar-dark navi-background-color nav-border-bottom">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 fs-4 fw-bold border rounded-3 px-2 border-3 text-danger">Hero's Barbershop</span>
          {view === View.CHECK_IN ?
            <span className="navbar-brand mb-0 h1 btn mr-auto border-bottom border-3" onClick={initializeAuth}>{<i className="fa-solid fa-pen-to-square"></i>} Manage</span> :
            <span className="navbar-brand mb-0 h1 btn mr-auto border-bottom border-3" onClick={() => handleViewChange(View.CHECK_IN)}>{<i className="fa-solid fa-calendar-check"></i>} Check-in</span>
          }
        </div>
      </nav>
      {view === View.CHECK_IN && (
        <>
          <header className="App-header header-border-bottom mb-3">
            {<button onClick={() => setIsCheckingIn(!isCheckingIn)} className="btn btn-lg navi-background-color text-light py-3 px-5 fs-1 fw-bold fade-in">{checkInButtonIcon} {checkInButtonLabel}</button>}
          </header>
          <div>
            {isCheckingIn && <CheckInComponent setIsCheckingIn={setIsCheckingIn} />}
            {!isCheckingIn && <CheckInListComponent checkInInfos={checkInInfos} />}
          </div>
        </>)
      }
      {view === View.MANAGE && <ManageComponent />}
      <ManageAuthComponent isOpen={isModelOpen} setIsModalOpen={setIsModalOpen} authorize={authorize} />
    </div>
  );
}

export default App;
