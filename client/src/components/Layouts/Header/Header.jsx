import { Link } from "react-router";
import SearchBar from "../../Base/SearchBar/SearchBar";
import IconLink from "../../Base/IconLink/IconLink";
import Navigation from "../../Base/Navigation/Navigation";

const Header = () => {


  return (
    <header className="flex flex-col items-center m-2">
      <div className="flex justify-between items-center w-full flex-col sm:flex-row">
        <div>
          <Link to={"/"}>
            <img src="https://placehold.co/600x400" alt="Website Logo" className="w-full rounded-2xl" />
          </Link>
        </div>
        <div className="flex items-center w-full flex-row m-2 justify-between flex-wrap">
          <SearchBar />
          <span className="flex items-center text-xl">
            <IconLink to="/" aria-label="Favorites" pathData="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            <IconLink to="/" aria-label="Cart" pathData="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </span>
        </div>
      </div>

      <div className="w-full mt-4">
        <nav aria-label="Primary Navigation">
          <Navigation links={["Nyheter", "Topplistan", "Rea", "Kampanjer"]} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
