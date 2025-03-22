import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import NavLink from '../NavLink/NavLink';

const AccordionSection = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className={`w-full text-left p-4 focus:outline-none ${isOpen ? 'bg-gray-200' : ''}`}
        onClick={toggleAccordion}
      >
        <h2 className="text-xl">{title}</h2>
      </button>
      {isOpen && (
        <div className="p-4">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {title === "Shopping" ? (
                  <NavLink to={link.to} label={link.label} className="text-lg" />
                ) : (
                  <Link to={link.to} className="hover:underline text-lg">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

AccordionSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AccordionSection;