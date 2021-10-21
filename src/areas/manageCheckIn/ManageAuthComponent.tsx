import React, { useState } from 'react';
import { getItem, storageKeys } from '../../storageManager';
import { Barber } from '../../types';
import Modal from 'react-modal';

interface ManageAuthComponentProps {
  isOpen: boolean;
  setIsModalOpen: (flag: boolean) => void;
  authorize: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backGroundColor: 'red',
  },
};

Modal.setAppElement('#root');

export function ManageAuthComponent(props: ManageAuthComponentProps) {
  const [barbers] = useState(getItem<Barber[]>(storageKeys.BARBERS) ?? []);
  const [value, setValue] = useState('');
  const [show, setShow] = useState<boolean>(false);

  const authenticate = (e: any) => {
    const inputValue = e.target.value?.trim().toUpperCase() ?? '';
    const barberCode = barbers.find((b: any) => b.code === inputValue)?.code;
    setValue(inputValue);

    if (barberCode) {
      setValue('');
      setShow(false);
      props.authorize();
    } else {
      setShow(true);
    }
  };

  const errorClass = show ? "text-danger fw-bold" : "text-danger fw-bold invisible"

  return <div className="modal fade" id="authenticateMode">
    <div className="modal-dialog">
      <Modal
        isOpen={props.isOpen}
        onRequestClose={() => props.setIsModalOpen(false)}
        style={customStyles}
      >

        <div className="modal-header">
          <h5 className="modal-title"><i className="fa-solid fa-circle-info"></i> Barber code is required to perform this action.</h5>
          <button type="button" onClick={() => props.setIsModalOpen(false)} className="btn-close" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <input
            onChange={authenticate}
            value={value}
            className="check-in-input fs-3 text-center w-100 header-border-bottom"
            type="password"
            name="search"
            placeholder="Enter Code"
            autoFocus={true}
            autoComplete="off" />
          <span className={errorClass}><i className="fa-solid fa-triangle-exclamation"></i>Barber code is not valid!</span>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => props.setIsModalOpen(false)}>{<i className="fa-solid fa-x"></i>} Close</button>
        </div>
      </Modal>
    </div>
  </div>;
}
