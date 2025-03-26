import { useState } from "react";
import PropTypes from "prop-types";
import CustomSVG from "../CustomSVG/CustomSVG";

const FavoriteButton = ({ onFavorite, initialFavorite = false }) => {
    const [isFavorite, setIsFavorite] = useState(initialFavorite);

    const toggleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite((prev) => !prev);
        if (onFavorite) onFavorite(!isFavorite);
    };

    return (
        <button
            onClick={toggleFavorite}
            className="absolute bottom-9 right-9 p-1 hover:cursor-pointer transition-transform transform hover:scale-110 focus:outline-none z-50"
            aria-label="Favorite"
        >
            {isFavorite ? (
                <CustomSVG svgClassName="size-9 sm:size-7 text-red-500 transition-colors duration-300 ease-in-out" pathData="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            ) : (
                <CustomSVG svgClassName="size-9 sm:size-7 text-black transition-colors duration-300 ease-in-out opacity-50 hover:opacity-75" pathData="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            )}
        </button>
    );
};
FavoriteButton.propTypes = {
    onFavorite: PropTypes.func,
    initialFavorite: PropTypes.bool,
};
export default FavoriteButton;
