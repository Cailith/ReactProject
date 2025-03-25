import { useNavigate } from "react-router";
import StyledButton from "../../components/Base/StyledButton/StyledButton";
import AdminProductList from "../../components/Layouts/AdminProductList/AdminProductList";
import AdminHeader from "../../components/Layouts/AdminHeader/AdminHeader";
import AdminNavigation from "../../components/Layouts/AdminNavigation/AdminNavigation";


const Admin = () => {
  const navigate = useNavigate();
  const navigateNewProduct = () => {
    navigate("/admin/products/new");
  };

  return (
    <>
      <AdminHeader />
      <div className="flex flex-row h-screen">
        <div className="w-1/6 min-w-fit">
      <AdminNavigation />
      </div>
        <main className="w-3/4 h-full">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">
              Produkter
            </h1>
          <StyledButton buttonText="Ny Produkt" buttonEffect={navigateNewProduct} />
        </div>
        <AdminProductList/>
      </main>
      </div>
    </>
  );
};

export default Admin;