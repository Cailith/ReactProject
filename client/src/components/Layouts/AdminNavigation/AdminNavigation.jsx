import { Link } from 'react-router';

const AdminNavigation = () => {
    return (
        <nav className="flex flex-col p-4 bg-gray-200 text-black font-bold h-full">
            <Link to="/" className="mb-4 p-2 hover:bg-gray-300 rounded transition duration-300 ease-in-out transform hover:scale-101">
                Home
            </Link>
            <Link to="/admin/products" className="mb-4 p-2 hover:bg-gray-300 rounded transition duration-300 ease-in-out transform hover:scale-101">
                Produkter
            </Link>
        </nav>
    );
};

export default AdminNavigation;