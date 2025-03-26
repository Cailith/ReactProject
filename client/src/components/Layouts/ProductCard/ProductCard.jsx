import { Link } from 'react-router';
import PropTypes from 'prop-types';
import FavoriteButton from "../../Base/FavoriteButton/FavoriteButton";

const ProductCard = ({ product, showFavorite = true }) => {
  const handleFavorite = (isFavorite) => {
    console.log(isFavorite ? "Added to favorites!" : "Removed from favorites!");
  };

  return (
    <div className="m-2 group hover:bg-gray-50 rounded-2xl relative transition duration-300 ease-in-out transform sm:hover:scale-102">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative w-full h-full">
          <img src={product.image} alt={product.name} className="w-full h-full p-2 rounded-2xl" />
          {showFavorite && <FavoriteButton onFavorite={handleFavorite} />}
        </div>
        <h2 className="p-2 text-lg group-hover:underline">{product.name}</h2>
        <div className="flex justify-between p-2">
          <p>{product.brand}</p>
          <p>{product.price}</p>
        </div>
      </Link>
    </div>
  );
};


ProductCard.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  showFavorite: PropTypes.bool,
};

ProductCard.defaultProps = {
  showFavorite: true,
};

export default ProductCard;