import styled from 'styled-components';

import Menu from '../Menu';
import { IResource } from '../../models/resource';
import ResourceLabel from '../ResourceLabel';

interface SidebarViewProps {
  resources: IResource[];
  onEditButtonClick(resource: IResource, newTitle: string): void;
  onDeleteButtonClick(resourceId: string): void;
  onResourceClick(resource: IResource): void;
}

function SidebarView({
  resources,
  onEditButtonClick,
  onDeleteButtonClick,
  onResourceClick,
}: SidebarViewProps) {
  return (
    <SidebarViewWrapper>
      <Menu />
      <ResourcesWrapper>
        {resources.map((data, i) => (
          <ResourceLabelWrapper onClick={() => onResourceClick(data)}>
            <ResourceLabel
              key={`resource-${i}`}
              title={data.title}
              onEditButtonClick={(newValue) => onEditButtonClick(data, newValue)}
              onDeleteButtonClick={() => onDeleteButtonClick(data.id)}
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

const ResourceLabelWrapper = styled.button`
  margin: 10px;
  padding: 0;
  display: flex;
  justify-content : center;
  border: none;
  background-color: inherit;
`

export default SidebarView;
