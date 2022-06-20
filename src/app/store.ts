import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { resourceSlice } from './resourceSlice';


export const store = configureStore({
  reducer: {
    resource: resourceSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
