import React from 'react';
import { AppAlert, Barber } from '../../../types';

interface AddBarbersComponentProps {
  setBarbers: (barbers: Barber[]) => void;
  barber: Barber;
  alert: AppAlert;
  handleOnChange: (barber: Barber) => void;
  handleSubmit: () => void;
}

export function AddBarbersComponent(props: AddBarbersComponentProps) {
  const handleOnChange = (e: any) => props.handleOnChange({ ...props.barber, [e.target.name]: e.target.value });
  const handleClear = () => props.handleOnChange({ firstName: '', lastName: '' });
  const handleSubmit = () => props.handleSubmit();

  return (
    <div className="row">
      <div className="col-md-12">
        <div>
          <div className="mb-3 text-center">
            {props.alert.show && <div id="barberHelp" className={`${props.alert.color} "form-text fw-bold fs-4"`}><i className="fa-solid fa-circle-info"></i> {props.alert.message}</div>}
          </div>
        </div>
      </div>
      <div className="col-md-6 mx-auto">
        <div>
          <div className="mb-3">
            <label htmlFor="barberFirstName" className="form-label fw-bold">First Name</label>
            <input onChange={handleOnChange} name="firstName" type="text" className="form-control" id="barberFirstName" aria-describedby="barberfnHelp" value={props.barber.firstName} placeholder="Enter first name" />
          </div>
          <div className="mb-3">
            <label htmlFor="barberLastName" className="form-label fw-bold">Last Name</label>
            <input onChange={handleOnChange} name="lastName" type="text" className="form-control" id="barberLastName" aria-describedby="barberlnHelp" value={props.barber.lastName} placeholder="Enter last name" />
          </div>
          <div className="mb-3">
            <h5 className="fs-5">{props.barber.alias ? `Alias: ${props.barber.alias}` : ''}</h5>
          </div>
          <div className="mb-1">
            <button onClick={() => handleClear()} type="button" className="btn btn-secondary btn-small">Clear fields</button>
          </div>
          <button onClick={handleSubmit} type="submit" className="btn selection-button w-100 fs-5 fw-bold">Submit</button>
        </div>
      </div>
    </div>);
}
