import React from 'react';

interface AddButtonProps {
  title: string;
  onClick?(e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void;
  onChange?(): void;
}

function AddButton({ title, onClick, onChange }: AddButtonProps) {
  return (
    <button onClick={onClick} onChange={onChange}>
      <div>{title}</div>
    </button>
  );
}

export default AddButton;
