import { Link } from 'react-router';
import PropTypes from 'prop-types';



const Icon = ({ path, to }) => {
    return (
        <Link to={to}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 sm:size-7 transition-transform transform hover:scale-110">
                <path d={path} />
            </svg>
        </Link>
    );
};

Icon.propTypes = {
    path: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default Icon;