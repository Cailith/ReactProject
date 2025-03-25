import FeatureCard from '../../Base/FeatureCard/FeatureCard';
import AccordionSection from '../../Base/AccordionSection/AccordionSection';
import SearchLink from '../../Base/SearchLink/SearchLink';
import { Link } from 'react-router';

const Footer = () => {
  const featureCards = [
    {
      iconPath: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z",
      title: "Gratis frakt och returer",
      fillRule: "evenodd",
      clipRule: "evenodd",
    },
    {
      iconPath: "M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z",
      title: "Expressfrakt",
      fillRule: "evenodd",
      clipRule: "evenodd",
    },
    {
      iconPath: "M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      title: "Säker betalning",
      fillRule: "evenodd",
      clipRule: "evenodd",
    },
    {
      iconPath: "M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z",
      title: "Nyheter varje dag",
      fillRule: "evenodd",
      clipRule: "evenodd",
    },
  ];

  const accordionSections = [
    {
      title: "Shopping",
      links: [
        { to: "Vinterjackor", label: "Vinterjackor" },
        { to: "Pufferjackor", label: "Pufferjackor" },
        { to: "Kappa", label: "Kappa" },
        { to: "Trenchcoats", label: "Trenchcoats" },
      ],
    },
    {
      title: "Mina Sidor",
      links: [
        { to: "/", label: "Mina Ordrar" },
        { to: "/admin/products", label: "Mitt Konto" },
      ],
    },
    {
      title: "Kundtjänst",
      links: [
        { to: "/", label: "Returpolicy" },
        { to: "/", label: "Integritetspolicy" },
      ],
    },
  ];

  return (
    <footer>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-around lg:items-center">
        {featureCards.map((card, index) => (
          <FeatureCard key={index} iconPath={card.iconPath} title={card.title} fillRule={card.fillRule} />
        ))}
      </div>
      <div className="hidden sm:flex bg-gray-200 border-t-2 border-gray-300 p-4 gap-36">
        {accordionSections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl pb-5">{section.title}</h2>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {section.title === "Shopping" ? (
                    <SearchLink to={link.to} label={link.label} />
                  ) : (
                    <Link to={link.to} className="hover:underline">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="accordion sm:hidden">
        {accordionSections.map((section, index) => (
          <AccordionSection key={index} title={section.title} links={section.links} />
        ))}
      </div>
      <div className="w-full max-w-screen">
        <p className="text-center p-4 sm:bg-gray-200 border-b-2 border-gray-300">
          &copy; FreakyFashion
        </p>
      </div>
    </footer>
  );
};

export default Footer;