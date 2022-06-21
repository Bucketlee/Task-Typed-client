import React, { useMemo, useRef, useState, useCallback } from 'react';

import { store } from '../../app/store';
import ResourceService from '../../services/resourceService';
import MenuView from './MenuView';

function Menu() {
  const [isUrlInputOpen, setIsUrlInputOpen] = useState(false);
  const [newUrl, setNewUrl] = useState('');

  const resourceService = useMemo(() => new ResourceService(store), []);

  const handleUrlInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      resourceService.addUrlResource('url', newUrl);
      setNewUrl('');
      setIsUrlInputOpen(false);
    }

    if (e.key === 'Escape') {
      setIsUrlInputOpen(false);
    }
  }, [resourceService, newUrl]);

  const handleChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      resourceService.addImageResource(files);
    }
  }, [resourceService]);

  const hiddenFileInput = useRef(null);

  const handleAddImageButtonClick = useCallback(() => {
    if (hiddenFileInput.current) {
      const target = hiddenFileInput.current as HTMLElement;
      target.click();
    }
  }, []);

  return (
    <MenuView
      onAddUrlButtonClick={() => setIsUrlInputOpen(true)}
      isUrlInputOpen={isUrlInputOpen}
      onUrlInputKeyDown={handleUrlInputKeyDown}
      onUrlInputChange={setNewUrl}
      onUrlInputBlur={() => setIsUrlInputOpen(false)}
      onAddImageButtonClick={handleAddImageButtonClick}
      hiddenFileInput={hiddenFileInput}
      onImageInputChange={handleChangeFile}
    />
  );
}

export default Menu;
