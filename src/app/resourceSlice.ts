import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IResource } from '../models/resource';
import { data } from './initialResource';

interface IResourceState {
  resources: IResource[];
}

const initialState: IResourceState = {
  resources: [ ...data ],
}

export const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    addResource: (state: IResourceState, action: PayloadAction<IResource>) => {
      state.resources.push(action.payload);
    },
    updateResource: (state: IResourceState, action: PayloadAction<IResource>) => {
      const targetIdx = state.resources.findIndex((resource) => resource.id === action.payload.id);
      if (targetIdx !== -1) {
        state.resources[targetIdx] = action.payload;
      }
    },
    deleteResource: (state: IResourceState, action: PayloadAction<{ id: string }>) => {
      state.resources = state.resources.filter(el => el.id !== action.payload.id);
    }
  },
})

export const { addResource, updateResource, deleteResource } = resourceSlice.actions
