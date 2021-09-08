import { useCallback } from "react";
import _debounce from "lodash/debounce";

const useDebounce = (callback, delay) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(_debounce(callback, delay), [callback, delay]);

export default useDebounce;
