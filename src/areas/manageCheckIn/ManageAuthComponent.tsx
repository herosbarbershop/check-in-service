import React, { useState } from 'react';
import { getItem, storageKeys } from '../../storageManager';
import { AppAlert, Barber, View } from '../../types';

interface ManageAuthComponentProps {
  handleViewChange: (view: View) => void;
}

export function ManageAuthComponent(props: ManageAuthComponentProps) {
  const [barbers] = useState(getItem<Barber[]>(storageKeys.BARBERS) ?? []);
  const [value, setValue] = useState('');
  const [error, setShowError] = useState<AppAlert>({ show: false, message: '', });

  const authenticate = (e: any) => {
    const inputValue = e.target.value?.trim().toUpperCase() ?? '';
    const barberCode = barbers.find((b: any) => b.code === inputValue)?.code;
    setValue(inputValue);

    if (barberCode) {
      authorize();
    } else {
      setShowError({ show: true, message: 'Barber code is not valid!', color: 'text-danger' });
    }
  };

  const authorize = () => {
    const authenticateModeElement = (document.getElementById('authenticateMode') as HTMLElement);
    const modalBackDrop = (document.getElementsByClassName('modal-backdrop') as HTMLCollectionOf<Element>)?.[0];
    const pageBody = (document.getElementsByTagName('body') as HTMLCollectionOf<HTMLBodyElement>)?.[0];

    if (authenticateModeElement && modalBackDrop && pageBody) {
      props.handleViewChange(View.MANAGE);
      authenticateModeElement.style.display = "none";
      modalBackDrop.remove();
      pageBody.classList.remove('modal-open');
      setValue('');
      setShowError({ show: false, message: '' });
    } else {
      setShowError({ show: true, message: 'Something when wrong. Please try again.' });
    }
  };

  return <div className="modal fade" id="authenticateMode">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title"><i className="fa-solid fa-circle-info"></i> Barber code is required to access manage.</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <input
            onChange={authenticate}
            value={value}
            className="check-in-input fs-1 fw-bold text-center w-100 header-border-bottom"
            type="text"
            name="search"
            placeholder="Enter Code"
            autoFocus={true}
            autoComplete="off" />
          {(value.length && error.show) ?
            <span className="text-danger fw-bold"><i className="fa-solid fa-triangle-exclamation"></i> {error.message}</span> :
            ''}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{<i className="fa-solid fa-x"></i>} Close</button>
        </div>
      </div>
    </div>
  </div>;
}
