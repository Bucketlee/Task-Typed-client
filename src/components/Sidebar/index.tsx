import { useCallback, useMemo } from 'react';

import { store } from '../../app/store';
import { IResource } from '../../models/resource';
import useResourceObserver from '../../useResourceObserver';
import ResourceService from '../../services/resourceService';
import SidebarView from './SidebarView';

interface SidebarProps {
  onResourceClick(resource: IResource): void;
}

function Sidebar({ onResourceClick }: SidebarProps) {
  const resources = useResourceObserver();
  const resourceService = useMemo(() => new ResourceService(store), []);

  const handleResourceDelete = useCallback((resourceId: string) => {
    resourceService.deleteResource(resourceId);
  }, [resourceService]);

  const handleTitleEdit = useCallback((resource: IResource, newTitle: string) => {
    resourceService.updateResourceTitle(resource, newTitle);
  }, [resourceService]);

  return (
    <SidebarView
      resources={resources}
      onEditButtonClick={handleTitleEdit}
      onDeleteButtonClick={handleResourceDelete}
      onResourceClick={onResourceClick}
    />
  );
}

export default Sidebar;
