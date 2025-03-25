import PropTypes from "prop-types";

const CustomSVG = ({ size, fillColor = "currentColor", pathData, viewBox = "0 0 24 24", svgClassName = "" }) => {
  const sizeClass = size ? `size-${size}` : "";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={`${sizeClass} ${svgClassName}`}
    >
      <path fill={fillColor} d={pathData} />
    </svg>
  );
};

CustomSVG.propTypes = {
  fillColor: PropTypes.string,
  pathData: PropTypes.string.isRequired, // SVG path data string that defines the shape of the SVG
  viewBox: PropTypes.string,
  svgClassName: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};


export default CustomSVG;
