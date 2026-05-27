import { useState, useEffect } from "react";

const getScrollY = () => (typeof window === "undefined" ? 0 : window.scrollY);
const Scrollpositin = (props) => {
  const { render } = props;
  const [scrollY, setScrollY] = useState(getScrollY);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return render({ scrollY });
};

export default Scrollpositin;
