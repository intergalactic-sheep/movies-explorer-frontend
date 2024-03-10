import { useState, useEffect } from "react";

const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(evt) {
      setTimeout(() => {
        setWindowWidth(evt.target.innerWidth);
      }, 1000);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return windowWidth;
};

export default useResize;
