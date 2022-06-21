import React, { useMemo, useRef, useState, useCallback } from 'react';

import { store } from './app/store';
import AddButton from './AddButton';
import ResourceService from './services/resourceService';

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
    <div>
      <div>
        <div>
          <AddButton
            title={'URL 추가'}
            onClick={() => setIsUrlInputOpen(true)}
          />
          {isUrlInputOpen ? <input type='url' name='urlInput' onKeyDown={(e) => handleUrlInputKeyDown(e)} onChange={(e) => setNewUrl(e.target.value)} /> : <></>}
        </div>
        <div>
          <AddButton
            title={'이미지 추가'}
            onClick={handleAddImageButtonClick}
          />
          <input ref={hiddenFileInput} type='file' name='filesInput' accept='image/*' onChange={(e) => handleChangeFile(e)} multiple style={{display:'none'}}/>
        </div>
      </div>
    </div>
  );
}

export default Menu;
