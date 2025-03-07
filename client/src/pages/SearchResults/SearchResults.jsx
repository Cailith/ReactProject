import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useLocation, Link } from "react-router";

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

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header/>
      <h1 className="text-center text-xl sm:text-lg m-2 p-2">Sökresultat för: {query}</h1>
      <div className="text-center text-lg m-2 p-2">
        {filteredProducts.length} resultat{filteredProducts.length !== 1 ? ' hittades' : ' hittades'}
      </div>
      <div className="p-4">
        {filteredProducts.length > 0 ? (
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id} className="border-b border-gray-200 p-2">
                <Link to={`/products/${product.slug}`} className="hover:underline"><h2 className="text-lg">{product.name}</h2></Link>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Inga produkter hittades</p>
        )}
      </div>   
      <Footer/>
    </>
  );
}

export default SearchResults;