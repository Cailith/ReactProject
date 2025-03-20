import { Link } from "react-router";
import PropTypes from 'prop-types';

function ProductCard({product}) {
  return (
    <Link to={`/products/${product.slug}`} className="block">
    <div className="m-2 group hover:bg-gray-50 rounded-2xl">
      <img src={product.image} alt={product.name} className="w-full h-auto p-2 rounded-2xl" />
      <h2 className="p-2 text-lg group-hover:underline">{product.name}</h2>
      <div className="flex justify-between p-2">
       <p>{product.brand}</p>
       <p>{product.price}</p>
      </div>
    </div>
    </Link>
  );
}


ProductCard.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;