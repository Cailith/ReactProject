import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CustomSVG from "../CustomSVG/CustomSVG";

const ConfirmationButton = ({ svgPath, onConfirm, className }) => {
  const [clicked, setClicked] = useState(false);
  const containerRef = useRef(null);

  const extractSizeFromClassName = () => {
    // Check for size-* classes first (e.g., size-6 → 1.5rem)
    const sizeUtilityMatch = className.match(/size-(\d+)/);
    if (sizeUtilityMatch) {
      return parseInt(sizeUtilityMatch[1], 10) / 4; // Convert to rem (size-6 → 6/4 = 1.5rem)
    }
  
    // Fall back to w-* or h-* classes
    const sizeClasses = className.match(/(w|h)-(\d+)/g) || [];
    if (sizeClasses.length > 0) {
      const sizeClass = sizeClasses[0];
      const sizeValue = parseInt(sizeClass.split('-')[1], 10);
      return sizeValue / 4; // Convert Tailwind size to rem (since 1 = 0.25rem)
    }
  
    return 1; // Default size if none found
  };
  
    const size = extractSizeFromClassName();

  // Handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clicked && containerRef.current && !containerRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [clicked]);

  // Calculate button size based on SVG size with padding
  const buttonSize = `calc(${size}rem + 0.5rem)`; // SVG size + padding
  const iconButtonClasses = `flex items-center justify-center rounded-full hover:cursor-pointer transition-all duration-200 ${className}`;
  const containerWidth = clicked 
  ? `calc(${buttonSize} * 2 + 0.25rem)` // Both buttons + gap
  : buttonSize; // Single button

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center transition-all duration-200 overflow-hidden"
      style={{
        width: containerWidth,
        height: buttonSize,
      }}
    >
      <button
        onClick={!clicked ? () => setClicked(true) : () => setClicked(false)}
        className={`${iconButtonClasses} ${
          clicked 
            ? "bg-red-100 hover:bg-red-200 text-red-500 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105"
            : "bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
        }`}
        style={{
          width: buttonSize,
          height: buttonSize,
          minWidth: buttonSize,
          minHeight: buttonSize
        }}
        aria-label={!clicked ? "Open confirmation" : "Cancel"}
      >
        <CustomSVG
          svgClassName={className}
          pathData={
            !clicked 
              ? svgPath 
              : "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm4.707,14.293a1,1,0,1,1-1.414,1.414L12,13.414,8.707,16.707a1,1,0,1,1-1.414-1.414L10.586,12,7.293,8.707A1,1,0,1,1,8.707,7.293L12,10.586l3.293-3.293a1,1,0,1,1,1.414,1.414L13.414,12Z"
          }
        />
      </button>

      <button
        onClick={() => {
          setClicked(false);
          onConfirm();
        }}
        className={`${iconButtonClasses} bg-green-100 hover:bg-green-200 text-green-500 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105 ${
          clicked
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-[-10px] scale-90 pointer-events-none"
        }`}
        style={{
          width: buttonSize,
          height: buttonSize,
          minWidth: buttonSize,
          minHeight: buttonSize,
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        aria-label="Confirm"
      >
        <CustomSVG
          svgClassName={className}
          pathData="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z"
        />
      </button>

    </div>
  );
};

ConfirmationButton.propTypes = {
  className: PropTypes.string,
  svgPath: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onConfirm: PropTypes.func.isRequired,
  svgClassName: PropTypes.string,
};

export default ConfirmationButton;