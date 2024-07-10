import { useEffect, useState } from "react";

const useResize = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize;
};

export default useResize;
