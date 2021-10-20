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

  const addNewBarber = () => {
    const barbers = getItem<Barber[]>(storageKeys.BARBERS) ?? [];
    const { firstName, lastName, alias } = barber;

    if (barbers.some(b => b.alias && b.alias?.toLowerCase() === alias?.toLowerCase())) {
      return setAlert({ show: true, message: 'A barber with the same info already exist.', color: 'text-danger' });
    }

    const barberAlias = `HERO-${barbers.length + 1}`;
    const barberCode = `HERO${barbers.length + 1}`;
    const updatedBarbers = [{ firstName, lastName, alias: barberAlias, code: barberCode }, ...barbers];
    setItem(storageKeys.BARBERS, updatedBarbers);
    setAlert({ show: true, message: `Barber with name: ${firstName} ${lastName} and alias ${barberAlias} has been successfully added.`, color: 'text-success' });
    setBarber({ firstName: '', lastName: '' });
    setBarbers(updatedBarbers);
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
    setBarber(barber)
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

  function getBarbers() {
    return getItem<Barber[]>(storageKeys.BARBERS) ?? [];
  }

  return (
    <>
      <button className="btn navi-color" type="button" data-bs-toggle="collapse" data-bs-target="#AddBarbersComponent" aria-expanded="false" aria-controls="AddBarbersComponent">
        <i className="fa-solid fa-user-plus"></i> Add Barber
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
      <div className="fs-4 navi-color p-2 my-2"><i className="fa-solid fa-user"></i>  Barbers</div>
      <ManageBarbersListComponent
        barbers={barbers}
        setBarber={setBarber}
        setAlert={setAlert}
      />
    </>);
}
