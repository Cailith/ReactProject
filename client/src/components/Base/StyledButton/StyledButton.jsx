import PropTypes from "prop-types";

const StyledButton = ({ buttonText, buttonEffect, type }) => {
    const handleButtonClick = (e) => {
        if (type !== "submit") {
            e.preventDefault();
        }
        buttonEffect(); // Call the function
    };

    return (
        <button
            onClick={handleButtonClick}
            type={type}
            className="border-2 rounded-xl px-4 py-2 text-center max-w-full sm:max-w-1/2 my-4 hover:underline hover:bg-gray-100 hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        >
            {buttonText}
        </button>
    );
};

StyledButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonEffect: PropTypes.func.isRequired, // Ensure buttonEffect is a function
    type: PropTypes.string,
};

StyledButton.defaultProps = {
    type: "button", // Default type is "button"
};

export default StyledButton;