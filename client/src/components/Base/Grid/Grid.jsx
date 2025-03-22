import PropTypes from 'prop-types';

const Grid = ({ children, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-evenly ${className}`}>
      {children}
    </div>
  );
};
Grid.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default Grid;