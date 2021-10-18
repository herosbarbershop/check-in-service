import React from 'react';
import { DailyCheckIn } from '../../../types';
import { ManageActionPayload, ManageAction } from '../ManageComponent';

interface ManageDailyCheckInListComponentProps {
  dailyCheckIn: DailyCheckIn;
  handleManageAction: (action: ManageActionPayload) => void;
}

export function ManageDailyCheckInListComponent(props: ManageDailyCheckInListComponentProps) {
  const checkInInfos = props.dailyCheckIn?.checkInInfos ?? [];

  return <div className="">
    <table className="table table-borderless mb-5 fade-in">
      <thead className="navi-color text-light border-light">
        <tr className="fs-5 border-bottom ">
          <th className="" scope="col">Customer</th>
          <th scope="col">Service</th>
          <th scope="col">Appointment</th>
          <th scope="col">Barber</th>
          <th scope="col">Service Status</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {checkInInfos.length ? checkInInfos.map((info, i) => (
          <tr key={i} className="fw-bold border-bottom rounded table-row-color">
            <td className="">{info.customer}</td>
            <td>{info.service}</td>
            <td>{info.appointmentType}</td>
            <td>{info.barber}</td>
            <td>{info.status}</td>
            <td onClick={() => props.handleManageAction({ id: info.id, action: ManageAction.EDIT })} title="Click to display edit view." className="fs-4 py-0 pointer"><i className="fa-solid fa-pen-to-square text-warning text-center"></i></td>
            <td onClick={() => props.handleManageAction({ id: info.id, action: ManageAction.DELETE })} title="Click to delete." className="fs-4 py-0 pointer"><i className="fa-solid fa-trash-can text-danger text-center"></i></td>
          </tr>
        )) :
          <tr className="fw-bold border-bottom rounded table-row-color">
            <td colSpan={8} className="">No check-in found for the selected date.</td>
          </tr>}
      </tbody>
    </table>
  </div>;
}
