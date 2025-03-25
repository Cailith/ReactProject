import AdminHeader from "../../components/Layouts/AdminHeader/AdminHeader";
import AdminNavigation from "../../components/Layouts/AdminNavigation/AdminNavigation";
import AdminNewForm from "../../components/Layouts/AdminNewForm/AdminNewForm";
const NewProduct = () => {
        
    return (
      <>
      <AdminHeader />
      <div className="flex flex-row h-screen">
        <div className="w-1/6 min-w-fit">
          <AdminNavigation/>
        </div>
        <main className="w-2/3 h-full">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">
              Produkter
            </h1>
          </div>
          <AdminNewForm/>
        </main>
      </div>
    </>
    );
}

export default NewProduct;