import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const Hero = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((products) => {
        if (products.length > 0) {
          const randomProduct = products[Math.floor(Math.random() * products.length)];
          setProduct(randomProduct);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div className="text-center text-lg m-2 p-2 text-red-500">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-center text-lg m-2 p-2">Loading...</div>;
  }

  return (
    <Link to={`/products/${product.slug}`} className="flex flex-col items-center text-center lg:flex-row-reverse p-4 group">
      <img src={product.image} alt={product.name} className="w-full lg:max-w-1/2 h-auto rounded-2xl" />
      <div className="p-4 flex-1 flex flex-col">
        <h1 className="text-2xl font-bold group-hover:underline transition duration-300 ease-in-out transform hover:sm:scale-102">{product.name}</h1>
        <p className="mt-2 text-lg">{product.description}</p>
      </div>
    </Link>
  );
};

Hero.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
};

export default Hero;