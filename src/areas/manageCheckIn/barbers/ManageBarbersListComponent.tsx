import React from 'react';
import { getItem, storageKeys } from '../../../storageManager';
import { AppAlert, Barber } from '../../../types';

interface ManageBarbersListComponentProps {
  barbers: Barber[];
  setBarber: (barber: Barber) => void;
  setAlert: (alert: AppAlert) => void;
}

export function ManageBarbersListComponent(props: ManageBarbersListComponentProps) {
  const handleOnClick = (alias: string) => {
    const barbers = getItem<Barber[]>(storageKeys.BARBERS) ?? [];
    const foundBarber = barbers.find(s => s.alias === alias);
    props.setBarber(foundBarber as Barber);
    props.setAlert({ show: false, message: '' });
  };

  return (
    <div className="row">
      {props.barbers.length > 0 ? props.barbers.map((barber, i) => (
        <div className="col-md-3" key={barber.alias}>
          <div className="card m-1">
            <div className="card-body">
              <h5 className="card-title mx-1 navi-font-color">{barber.firstName} {barber.lastName}</h5>
              <h6 className="card-subtitle mb-2 mx-1 text-muted navi-font-color">Alias: {barber.alias}</h6>
              <button onClick={() => handleOnClick(barber.alias as string)} type="button" className="btn btn-sm navi-background-color mx-1 w-100">Update</button>
            </div>
          </div>
        </div>)) : <div className="fs-5">No barber has been added. Click the Add Barber to add new barber information.</div>
      }
    </div>);
}
