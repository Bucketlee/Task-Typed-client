import React, { useMemo, useRef, useState, useCallback } from 'react';

import { store } from '../../app/store';
import ResourceService from '../../services/resourceService';
import ToastService from '../../services/toastService';
import MenuView from './MenuView';

function Menu() {
  const [isUrlInputOpen, setIsUrlInputOpen] = useState(false);
  const [newUrl, setNewUrl] = useState('');

  const resourceService = useMemo(() => new ResourceService(store), []);
  const toastService = useMemo(() => new ToastService(store), []);

  const handleUrlInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const result = resourceService.addUrlResource(newUrl);
      if (result) {
        toastService.addNewToast('리소스를 등록했습니다.', 3000);
      } else {
        toastService.addNewToast('리소스를 등록하지 못했습니다.', 3000);
      }
      setNewUrl('');
      setIsUrlInputOpen(false);
    }

    if (e.key === 'Escape') {
      setIsUrlInputOpen(false);
    }
  }, [resourceService, toastService, newUrl]);

  const handleChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const len = files ? files.length : 0;
      for (let i = 0; i < len; i += 1) {
        setTimeout(() => {
          const result = resourceService.addImageResource(files[i]);
          if (result) {
            toastService.addNewToast('리소스를 등록했습니다.', 3000);
          } else {
            toastService.addNewToast('리소스를 등록하지 못했습니다.', 3000);
          }
        }, (Math.random() * 7 + 3)*1000*i);
      }
    }

  }, [resourceService, toastService]);

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
