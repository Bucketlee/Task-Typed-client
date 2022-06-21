import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { resourceSlice } from './resourceSlice';
import { toastSlice } from './toastSlice';


export const store = configureStore({
  reducer: {
    resource: resourceSlice.reducer,
    toast: toastSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
