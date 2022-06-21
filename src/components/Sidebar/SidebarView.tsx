import styled from 'styled-components';

import Menu from '../Menu';
import { IResource } from '../../models/resource';
import ResourceLabel from '../ResourceLabel';

interface SidebarViewProps {
  resources: IResource[];
  onEditButtonClick(resource: IResource, newTitle: string): void;
  onDeleteButtonClick(resource: IResource): void;
}

function SidebarView({
  resources,
  onEditButtonClick,
  onDeleteButtonClick
}: SidebarViewProps) {
  return (
    <SidebarViewWrapper>
      <Menu />
      <ResourcesWrapper>
        {resources.map((data, i) => (
          <ResourceLabelWrapper>
            <ResourceLabel
              key={`resource-${i}`}
              title={data.title}
              onEditButtonClick={(newValue) => onEditButtonClick(data, newValue)}
              onDeleteButtonClick={() => onDeleteButtonClick(data)}
            />
          </ResourceLabelWrapper>
        ))}
      </ResourcesWrapper>
    </SidebarViewWrapper>
  );
}

const SidebarViewWrapper = styled.aside`
  width: 280px;
  height: 100vh;
  border-right: 1px solid #c4c4c4;
  background-color: #f7f7f7;
`

const ResourcesWrapper = styled.div`
  padding-top: 55px;
  max-height: 100vh;
  overflow: auto;
`

const ResourceLabelWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content : center;
`

export default SidebarView;
