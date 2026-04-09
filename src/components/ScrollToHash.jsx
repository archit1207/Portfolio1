import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // The "Double rAF" trick:
    // 1st frame: Waits for React to commit changes to the DOM.
    // 2nd frame: Waits for the browser to calculate layout and paint.
    // This ensures the scroll calculation is 100% accurate and lag-free.
    requestAnimationFrame(() => {
      requestAnimationFrame(handleScroll);
    });
    
  }, [location]);

  return null;
}