import React, { useState, useCallback } from 'react';
import ResourceLabelView from './ResourceLabelView';

interface ResourceLabelProps {
  title: string,
  onEditButtonClick(newValue: string): void,
  onDeleteButtonClick(): void,
}

function ResourceLabel({ title, onEditButtonClick, onDeleteButtonClick }: ResourceLabelProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(title);

  const handleTitleEdit = useCallback(() => {
    if (title !== newValue) {
      onEditButtonClick(newValue);
    }
    setIsEditing(!isEditing);
  }, [title, newValue, onEditButtonClick, isEditing]);

  const handleResourceLabelDelete = useCallback(() => {
    onDeleteButtonClick();
  }, [onDeleteButtonClick]);

  const handleInputValueChange = useCallback((value: string) => {
    setNewValue(value)
  }, []);

  const handleInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTitleEdit();
    }

    if (e.key === 'Escape') {
      setNewValue(title);
      setIsEditing(false);
    }
  }, [handleTitleEdit, title, setIsEditing]);

  return (
    <ResourceLabelView
      value={newValue}
      isEditing={isEditing}
      onInputValueChange={handleInputValueChange}
      onInputKeyDown={handleInputKeyDown}
      onEditButtonClick={handleTitleEdit}
      onDeleteButtonClick={handleResourceLabelDelete}
    />
  );
}

export default ResourceLabel;
