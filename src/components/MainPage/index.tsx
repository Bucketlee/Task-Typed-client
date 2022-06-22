import { useState } from 'react';

import { IResource } from '../../models/resource';
import MainPageView from './MainPageView';

function MainPage() {
  const [currentResource, setCurrentResource] = useState<IResource | undefined>(undefined);

  return (
    <MainPageView
      onResourceClick={setCurrentResource}
      currentResource={currentResource}
      onCancelButtonClick={() => setCurrentResource(undefined)}
    />
  );
}

export default MainPage;
