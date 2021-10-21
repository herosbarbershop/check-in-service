import React, { useState } from 'react';
import { getItem, setItem, storageKeys } from '../../../storageManager';
import { AppAlert, Service } from '../../../types';
import { AddServicesComponent } from './AddServicesComponent';
import { ManageServicesListComponent } from './ManageServicesListComponent';

export function ServicesComponent(props: any) {
  const [services, setServices] = useState(() => getServices());
  const [service, setService] = useState<Service>({ id: 0, name: '', price: 0, active: false });
  const defaultAlert = { show: false, message: '', color: '' };
  const [alert, setAlert] = useState<AppAlert>(defaultAlert);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showInfoMessage, setShowInfoMessage] = useState(false);

  const formatPrice = (price: string | number) => parseFloat(parseFloat(price as string).toFixed(2));

  const addNewService = (name: string, price: string | number, active: boolean) => {
    const services = getItem<Service[]>(storageKeys.SERVICES) ?? [];

    if (services.some(s => s.name.toLowerCase() === name.toLowerCase())) {
      return setAlert({ show: true, message: 'A service with the same name already exist.', color: 'text-danger' });
    }

    const parsedPrice = formatPrice(price);
    const updatedServices = [{ id: Date.now(), name, price: parsedPrice, active }, ...services];
    setItem(storageKeys.SERVICES, updatedServices);
    setAlert({ show: true, message: `Service with name: ${name} and price ${parsedPrice} has been successfully added.`, color: 'text-success' });
    setService({ id: 0, name: '', price: 0, active: false });
    setServices(updatedServices);
  }

  const updateService = (name: string, price: string | number, active: boolean) => {
    const services = getItem<Service[]>(storageKeys.SERVICES) ?? [];

    const updatedServices = services.map(eachService => {
      if (eachService.id === service.id) {
        return { ...eachService, name, price, active };
      }
      return eachService;
    });

    const parsedPrice = formatPrice(price);
    setItem(storageKeys.SERVICES, updatedServices);
    setAlert({ show: true, message: `Service with name: ${name} and price ${parsedPrice} has been successfully updated.`, color: 'text-success' });
    setService({ id: 0, name: '', price: 0, active: false });
    setServices(updatedServices);
  }

  const handleOnChange = (service: Service) => {
    setService(service)
  }

  const handleSubmit = () => {
    const { name, price, active } = service;

    if (!name || !price) {
      return setAlert({ show: true, message: `Name and price are required for service.`, color: 'text-danger' });;
    }

    if (service.id) {
      return updateService(name, price, active);
    }

    addNewService(name, price, active);
  }

  const handleSetService = (service: Service) => {
    if (!isFormOpen) {
      setShowInfoMessage(true);
    }
    setService(service);
  }

  const handleFormToggle = () => {
    if (showInfoMessage) {
      setShowInfoMessage(false);
    }
    setIsFormOpen(!isFormOpen);
  }

  function getServices() {
    return getItem<Service[]>(storageKeys.SERVICES) ?? [];
  }

  return (
    <>
      {showInfoMessage && <div className="fw-bold fs-5 mb-2 text-info"><i className="fa-solid fa-circle-info"></i> Click the Add Service button to view the edit form.</div>}
      <button onClick={handleFormToggle} className="btn navi-background-color" type="button" data-bs-toggle="collapse" data-bs-target="#AddServicesComponent" aria-expanded="false" aria-controls="AddServicesComponent">
        <i className={`fa-solid ${isFormOpen ? 'fa-xmark' : 'fa-plus'}`}></i> {isFormOpen ? 'Close Form' : 'Add Service'}
      </button>
      <div className="collapse" id="AddServicesComponent">
        <div className="card card-body">
          <AddServicesComponent
            setServices={setServices}
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            alert={alert}
            service={service}
          />
        </div>
      </div>
      <div className="fs-4 navi-background-color p-2 my-2"><i className="fa-solid fa-scissors"></i> Services</div>
      <ManageServicesListComponent
        services={services}
        setService={handleSetService}
        setAlert={setAlert}
      />
    </>
  );
}
