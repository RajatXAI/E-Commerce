import { useEffect, useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const Crousal = () => {
  const images = [image1, image2, image3, image4];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prev = () => {
    setIndex((pre) => (pre === 0 ? images.length - 1 : pre - 1));
  };

  const next = () => {
    setIndex((pre) => (pre === images.length - 1 ? 0 : pre + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((pre) => (pre === images.length - 1 ? 0 : pre + 1));
        setFade(true);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        className={`w-full h-screen object-cover mx-auto transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
        src={images[index]}
        alt=""
      />
      <div className="btns">
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default Crousal;
