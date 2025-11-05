"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isMenuPage = pathname?.startsWith("/menu/");
  const currentCategory = pathname?.split("/menu/")[1] || "";

  const MENU_CATEGORIES = [
    { key: "the-boiler", label: "THE BOILER" },
    { key: "soup", label: "SOUP" },
    { key: "sandwiches", label: "SANDWICHES" },
    { key: "sides", label: "SIDES" },
    { key: "the-fryer", label: "THE FRYER" },
    { key: "lunch-special", label: "LUNCH SPECIAL" },
    { key: "kids", label: "FOR KIDS" },
    { key: "drinks", label: "DRINKS" },
    { key: "desserts", label: "DESSERTS" },
  ];

  const handleCategoryClick = (categoryKey: string) => {
    router.push(`/menu/${categoryKey}`);
    setMenuOpen(false); // Close mobile menu when navigating
  };

  useEffect(() => {
    const shrinkThreshold = 50;
    const growThreshold = 30;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled((prevIsScrolled) => {
        if (!prevIsScrolled && scrollY > shrinkThreshold) {
          return true;
        }
        if (prevIsScrolled && scrollY < growThreshold) {
          return false;
        }
        return prevIsScrolled;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const normalize = (str: string) => str.replace(/\/$/, "");

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out">
        <div
          className={`max-w-screen-xl mx-auto flex justify-between items-center flex-wrap px-4 sm:px-6 transition-all duration-300 ease-out ${
            isScrolled ? "py-2" : "py-4"
          }`}
        >
          {/* Logo */}
          <div
            className={`transition-all duration-300 ease-out ${
              isScrolled
                ? "max-w-[120px] md:max-w-[120px]"
                : "max-w-[150px] md:max-w-[220px]"
            }`}
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Capt'n Loui Logo"
                width={250}
                height={150}
                className="w-full h-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu Button - Enhanced for better compatibility */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none relative z-10 bg-transparent border-none p-1"
              aria-label="Toggle menu"
              type="button"
              style={{
                display: "flex",
                visibility: "visible",
                opacity: 1,
                minWidth: "32px",
                minHeight: "32px",
              }}
            >
              <span
                className="block w-6 h-0.5 bg-gray-800 transition-all duration-200"
                style={{
                  backgroundColor: "#1f2937",
                  height: "2px",
                  width: "24px",
                  display: "block",
                }}
              ></span>
              <span
                className="block w-6 h-0.5 bg-gray-800 transition-all duration-200"
                style={{
                  backgroundColor: "#1f2937",
                  height: "2px",
                  width: "24px",
                  display: "block",
                }}
              ></span>
              <span
                className="block w-6 h-0.5 bg-gray-800 transition-all duration-200"
                style={{
                  backgroundColor: "#1f2937",
                  height: "2px",
                  width: "24px",
                  display: "block",
                }}
              ></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-[clamp(10px,2vw,25px)] font-sans font-semibold text-gray-800 text-[clamp(0.85rem,1.5vw,0.95rem)] tracking-wide">
            {navLinks.map((link) => {
              const current = normalize(pathname);
              const target = normalize(link.href);
              const isActive =
                target !== "#" &&
                (current === target || current.startsWith(target));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative inline-block px-1 py-2 transition-colors duration-300 group ${
                      isActive ? "text-primary" : "hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden bg-gray-100 p-4 space-y-6"
          style={{
            display: "block",
            visibility: "visible",
            opacity: 1,
          }}
        >
          <ul className="flex flex-col gap-4 mt-4 text-sm font-semibold text-gray-800">
            {navLinks.map((link) => {
              const current = normalize(pathname);
              const target = normalize(link.href);
              const isActive =
                target !== "#" &&
                (current === target || current.startsWith(target));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-primary transition-colors block py-2 ${
                      isActive ? "text-primary" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Menu Categories - only show on menu pages */}
      {isMenuPage && (
        <div className="lg:hidden bg-white border-t-2 border-b-2 border-primary">
          <div className="overflow-x-auto">
            <div className="flex min-w-max px-2 sm:px-4 py-2 sm:py-4">
              <Link href="/menu">
                <p className="text-black pr-2 sm:pr-4 py-2 text-sm sm:text-md font-bold uppercase border-r-2">
                  Menu
                </p>
              </Link>
              {MENU_CATEGORIES.map((category) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryClick(category.key)}
                  className={`flex-shrink-0 px-2 sm:px-4 py-2 text-sm sm:text-md font-bold whitespace-nowrap border-r-2 border-black last:border-r-0 transition-colors hover:cursor-pointer ${
                    currentCategory === category.key
                      ? "text-primary"
                      : "text-black"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const navLinks = [
  { href: "/locations", label: "LOCATIONS" },
  { href: "/menu", label: "MENU" },
  { href: "/about-us", label: "ABOUT US" },
  { href: "/franchise", label: "FRANCHISE" },
];

export default Header;