import React, { useEffect, useState } from "react";

function App({ autoSlideInterval }) {
  const slides = [
    {
      url: "/images/img1.JPG",
    },
    {
      url: "/images/img2.JPG",
    },
    {
      url: "/images/img3.JPG",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // auto slide after every `autoSlideInterval` milliseconds
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, autoSlideInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, slides.length, autoSlideInterval]);

  return (
    <div className="max-w-[100vw] h-[780px] w-full m-auto relative group carousel">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-700"
      ></div>
    </div>
  );
}

export default App;
