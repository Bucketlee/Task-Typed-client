import styled from 'styled-components';

import { IResource } from '../../models/resource';
import Sidebar from '../Sidebar';
import ContentViewer from '../ContentViewer';
import Toast from '../Toast';

interface MainPageViewProps {
  onResourceClick(resource: IResource): void;
  currentResource: IResource | undefined;
  onCancelButtonClick(): void;
}

function MainPageView({ onResourceClick, currentResource, onCancelButtonClick }: MainPageViewProps) {
  return (
    <MainPageViewWrapper>
      <Sidebar
        onResourceClick={onResourceClick}
      />
      {currentResource ? (
        <ContentViewer
          title={currentResource.title}
          onCancelButtonClick={onCancelButtonClick}
          iframeSource={currentResource.source ? currentResource.source : ''}
        />
      ) : <></>}
      <Toast></Toast>
    </MainPageViewWrapper>
  );
}

const MainPageViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
`

export default MainPageView;
