import Link from "next/link";
import Image from "next/image";

// --- SVG Icon Components ---
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="#a30f0f"
    {...props}
  >
    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="#a30f0f"
    {...props}
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

type NavLink = {
  href: string;
  label: string;
};

type SocialLink = {
  href: string;
  icon: React.ElementType;
  label: string;
};

const footerNavLinks: NavLink[] = [
  { href: "/locations", label: "LOCATIONS" },
  { href: "/menu", label: "MENU" },
  { href: "/nutrition", label: "NUTRITION" },
  { href: "/careers", label: "CAREERS" },
  { href: "/about-us", label: "ABOUT US" },
  { href: "/franchise", label: "FRANCHISE" },
  { href: "/shop", label: "SHOP" },
  { href: "/contact-us", label: "CONTACT US" },
];

const socialLinks: SocialLink[] = [
  { href: "#", icon: FacebookIcon, label: "Facebook" },
  {
    href: "https://www.instagram.com/captlouiusa",
    icon: InstagramIcon,
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="w-full font-sans text-white py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="flex items-center justify-center pb-8">
          <Link href="/">
            <Image
              alt="footer-logo"
              src="/logo-white.png"
              width={300}
              height={150}
            />
          </Link>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <nav className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-y-3 gap-x-2">
            {footerNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative whitespace-nowrap px-2 py-1 text-md font-medium transition-opacity duration-300 hover:opacity-90 md:text-base"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-white transition-all duration-300 ease-in-out group-hover:w-[70%]" />
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-white opacity-60">•</span>
            <Link
              href="/terms-of-use"
              className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              Terms of Use
            </Link>
            <span className="text-white opacity-60">•</span>
            <Link
              href="/accessibility"
              className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              Accessibility
            </Link>
          </div>

          <div className="flex w-full flex-col items-center">
            <div className="text-center mb-4 md:mb-5">
              <p className="text-xs text-white opacity-80 md:text-sm">
                © {new Date().getFullYear()} by Cap&apos;t Loui LLC. All rights
                reserved.
              </p>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                    <link.icon className="h-4 w-4 text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
