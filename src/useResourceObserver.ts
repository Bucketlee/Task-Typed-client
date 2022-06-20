import { useSelector } from "react-redux";

import { RootState } from "./app/store";

function useResourceObserver() {
  const resources = useSelector((state: RootState) => state.resource.resources);
  return resources;
}

export default useResourceObserver;
