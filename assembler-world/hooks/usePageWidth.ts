import { useEffect, useState } from "react";
import { useScreenSize } from "./useScreenSize";

export const usePageWidth = () => {
  const { screenSize, screenWidth } = useScreenSize();
  const [pageWidth, setPageWidth] = useState(600);
  const [videoWidth, setVideoWidth] = useState(500);
  const [videoHeight, setVideoHeight] = useState(500 * (9 / 16));

  useEffect(() => {
    if (screenSize === "large") {
      setPageWidth(screenWidth - 400);
      setVideoWidth(screenWidth - 600);
    } else if (screenSize === "medium") {
      setPageWidth(screenWidth - 200);
      setVideoWidth(screenWidth - 300);
    } else {
      setPageWidth(screenWidth - 40);
      setVideoWidth(screenWidth - 60);
    }

    setVideoHeight(videoWidth * (9 / 16));
  }, [screenWidth, pageWidth, screenSize, videoWidth]);
  return { pageWidth, videoWidth, videoHeight };
};
