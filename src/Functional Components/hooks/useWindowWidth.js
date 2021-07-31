import { useEffect, useState, useCallback } from "react";

const useWindowWidth = (width) => {
  const [onSmallscreen, setOnSmallScreen] = useState(false);

  const checkScreensize = useCallback(() => {
    setOnSmallScreen(window.innerWidth < width);
  }, [width]);

  useEffect(() => {
    checkScreensize();
    window.addEventListener("resize", checkScreensize);
    return () => {
      window.removeEventListener("resize", checkScreensize);
    };
  }, [checkScreensize]);

  return onSmallscreen;
};

export default useWindowWidth;
