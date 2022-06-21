import React, { useMemo, useState, useCallback } from 'react';

import { store } from './app/store';
import AddButton from './AddButton';
import ResourceService from './services/resourceService';

function Menu() {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [newUrl, setNewUrl] = useState('');

  const resourceService = useMemo(() => new ResourceService(store), []);

  const handleUrlInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      resourceService.addResource('url', newUrl);
      setNewUrl('');
      setIsInputOpen(false);
    }

    if (e.key === 'Escape') {
      setIsInputOpen(false);
    }
  }, [resourceService, newUrl]);

  return (
    <div>
      <div>
        <div>
          <AddButton
            title={'URL 추가'}
            onClick={() => setIsInputOpen(true)}
          />
          {isInputOpen ? <input type='url' name='urlInput' onKeyDown={(e) => handleUrlInputKeyDown(e)} onChange={(e) => setNewUrl(e.target.value)} /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default Menu;
