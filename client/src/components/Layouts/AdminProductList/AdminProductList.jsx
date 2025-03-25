import { useEffect, useState } from "react";
import { Link } from "react-router";
import ConfirmationButton from "../../Base/ConfirmationButton/ConfirmationButton";

const AdminProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(resp => resp.json())
      .then(data => setProducts(data));
  }, []);

  const confirmDelete = (productId) => {
    console.log("Deleting product with id:", productId);
    fetch(`/api/products/${productId}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setProducts(products.filter((product) => product.id !== productId));
      }
      
    });
  };
  

  return (
    <div className="overflow-x-auto m-4">
      <table className="min-w-full rounded-lg shadow-md border-2">
        <thead className="bg-gray-100 border-b-2">
          <tr className="">
            <th className="px-4 py-2 text-left border-r-2 bg-gray-400">Namn</th>
            <th className="px-4 py-2 text-left border-r-2 bg-gray-400">SKU</th>
            <th className="px-4 py-2 text-left border-r-2 bg-gray-400">Pris</th>
            <th className="px-4 py-2 text-center bg-gray-400">Redigera</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className={`group border-b hover:bg-gray-200 transition ${
                index % 2 === 0 ? "bg-gray-100" : ""
              }`}>
              <td className="px-4 py-2 border-r ">
                <Link to={`/products/${product.slug}`} state={product} className="group-hover:underline">
                  {product.name}
                </Link>
              </td>
              <td className="px-4 py-2 border-r">{product.sku}</td>
              <td className="px-4 py-2 border-r">{product.price}</td>
              <td className="px-4 py-2 flex place-content-center gap-1">
                <ConfirmationButton svgPath="M22,4H16V3a3,3,0,0,0-3-3H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H4V20a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2a1,1,0,0,0,0-2ZM10,3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4H10ZM9,18a1,1,0,0,1-2,0V10a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V10a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V10a1,1,0,0,1,2,0Z" onConfirm={() => confirmDelete(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;