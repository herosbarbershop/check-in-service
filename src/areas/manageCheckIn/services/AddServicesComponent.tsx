import { AppAlert, Service } from '../../../types';

interface AddServicesComponentProps {
  setServices: (services: Service[]) => void;
  service: Service;
  alert: AppAlert;
  handleOnChange: (service: Service) => void;
  handleSubmit: () => void;
}

export function AddServicesComponent(props: AddServicesComponentProps) {
  const handleOnChange = (e: any) => props.handleOnChange({ ...props.service, [e.target.name]: e.target.value });
  const handleClear = () => props.handleOnChange({ id: 0, name: '', price: 0, active: false });
  const handleStatusChange = (status: boolean) => props.handleOnChange({ ...props.service, active: status });
  const handleSubmit = () => props.handleSubmit();

  return (
    <div className="row">
      <div className="col-md-12">
        <div>
          <div className="mb-3 text-center">
            {props.alert.show && <div id="serviceHelp" className={`${props.alert.color} "form-text fw-bold fs-4"`}><i className="fa-solid fa-triangle-exclamation"></i> {props.alert.message}</div>}
          </div>
        </div>
      </div>
      <div className="col-md-6 mx-auto">
        <div>
          <div className="mb-3">
            <label htmlFor="service" className="form-label fw-bold">Service Name</label>
            <input onChange={handleOnChange} name="name" type="text" className="form-control" id="service" aria-describedby="serviceHelp" value={props.service.name} placeholder="Enter service name" />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label fw-bold">Price</label>
            <input onChange={handleOnChange} name="price" type="number" className="form-control" id="price" value={props.service.price} />
          </div>
          <div className="mb-3">
            <h5 className="fs-5">Status: {props.service.active ? 'Active' : 'Not Active'}</h5>
          </div>
          <div className="mb-3">
            <button onClick={() => handleStatusChange(!props.service.active)} type="button" className="btn btn-warning">{props.service.active ? 'Deactive Service' : 'Activate Service'}</button>
          </div>
          <div className="mb-1">
            <button onClick={() => handleClear()} type="button" className="btn btn-secondary btn-small"><i className="fa-solid fa-xmark"></i> Clear</button>
          </div>
          <button onClick={handleSubmit} type="submit" className="btn selection-button w-100 fs-5 fw-bold">Submit</button>
        </div>
      </div>
    </div>);
}
