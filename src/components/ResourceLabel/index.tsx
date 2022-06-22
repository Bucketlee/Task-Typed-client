import React, { useState, useCallback } from 'react';

import ResourceLabelView from './ResourceLabelView';

interface ResourceLabelProps {
  title: string,
  onEditButtonClick(newTitle: string): void,
  onDeleteButtonClick(): void,
}

function ResourceLabel({
  title,
  onEditButtonClick,
  onDeleteButtonClick
}: ResourceLabelProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleEdit = useCallback(() => {
    if (title !== newTitle) {
      onEditButtonClick(newTitle);
    }
    setIsEditing(!isEditing);
  }, [title, newTitle, onEditButtonClick, isEditing]);

  const handleInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTitleEdit();
    }

    if (e.key === 'Escape') {
      setNewTitle(title);
      setIsEditing(false);
    }
  }, [handleTitleEdit, title, setIsEditing]);

  return (
    <ResourceLabelView
      value={newTitle}
      isEditing={isEditing}
      onInputValueChange={setNewTitle}
      onInputKeyDown={handleInputKeyDown}
      onEditButtonClick={handleTitleEdit}
      onDeleteButtonClick={onDeleteButtonClick}
    />
  );
}

export default ResourceLabel;
