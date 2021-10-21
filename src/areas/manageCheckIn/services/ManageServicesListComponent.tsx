import React from 'react';
import { getItem, storageKeys } from '../../../storageManager';
import { AppAlert, Service } from '../../../types';

interface ManageServicesListComponentProps {
  services: Service[];
  setService: (service: Service) => void;
  setAlert: (alert: AppAlert) => void;
}

export function ManageServicesListComponent(props: ManageServicesListComponentProps) {
  const handleOnClick = (id: Number) => {
    const services = getItem<Service[]>(storageKeys.SERVICES) ?? [];
    const foundService = services.find(s => s.id === id);
    props.setService(foundService as Service);
    props.setAlert({ show: false, message: '' })
  };

  return (
    <div className="row">
      {props.services.map((service, i) => (
        <div className="col-md-3" key={service.id}>
          <div className="card m-1">
            <div className="card-body">
              <h5 className="card-title mx-1 navi-font-color">{service.name}</h5>
              <h6 className="card-subtitle mb-2 mx-1 text-muted navi-font-color">Price: {`$${service.price}`}</h6>
              <h6 className="card-subtitle mb-2 mx-1 text-muted navi-font-color">Status: {service.active ? 'Active' : 'Not Active'}</h6>
              <button onClick={() => handleOnClick(service.id)} type="button" className="btn btn-sm navi-background-color mx-1 w-100">Update</button>
            </div>
          </div>
        </div>))}
    </div>);
}
