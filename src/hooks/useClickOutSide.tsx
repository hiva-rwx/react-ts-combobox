import { useEffect, useRef } from "react";

const useClickOutSide = (handler: any) => {
  const domNode = useRef<any>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!domNode?.current?.contains(e.currentTarget)) {
        handler();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handler]);
  return domNode;
};
export default useClickOutSide;
