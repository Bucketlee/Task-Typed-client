import { Store } from "@reduxjs/toolkit";

import Toast, { IToast } from '../models/toast';
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
    console.log("!?", newToast);
    setTimeout(() => this.store.dispatch(removeToast(newToast)), 600 + duration);
  }
}

export default ToastService;
