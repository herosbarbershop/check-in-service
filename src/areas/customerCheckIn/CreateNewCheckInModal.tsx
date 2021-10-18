import React from 'react';
import Modal from 'react-modal';

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

interface CreateNewCheckInModalProps {
  isOpen: boolean;
  setIsModalOpen: (flag: boolean) => void;
  handleNewDailyCheckInCreation: () => void;
}

export function CreateNewCheckInModal(props: CreateNewCheckInModalProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => props.setIsModalOpen(false)}
      style={customStyles}
    >

      <div className="modal-header">
        <h5 className="fs-3">Create New Check In</h5>
        <button type="button" onClick={() => props.setIsModalOpen(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p className="fs-5">No check-in has been created for today. Do you want to create one now?</p>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={() => props.setIsModalOpen(false)} className="text-center btn btn-secondary w-25 fw-bold fs-3" data-bs-dismiss="modal">No</button>
        <button type="button" onClick={props.handleNewDailyCheckInCreation} className="text-center btn btn-primary w-25 fw-bold fs-3">Yes</button>
      </div>
    </Modal>
  );
}
