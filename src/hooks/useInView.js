// hooks/useInView.js
import { useEffect, useRef, useState } from "react";

export default function useInView(
  options = { threshold: 0.3, rootMargin: "0px 0px -100px 0px" },
) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // play once (like PowerPoint)
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}
