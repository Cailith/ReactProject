import PropTypes from 'prop-types';

const FeatureCard = ({ iconPath, title, fillRule }) => {
  return (
    <div className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
        <path fillRule={fillRule} clipRule={fillRule} d={iconPath} />
      </svg>
      {title}
    </div>
  );
};

FeatureCard.propTypes = {
  iconPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fillRule: PropTypes.string.isRequired,
};

export default FeatureCard;