import React, { useState, useEffect } from 'react';
import { getItem, setItem, storageKeys } from './storageManager';
import './App.css';
import { CheckInListComponent } from './areas/customerCheckIn/CheckInListComponent';
import { CheckInComponent } from './areas/customerCheckIn/CheckInComponent';
import { CheckInInfo, DailyCheckIn, ServiceStatus, View } from './types';
import { ManageAuthComponent } from './areas/manageCheckIn/ManageAuthComponent';
import { ManageComponent } from './areas/manageCheckIn/ManageComponent';
import { getTodayDate } from './utils/dateUtils';
import { CreateNewCheckInModal } from './areas/customerCheckIn/CreateNewCheckInModal';

function App() {
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [checkInInfos, setDailyCheckIns] = useState<CheckInInfo[]>(() => update());
  const [view, setView] = useState<View>(updateView());
  const [isModelOpen, setIsModalOpen] = useState(() => {
    const dailyCheckIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];
    const todayDate = getTodayDate();
    return !dailyCheckIns.some(d => d.date === todayDate);
  });

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

  let checkInButtonLabel = 'Check In';
  let checkInButtonIcon = <i className=""></i>;

  if (isCheckingIn) {
    checkInButtonLabel = 'Cancel Check In';
    checkInButtonIcon = <i className="fa-solid fa-solid fa-x"></i>;
  }

  const handleNewDailyCheckInCreation = () => {
    const dailyCheckIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];
    const updatedDailyCheckIns: DailyCheckIn[] = [...dailyCheckIns, { id: Date.now(), date: getTodayDate(), checkInInfos: [] }];
    setItem(storageKeys.DAILY_CHECKINS, updatedDailyCheckIns);
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark navi-color nav-border-bottom">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 border px-2 border-3">Hero's Barbershop</span>
          {view === View.CHECK_IN ?
            <span className="navbar-brand mb-0 h1 btn mr-auto border-bottom border-3" data-bs-toggle="modal" data-bs-target="#authenticateMode">{<i className="fa-solid fa-pen-to-square"></i>} Manage</span> :
            <span className="navbar-brand mb-0 h1 btn mr-auto border-bottom border-3" onClick={() => handleViewChange(View.CHECK_IN)}>{<i className="fa-solid fa-calendar-check"></i>} Check In</span>
          }
        </div>
      </nav>
      {view === View.CHECK_IN && (
        <>
          <header className="App-header header-border-bottom mb-3">
            {<button onClick={() => setIsCheckingIn(!isCheckingIn)} className="btn btn-lg navi-color text-light w-25 py-3 fs-1 fw-bold fade-in">{checkInButtonIcon} {checkInButtonLabel}</button>}
          </header>
          <div>
            {isCheckingIn && <CheckInComponent setIsCheckingIn={setIsCheckingIn} />}
            {!isCheckingIn && <CheckInListComponent checkInInfos={checkInInfos} />}
          </div>
        </>)
      }
      {view === View.MANAGE && <ManageComponent />}
      <ManageAuthComponent handleViewChange={handleViewChange} />
      <CreateNewCheckInModal isOpen={isModelOpen} setIsModalOpen={setIsModalOpen} handleNewDailyCheckInCreation={handleNewDailyCheckInCreation} />
    </div>
  );
}

export default App;
