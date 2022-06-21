import React, { useState, useCallback } from 'react';

interface ResourceProps {
  title: string,
  onEditButtonClick(newValue: string): void,
  onDeleteButtonClick(): void,
}

function Resource({ title, onEditButtonClick, onDeleteButtonClick }: ResourceProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(title);

  const handleTitleEdit = useCallback(() => {
    if (title !== newValue) {
      onEditButtonClick(newValue);
    }
    setIsEditing(!isEditing);
  }, [title, newValue, onEditButtonClick, isEditing]);

  const handleResourceDelete = useCallback(() => {
    onDeleteButtonClick();
  }, [onDeleteButtonClick]);

  const handleInputBlur = useCallback(() => {
    setNewValue(title);
    setIsEditing(false);
  }, [title]);

  const handleInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTitleEdit();
    }

    if (e.key === 'Escape') {
      handleInputBlur();
    }
  }, [handleTitleEdit, handleInputBlur]);

  return (
    <div>
      <div>
        {!isEditing ?
          <div>{title}</div> :
          <input
            type='text'
            defaultValue={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            onKeyDown={(e) => handleInputKeyDown(e)}
            onBlur={() => handleInputBlur()}
          />
        }
      </div>
      <div>
        <button onClick={() => handleTitleEdit()}>Edit</button>
        <button onClick={() => handleResourceDelete()}>Delete</button>
      </div>
    </div>
  );
}

export default Resource;
