import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Header() {
const [query, setQuery] = useState("");
const navigate = useNavigate();
const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
};

    return (
      <header className="flex flex-col items-center m-2">
        <div className="flex justify-between items-center w-full flex-col sm:flex-row">
          <div>
            <Link to={"/"}>
              <img src="https://placehold.co/600x400" alt="" className="w-full rounded-2xl" />
            </Link>
          </div>
          <div className="flex items-center w-full flex-row m-2 p-2 justify-between flex-wrap">
            <form className="border-2 border-black rounded-full p-2 flex items-center" onSubmit={handleSearchSubmit}>
              <input type="text" placeholder="Sök produkt" className="px-3 py-1 outline-none" onChange={e => setQuery(e.target.value)} />
              <button type="submit" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
            <span className="flex items-center text-xl">
              <Link to={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 sm:size-7">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </Link>
              <Link to={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 sm:size-7">
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
              </Link>
            </span>
          </div>
        </div>
  
        <div className="w-full mt-4">
          <nav>
            <ul className="flex flex-col sm:flex-row gap-2 text-xl sm:text-lg m-2 p-2">
              {["Nyheter", "Topplistan", "Rea", "Kampanjer"].map((item, index) => (
                <li key={index}>
                  <Link to={"/"} className="hover:underline">{item}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  