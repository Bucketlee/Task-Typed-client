import styled from 'styled-components';

interface ContentViewerProps {
  title: string;
  iframeSource: string;
  onCancelButtonClick(): void;
}

function ContentViewer({ title, iframeSource, onCancelButtonClick }: ContentViewerProps) {
  return (
    <ContentViewerWrapper>
      <TitleWrapper>
        <div>{title}</div>
        <CancelButtonWrapper onClick={onCancelButtonClick}>
          <ImageWrapper src={process.env.PUBLIC_URL + '/images/cancel.png'} alt='content-viewer-cancel' />
        </CancelButtonWrapper>
      </TitleWrapper>
      <div>
        <IframeSourceWrapper src={iframeSource} title={`resource-viewer-${title}`} />
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
  border: none;
  background: inherit;
`

const ImageWrapper = styled.img`
  width: 15px;
  height: 15px;
`

const IframeSourceWrapper = styled.iframe`
  width: 100%;
  height: 100%;
`

export default ContentViewer;
