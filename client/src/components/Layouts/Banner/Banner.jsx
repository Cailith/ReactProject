import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Banner = ({ slug, className }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the slug
    fetch(`/api/products/${slug}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Link className={`${className} relative flex items-center justify-center m-2 transition duration-300 ease-in-out transform sm:hover:scale-102`} to={`/products/${product.slug}`}>
      <img
        src={product.image}
        alt={product.name}
        className="absolute rounded-xl inset-0 w-full h-full object-cover opacity-90"
      />
      <h1 className="relative text-center font-extrabold text-gray-300 text-3xl w-2/3 
             [text-shadow:_1px_1px_0_black,_-1px_1px_0_black,_1px_-1px_0_black,_-1px_-1px_0_black]">{product.name}</h1>
    </Link>
  );
};

Banner.propTypes = {
  slug: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Banner;