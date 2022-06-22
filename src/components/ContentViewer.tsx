import styled from 'styled-components';

import { TypedIcon } from 'typed-design-system';

interface ContentViewerProps {
  title: string;
  iframeSource: string;
  onCancelButtonClick(): void;
}

function ContentViewer({
  title,
  iframeSource,
  onCancelButtonClick
}: ContentViewerProps) {
  return (
    <ContentViewerWrapper>
      <TitleWrapper>
        <div>{title}</div>
        <CancelButtonWrapper onClick={onCancelButtonClick}>
          <TypedIcon
            icon="close_small"
            style={{ width: '15px', height: '15px' }}
          />
        </CancelButtonWrapper>
      </TitleWrapper>
      <div>
        <IframeSourceWrapper
          src={iframeSource}
          title={`resource-viewer-${title}`}
        />
      </div>
    </ContentViewerWrapper>
  );
}

const ContentViewerWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
`

const TitleWrapper = styled.div`
  padding: 0 20px;
  height: 50px;
  display: grid;
  grid-template-columns: auto 30px;
  align-content: center;
  box-shadow: 0 5px 5px -3px gray;
`

const CancelButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: inherit;
`

const IframeSourceWrapper = styled.iframe`
  width: 100%;
  height: 100%;
`

export default ContentViewer;
