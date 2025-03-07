import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
        .then((res) => res.json())
        .then((products) => setProducts(products));
    }, [products]);

  return (
    <>
      <Header/>
      <Hero/>
      <Footer/>
    </>
  );
}

export default Home;