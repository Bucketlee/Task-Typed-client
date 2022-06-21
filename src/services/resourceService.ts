import { Store } from "@reduxjs/toolkit";

import Resource, { IResource, ResourceType } from '../models/resource';
import { addResource, updateResource, deleteResource } from "../app/resourceSlice";
import { changeYoutubeEmbedUrl, checkValidUrl } from "../utils/resource";

export interface IResourceService {
  addUrlResource(type: ResourceType, title: string, source: string): boolean;
  addImageResource(files: FileList): boolean;
  updateResourceTitle(resource: IResource, newTitle: string): void;
  deleteResource(id: string): void;
}

class ResourceService implements IResourceService {
  constructor(private readonly store: Store) {
  }

  addUrlResource(type: ResourceType, title: string, source?: string): boolean {
    if (!source) {
      source = title;
    }

    if (!checkValidUrl(source)) {
      return false;
    }

    if (source.includes('youtube.com/watch?v=')) {
      source = changeYoutubeEmbedUrl(source);
      title = source;
    }

    const newResource = Resource.fromTitle(type, title, source);
    this.store.dispatch(addResource(newResource));
    return true;
  }

  addImageResource(files: FileList): boolean {
    const len = files ? files.length : 0;
    for (let i = 0; i < len; i += 1) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onloadend = () => {
        setTimeout(() => {
          const base64 = reader.result;
          if (base64) {
          const base64Sub = base64.toString();

          const newResource = Resource.fromTitle('image', files[i].name, base64Sub);
          this.store.dispatch(addResource(newResource));
          } else {
            return false;
          }
        }, (Math.random() * 7 + 3)*1000*i);
      }
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
