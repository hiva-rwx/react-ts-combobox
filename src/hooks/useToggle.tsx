import { useCallback, useState } from "react";

const useToggle = (
  initialState: boolean = false
): [boolean, () => void, () => void, () => void] => {
  const [state, setState] = useState<boolean>(initialState);
  const close = useCallback(() => {
    setState(false);
  }, []);
  const open = useCallback(() => {
    setState(true);
  }, []);
  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, toggle, close, open];
};
export default useToggle;
