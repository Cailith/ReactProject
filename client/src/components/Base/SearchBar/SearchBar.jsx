import { useState } from 'react';
import { useNavigate } from 'react-router';

const SearchBar = () => {
    const [query, setQuery] = useState("");
const navigate = useNavigate();
const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
};
    return (
        <form className="border-2 border-black rounded-full p-2 flex items-center" onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Sök produkt" className="outline-none" onChange={e => setQuery(e.target.value)} required/>
        <button type="submit" aria-label="Search" className="hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
);
};

export default SearchBar;