import { Link } from 'react-router';
import PropTypes from 'prop-types';

const SearchLink = ({ to, label, className }) => {
  return (
    <Link to={`/search?query=${to}`} className={`${className ? `${className} ` : ''} hover:underline`}>
      {label}
    </Link>
  );
};

SearchLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SearchLink;