import { Store } from "@reduxjs/toolkit";

import Resource, { IResource, ResourceType } from '../models/resource';
import { addResource, updateResource, deleteResource } from "../app/resourceSlice";

export interface IResourceService {
  addResource(type: ResourceType, title: string, source: string): void;
  updateResourceTitle(resource: IResource, newTitle: string): boolean;
  deleteResource(id: string): boolean;
}

class ResourceService implements IResourceService {
  constructor(private readonly store: Store) {
  }

  addResource(type: ResourceType, title: string, source?: string): void {
    const newResource = Resource.fromTitle(type, title, source);
    this.store.dispatch(addResource(newResource));
  }

  updateResourceTitle(resource: IResource, newTitle: string): boolean {
    const newResource = resource.copyWith({ title: newTitle });
    this.store.dispatch(updateResource(newResource));
    return true;
  }

  deleteResource(id: string): boolean {
    this.store.dispatch(deleteResource({ id }));
    return true;
  }
}

export default ResourceService;
