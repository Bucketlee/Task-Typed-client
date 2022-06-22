import { Store } from "@reduxjs/toolkit";

import Resource, { IResource } from '../models/resource';
import { addResource, updateResource, deleteResource } from "../app/resourceSlice";
import { changeYoutubeEmbedUrl, checkValidUrl } from "../utils/resource";

export interface IResourceService {
  addUrlResource(source: string): boolean;
  addImageResource(file: File): boolean;
  updateResourceTitle(resource: IResource, newTitle: string): void;
  deleteResource(id: string): void;
}

class ResourceService implements IResourceService {
  constructor(private readonly store: Store) {
  }

  addUrlResource(source: string): boolean {
    if (!checkValidUrl(source)) {
      return false;
    }

    if (source.includes('youtube.com')) {
      source = changeYoutubeEmbedUrl(source);
    }

    const now = Date.now();

    const newResource = new Resource(`url-${now}`, 'url', source, source);
    this.store.dispatch(addResource(newResource));
    return true;
  }

  addImageResource(file: File): boolean {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64 = reader.result;

      if (!base64) {
        return false;
      }

      const base64Sub = base64.toString();
      const now = Date.now();

      const newResource = new Resource(`url-${now}`, 'image', file.name, base64Sub);
      this.store.dispatch(addResource(newResource));
    }
    return true;
  }

  updateResourceTitle(resource: IResource, newTitle: string): void {
    const newResource = resource.copyWith({ title: newTitle });
    this.store.dispatch(updateResource(newResource));
  }

  deleteResource(id: string): void {
    this.store.dispatch(deleteResource({ id }));
  }
}

export default ResourceService;
