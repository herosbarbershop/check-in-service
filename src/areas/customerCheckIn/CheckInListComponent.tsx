import React from 'react';
import { CheckInInfo } from "./CheckInComponent";

interface CheckInListComponentProps {
  checkInInfos: CheckInInfo[];
}
export function CheckInListComponent(props: CheckInListComponentProps) {
  return <div className="container">
    <table className="table table-borderless mb-5 fade-in">
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
        {props.checkInInfos.map((info, i) => (
          <tr key={i} className="table-font border-bottom rounded table-row-color">
            <td className="">{i + 1}.</td>
            <td className="">{info.customer}</td>
            <td>{info.haircut}</td>
            <td>{info.appointmentType}</td>
            <td>{info.barber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
}
