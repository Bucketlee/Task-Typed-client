import React from 'react';

interface ResourceLabelViewProps {
  value: string;
  isEditing: boolean;
  onInputValueChange(newValue: string): void;
  onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
  onEditButtonClick(): void;
  onDeleteButtonClick(): void;
}

function ResourceLabelView({
  value,
  isEditing,
  onInputValueChange,
  onInputKeyDown,
  onEditButtonClick,
  onDeleteButtonClick,
}: ResourceLabelViewProps) {
  return (
    <div>
      <div>
        {!isEditing ?
          <div>{value}</div> :
          <input
            type='text'
            defaultValue={value}
            onChange={(e) => onInputValueChange(e.target.value)}
            onKeyDown={(e) => onInputKeyDown(e)}
          />
        }
      </div>
      <div>
        <button onClick={() => onEditButtonClick()}>Edit</button>
        <button onClick={() => onDeleteButtonClick()}>Delete</button>
      </div>
    </div>
  );
}

export default ResourceLabelView;
