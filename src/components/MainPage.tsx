import { useState } from 'react';
import styled from 'styled-components';

import { IResource } from '../models/resource';
import Sidebar from './Sidebar';
import ContentViewer from './ContentViewer';
import Toast from './Toast';

function MainPage() {
  const [currentResource, setCurrentResource] = useState<IResource | undefined>(undefined);
  return (
    <MainPageWrapper>
      <Sidebar
        onResourceClick={setCurrentResource}
      />
      {currentResource ? (
        <ContentViewer
          title={currentResource.title}
          onCancelButtonClick={() => setCurrentResource(undefined)}
          iframeSource={currentResource.source ? currentResource.source : ''}
        />
      ) : <></>}
      <Toast></Toast>
    </MainPageWrapper>
  );
}

const MainPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
`

export default MainPage;
