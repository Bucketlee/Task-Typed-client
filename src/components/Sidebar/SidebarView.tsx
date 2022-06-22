import styled from 'styled-components';

import { IResource } from '../../models/resource';
import Menu from '../Menu';
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
      <ResourcesUlWrapper>
        {resources.map((data, i) => (
          <ResourceLabelLiWrapper
            key={`resource-${i}-${data.id}`}
            onClick={() => onResourceClick(data)}
          >
            <ResourceLabel
              title={data.title}
              onEditButtonClick={(newValue) => onEditButtonClick(data, newValue)}
              onDeleteButtonClick={() => onDeleteButtonClick(data.id)}
            />
          </ResourceLabelLiWrapper>
        ))}
      </ResourcesUlWrapper>
    </SidebarViewWrapper>
  );
}

const SidebarViewWrapper = styled.aside`
  width: 280px;
  height: 100vh;
  border-right: 1px solid #c4c4c4;
  background-color: #f7f7f7;
`

const ResourcesUlWrapper = styled.ul`
  margin: 0;
  padding-top: 55px;
  padding-left: 0;
  max-height: 100vh;
  overflow: auto;
`

const ResourceLabelLiWrapper = styled.li`
  margin: 10px;
  padding: 0;
  display: flex;
  justify-content : center;
  border: none;
  background-color: inherit;
`

export default SidebarView;
