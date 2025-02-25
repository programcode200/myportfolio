import { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState(true);
  const [currentColor, setCurrentColor] = useState("#e1ea1a");

  const colors = ["#1596B6", "#e15b28", "#e128d9", "#13d03b", "#eb2c2c"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const nextIndex = (colors.indexOf(prevColor) + 1) ;
        return colors[nextIndex];
      });
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval);
  }, []);

  const handleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between w-full py-6 max-w-screen-xl mx-auto px-9">
      {/* Left Section */}
      <div className="text-white flex items-center">
        <div>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-3xl sm:mr-4 mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: currentColor }} // Dynamic color change
          >
            <path d="m18 16 4-4-4-4"></path>
            <path d="m6 8-4 4 4 4"></path>
            <path d="m14.5 4-5 16"></path>
          </svg>
        </div>
        <div>
          <h1 className="font-bold text-base">Rohan</h1>
          <p
            style={{ fontFamily: "Space Grotesk" }}
            className="font-light text-xs text-gray-300"
          >
            Fullstack Web Developer
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-5">
        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
          </span>
          <p className="text-green-500 text-sm">Available</p>
        </div>

        {/* Theme Toggle */}
        <div className="text-white hover:scale-110 duration-75 cursor-pointer">
          {!theme ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-moon"
              onClick={handleTheme}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-sun text-white cursor-pointer transform transition duration-300 ease-in-out hover:text-gray-400"
              onClick={handleTheme}
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
