import { useEffect, useState } from "react";
import bgPicture from "../../assets/bg-picture.jpg";
import "./Parallax.scss";

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
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20230415/pngtree-website-color-contrast-background-image_2343936.jpg')",
        backgroundSize: `${backgroundSize}%`,
      }}>
      Parallax
    </div>
  );
};
export default Parallax;
