import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function ProductDetails() {

    const params = useParams();

    const [product, setProduct] = useState(null);
    const handleButtonClick = (e) => {
      e.preventDefault();
      console.log("Button clicked");
    };
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
      async function fetchProduct() {
        try {
          const response = await fetch(`/api/products/${params.slug}`);
          const data = await response.json();
          setProduct(data);
  
          if (data.brand || data.type) {
            const relatedResponse = await fetch(
              `/api/products?filter=${data.brand || data.type}`
            );
            const relatedData = await relatedResponse.json();
            setRelatedProducts(relatedData);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
  
      fetchProduct();
    }, [params.slug]);

    const memoizedRelatedProducts = useMemo(() => {
      return relatedProducts.slice(0, 3).map((relatedProduct) => (
        <ProductCard key={relatedProduct.id} product={relatedProduct} />
      ));
    }, [relatedProducts]);

      if (!product) {
        return (
          <>
            <Header />
            <h1 className="m-2 mt-6 text-2xl text-center">Laddar sidan...</h1>
            <Footer />
          </>
        );
      }
    
      return (
        <>
          <Header />
          <div className="flex flex-col sm:flex-row sm:gap-2 p-4">
            <img src={product.image} alt={product.name} className="w-full max-w-1/2 h-auto rounded-2xl" />
            <div className="flex flex-col">
              <h1 className="text-2xl mb-6 mt-6 sm:mt-0">{product.name}</h1>
              <p className="mb-2"><strong>Märke:</strong> {product.brand}</p>
              <p className="mb-2"><strong>Beskrivning:</strong> {product.description}</p>
              <p className="mb-2"><strong>Pris:</strong> {product.price}</p>
              <button onClick={handleButtonClick} className="border rounded-xl p-2 text-center max-w-auto sm:max-w-1/2 my-4 hover:underline hover:bg-gray-50">Lägg till i Varukorgen</button>
            </div>
          </div>
          <h2 className="m-2 mt-6 text-2xl text-center">Liknande produkter</h2>
          <div className="hidden sm:flex flex-nowrap justify-center">
          {memoizedRelatedProducts}
          </div>
          <Footer />
        </>
      );
    }
  
  export default ProductDetails;