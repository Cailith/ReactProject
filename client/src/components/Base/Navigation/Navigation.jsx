import NavLink from "../NavLink/NavLink";
import PropTypes from 'prop-types';

const Navigation = ({ links }) => (
  <ul className="flex flex-col sm:flex-row gap-2 text-xl sm:text-lg m-2 p-2">
    {links.map((item, index) => (
      <li key={index}>
        <NavLink to={item} label={item} />
      </li>
    ))}
  </ul>
);
Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Navigation;
