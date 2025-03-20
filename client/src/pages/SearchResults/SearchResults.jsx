import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard";

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`/api/products?search=${query}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [query]);

  const regex = new RegExp(`\\b${query.toLowerCase()}\\b`, "i");

  const filteredProducts = products.filter(product =>
    regex.test(product.name.toLowerCase()) ||
    regex.test(product.description.toLowerCase()) ||
    regex.test(product.brand.toLowerCase()) ||
    regex.test(product.type.toLowerCase())
  );

  return (
    <>
      <Header/>
      <h1 className="text-center text-xl sm:text-lg m-2 p-2">Sökresultat för: {query}</h1>
      {filteredProducts.length > 0 ? (
        <>
          <div className="text-center text-lg m-2 p-2">
            Hittade {filteredProducts.length} {filteredProducts.length !== 1 ? 'produkter' : 'produkt'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-lg m-2 p-2">Inga produkter hittades</div>
      )}
      <Footer/>
    </>
  );
}

export default SearchResults;