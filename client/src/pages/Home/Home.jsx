import { useState, useEffect, useMemo } from "react";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import Hero from "../../components/Layouts/Hero/Hero";
import ProductCard from "../../components/Layouts/ProductCard/ProductCard";
import Grid from "../../components/Base/Grid/Grid";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((products) => setProducts(products))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const slicedProducts = useMemo(() => products.slice(0, 8), [products]);

  return (
    <>
      <Header />
      <Hero />
      <Grid>
        {slicedProducts.map((product) => (
          <ProductCard key={product.id} product={product} showFavorite={true} />
        ))}
      </Grid>

      <Footer />
    </>
  )
}

export default Home;