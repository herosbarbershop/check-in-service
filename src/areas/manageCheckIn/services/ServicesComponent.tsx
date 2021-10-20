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

  function getServices() {
    return getItem<Service[]>(storageKeys.SERVICES) ?? [];
  }

  return (
    <div >
      <div className="fs-4 navi-color p-2 mb-2">Create New Service</div>
      <AddServicesComponent
        setServices={setServices}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        alert={alert}
        service={service}
      />
      <div className="fs-4 navi-color p-2 my-2"><i className="fa-solid fa-scissors"></i> Services</div>
      <ManageServicesListComponent
        services={services}
        setService={setService}
        setAlert={setAlert}
      />
    </div>);
}
