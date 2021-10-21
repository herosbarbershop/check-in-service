import React from 'react';

interface SelectionCardProps {
  name: string;
  icon?: string;
  selected: boolean;
  handleChanges: (name: string) => void;
}

export function SelectionCard(props: SelectionCardProps) {
  let selectedClass = 'card pointer mb-3 selection-card';

  if (props.selected) {
    selectedClass = `${selectedClass} bg-primary`;
  }

  return (
    <div className={selectedClass} onClick={() => props.handleChanges(props.name)}>
      <div className="card-body">
        <h5 className="card-title fs-5 fw-bold m-0">{props.name}</h5>
      </div>
    </div>
  );
}
