import { Store } from "@reduxjs/toolkit";

import Toast from '../models/toast';
import { addToast, removeToast } from "../app/toastSlice";

export interface IToastService {
  addNewToast(content: string, duration: number): void;
}

class ToastService implements IToastService {
  constructor(private readonly store: Store) {
  }

  addNewToast(content: string, duration: number): void {
    const newToast = new Toast(
      `toast-${Date.now()}`,
      content,
      duration,
    );
    this.store.dispatch(addToast(newToast));
    setTimeout(() => this.store.dispatch(removeToast(newToast)), duration ? duration : 1000);
  }
}

export default ToastService;
