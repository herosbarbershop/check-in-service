import React, { useState } from 'react';
import { SelectionCard } from './SelectionCard';

interface SelectionComponentProps {
  options: string[];
  index: number;
  title: string;
  currentIndex: number;
  handleChanges: (value: string) => void;
}

export function SelectionComponent(props: SelectionComponentProps) {
  const [selection, setSelection] = useState("");

  const handleChanges = (value: string) => {
    setSelection(value);
    props.handleChanges(value);
  };

  if (props.currentIndex !== props.index) {
    return null;
  }

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <h5 className="fs-2 mb-3 p-2 border-bottom">{props.title}</h5>
        </div>
        <div className="row">
          {props.options.map((option, i) => (
            <div className="col-md-3" key={i}>
              <SelectionCard name={option} selected={selection === option} handleChanges={handleChanges} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
