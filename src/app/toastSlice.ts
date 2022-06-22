import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IToast } from '../models/toast';

interface IToastState {
  toasts: IToast[];
}

const initialState: IToastState = {
  toasts: [],
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state: IToastState, action: PayloadAction<IToast>) => {
      state.toasts.push(action.payload);
    },
    removeToast: (state: IToastState, action: PayloadAction<{ id: string }>) => {
      state.toasts = state.toasts.filter(el => el.id !== action.payload.id);
    }
  },
})

export const { addToast, removeToast } = toastSlice.actions
