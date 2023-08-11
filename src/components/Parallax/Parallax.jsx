import { useEffect, useState } from "react";

const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.screenY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const backgroundSize = 100 + scrollPosition / 5;

  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url('https://example.com/path-to-your-image.jpg')`,
        backgroundSize: `${backgroundSize}%`,
      }}>
      Parallax
    </div>
  );
};
export default Parallax;
