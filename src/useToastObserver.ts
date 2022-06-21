import { useSelector } from "react-redux";

import { RootState } from "./app/store";

function useToastObserver() {
  const toasts = useSelector((state: RootState) => state.toast.toasts);
  return toasts;
}

export default useToastObserver;
