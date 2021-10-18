import React from 'react';
import { BarbersComponent } from './barbers/BarbersComponent';
import { ManageCheckInComponent } from './check-ins/ManageCheckInComponent';
import { ServicesComponent } from './services/ServicesComponent';


export enum ManageAction {
  TOGGLE = 'toggle',
  EDIT = 'edit',
  DELETE = 'delete',
}

export interface ManageActionPayload {
  action: ManageAction;
  id: number;
}

export function ManageComponent(props: any) {
  return (
    <div className="container">
      <ul className="nav nav-tabs shadow my-5" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link fw-bold fs-5 active" id="manageCheckIn-tab" data-bs-toggle="tab" data-bs-target="#manageCheckIn" type="button" role="tab" aria-controls="manageCheckIn" aria-selected="true">Manage Check-in</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link fw-bold fs-5" id="services-tab" data-bs-toggle="tab" data-bs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false">Services</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link fw-bold fs-5" id="barbers-tab" data-bs-toggle="tab" data-bs-target="#barbers" type="button" role="tab" aria-controls="barbers" aria-selected="false">Barbers</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link fw-bold fs-5" id="reports-tab" data-bs-toggle="tab" data-bs-target="#reports" type="button" role="tab" aria-controls="reports" aria-selected="false">Reports</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="manageCheckIn" role="tabpanel" aria-labelledby="manageCheckIn-tab">
          <ManageCheckInComponent />
        </div>
        <div className="tab-pane fade" id="services" role="tabpanel" aria-labelledby="services-tab">
          <ServicesComponent />
        </div>
        <div className="tab-pane fade" id="barbers" role="tabpanel" aria-labelledby="barbers-tab">
          <BarbersComponent />
        </div>
        <div className="tab-pane fade" id="reports" role="tabpanel" aria-labelledby="reports-tab">
          Reports
        </div>
      </div>
    </div>
  );
}
