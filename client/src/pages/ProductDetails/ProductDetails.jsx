import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";

function ProductDetails() {

    let params = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`/api/products/${params.slug}`)
          .then((res) => res.json())
          .then((product) => {
            setProduct(product);
          })
          .catch((error) => console.error("Error fetching product:", error));
      }, [params.slug]);

      if (!product) {
        return (
          <>
            <Header />
            <p>Loading...</p>
            <Footer />
          </>
        );
      }
    
      return (
        <>
          <Header />
          <div className="p-4">
            <h1 className="text-2xl">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-full h-auto" />
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
          </div>
          <SimilarProducts type={product.type} />
          <Footer />
        </>
      );
    }
  
  export default ProductDetails;