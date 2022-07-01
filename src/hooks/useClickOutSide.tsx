import { useEffect, useRef } from "react";

const useClickOutSide = (cb: () => void) => {
  const domNode = useRef<any>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!domNode?.current?.contains(e.currentTarget)) {
        cb();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [cb]);
  return domNode;
};
export default useClickOutSide;
