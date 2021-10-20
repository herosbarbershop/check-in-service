import React from 'react';
import { CheckInInfo } from '../../types';

interface CheckInListComponentProps {
  checkInInfos: CheckInInfo[];
}
export function CheckInListComponent(props: CheckInListComponentProps) {
  return <div className="container-fluid px-5">
    <table className="table table-borderless mb-5 fade-in">
      <thead className="navi-color text-light border-light">
        <tr className="table-font border-bottom ">
          <th scope="col">Customer</th>
          <th scope="col">Service</th>
          <th scope="col">Appointment</th>
          <th scope="col">Barber</th>
        </tr>
      </thead>
      <tbody>
        {props.checkInInfos.length ? props.checkInInfos.map((info, i) => (
          <tr key={i} className="table-font border-bottom rounded table-row-color">
            <td >{info.customer}</td>
            <td>{info.service}</td>
            <td>{info.appointmentType}</td>
            <td>{info.barber}</td>
          </tr>
        )) :
          (<tr className="table-font border-bottom rounded table-row-color">
            <td colSpan={5}>No check-ins are currently available.</td>
          </tr>)}
      </tbody>
    </table>
  </div>;
}
