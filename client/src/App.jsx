import {  Route, Routes } from "react-router";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import NewProduct from "./pages/NewProduct/NewProduct";
import SearchResults from "./pages/SearchResults/SearchResults";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {

  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin/products" element={<Admin />} />
        <Route path="/admin/product/new" element={<NewProduct />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
      </Routes>
  );
}

export default App;
