import { createSlice } from '@reduxjs/toolkit';

import { IResource } from '../models/resource';

interface IResourceState {
  resources: IResource[];
}

const initialState: IResourceState = {
  resources: [],
}

export const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
  },
})

export const { } = resourceSlice.actions
