import React, { useState } from 'react';
import { getItem, setItem, storageKeys } from '../../../storageManager';
import { AppAlert, Barber } from '../../../types';
import { AddBarbersComponent } from './AddBarbersComponent';
import { ManageBarbersListComponent } from './ManageBarbersListComponent';

export function BarbersComponent() {
  const [barbers, setBarbers] = useState(() => getBarbers());
  const [barber, setBarber] = useState<Barber>({ firstName: '', lastName: '' });
  const defaultAlert = { show: false, message: '', color: '' };
  const [alert, setAlert] = useState<AppAlert>(defaultAlert);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showInfoMessage, setShowInfoMessage] = useState(false);

  const addNewBarber = () => {
    const barbers = getItem<Barber[]>(storageKeys.BARBERS) ?? [];
    const { firstName, lastName } = barber;

    const count = barbers.length + 1;
    const barberAlias = `HERO-${count}`;
    const barberCode = `HERO${count}`;
    const updatedBarbers = [{ firstName, lastName, alias: barberAlias, code: barberCode }, ...barbers];

    setItem(storageKeys.BARBERS, updatedBarbers);
    setAlert({ show: true, message: `${firstName} ${lastName} has been successfully added with alias ${barberAlias}.`, color: 'text-success' });
    setBarber({ firstName: '', lastName: '' });
    setBarbers(getBarbers());
  }

  const updateBarber = () => {
    const barbers = getItem<Barber[]>(storageKeys.BARBERS) ?? [];
    const { firstName, lastName, alias } = barber;

    const updatedBarbers = barbers.map(eachBarber => {
      if (eachBarber.alias === alias) {
        return { ...eachBarber, firstName, lastName };
      }
      return eachBarber;
    });

    setItem(storageKeys.BARBERS, updatedBarbers);
    setAlert({ show: true, message: `Barber with name: ${firstName} ${lastName} (${barber.alias}) has been successfully updated.`, color: 'text-success' });
    setBarber({ firstName: '', lastName: '' });
    setBarbers(updatedBarbers);
  }

  const handleOnChange = (barber: Barber) => {
    setBarber(barber);
  }

  const handleSubmit = () => {
    const { firstName, lastName } = barber;

    if (!firstName || !lastName) {
      return setAlert({ show: true, message: `First name and last name are required for barbers.`, color: 'text-danger' });;
    }

    if (barber.alias) {
      return updateBarber();
    }

    addNewBarber();
  }

  const handleSetBarber = (service: Barber) => {
    if (!isFormOpen) {
      setShowInfoMessage(true);
    }
    setBarber(service);
  }

  const handleFormToggle = () => {
    if (showInfoMessage) {
      setShowInfoMessage(false);
    }
    setIsFormOpen(!isFormOpen);
  }

  function getBarbers() {
    return getItem<Barber[]>(storageKeys.BARBERS) ?? [];
  }

  return (
    <>
      {showInfoMessage && <div className="fw-bold fs-5 mb-2 text-info"><i className="fa-solid fa-circle-info"></i> Click the Add Barber button to view the edit form.</div>}
      <button onClick={handleFormToggle} className="btn navi-background-color" type="button" data-bs-toggle="collapse" data-bs-target="#AddBarbersComponent" aria-expanded="false" aria-controls="AddBarbersComponent">
        <i className={`fa-solid ${isFormOpen ? 'fa-xmark' : 'fa-plus'}`}></i> {isFormOpen ? 'Close Form' : 'Add Barber'}
      </button>
      <div className="collapse" id="AddBarbersComponent">
        <div className="card card-body">
          <AddBarbersComponent
            setBarbers={setBarbers}
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            alert={alert}
            barber={barber}
          />
        </div>
      </div>
      <div className="fs-4 navi-background-color p-2 my-2"><i className="fa-solid fa-user"></i>  Barbers</div>
      <ManageBarbersListComponent
        barbers={barbers}
        setBarber={handleSetBarber}
        setAlert={setAlert}
      />
    </>
  );
}
