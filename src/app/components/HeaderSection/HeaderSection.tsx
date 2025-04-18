import {
  MailIcon,
  MapPinIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

// Define navigation links for reusability
const navigationLinks = [
  {
    text: "Home",
    href: "https://pro-theme.com/html/suprek/01_home.html",
    active: false,
  },
  {
    text: "Equipments",
    href: "https://pro-theme.com/html/suprek/03_equipment-categories.html",
    active: true,
  },
  {
    text: "Our Solutions",
    href: "https://pro-theme.com/html/suprek/07_equipment-detail.html",
    active: false,
  },
  {
    text: "About",
    href: "https://pro-theme.com/html/suprek/11_about-us.html",
    active: false,
  },
  {
    text: "News",
    href: "https://pro-theme.com/html/suprek/08_blog-grid.html",
    active: false,
  },
  {
    text: "Contact",
    href: "https://pro-theme.com/html/suprek/12_contact-us.html",
    active: false,
  },
];

// Define social media icons
const socialIcons = [
  { src: "/component-1-8.svg", alt: "Social Icon 1" },
  { src: "/component-1-7.svg", alt: "Social Icon 2" },
  { src: "/component-1-5.svg", alt: "Social Icon 3" },
  { src: "/component-1-10.svg", alt: "Social Icon 4" },
  { src: "/component-1-13.svg", alt: "Social Icon 5" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full border-b border-[#eeeeee]">
      {/* Top bar with contact info and social media */}
      <div className="bg-[#222222] w-full">
        <div className="max-w-screen-xl mx-auto px-10 py-3">
          <div className="flex justify-between items-center">
            {/* Contact information */}
            <div className="flex items-center space-x-5">
              {/* Address */}
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 bg-[#ffffff33] rounded-[18px] mr-2.5">
                  <MapPinIcon className="w-5 h-5 text-bananistyle" />
                </div>
                <a
                  className="font-normal text-bananistyle text-lg leading-[25.9px]"
                  href="https://goo.gl/maps/RwFh5b8Po1pdxBS19"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  35 Oakridge Lane, NJ 08102
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 bg-[#ffffff33] rounded-[18px] mr-2.5">
                  <MailIcon className="w-5 h-5 text-bananistyle" />
                </div>
                <a
                  className="font-normal text-bananistyle text-lg leading-[25.9px]"
                  href="mailto:rentals@suprek.net"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  rentals@suprek.net
                </a>
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex items-center">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-9 h-9 rounded-[18px] ml-[5px]"
                >
                  <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                </div>
              ))}
            </div>

            {/* Call us section */}
            <div className="relative bg-pro-themecomcorn px-[30px] py-3">
              <div className="absolute w-2 h-2 top-[57px] -left-2 border-r-8 border-b-8 border-transparent [border-image:linear-gradient(45deg,rgba(0,0,0,1)_0%,rgba(150,111,12,1)_0%)_1]" />

              <div className="flex items-center pl-[50px] [background:url(..//component-3.png)_50%_50%_/_cover]">
                <div>
                  <div className="text-bananistyle text-sm font-medium leading-[14px]">
                    Need Help? Call Us
                  </div>
                  <div className="font-pro-theme-com-semantic-strong font-[number:var(--pro-theme-com-semantic-strong-font-weight)] text-bananistyle text-[length:var(--pro-theme-com-semantic-strong-font-size)] tracking-[var(--pro-theme-com-semantic-strong-letter-spacing)] leading-[var(--pro-theme-com-semantic-strong-line-height)] whitespace-nowrap [font-style:var(--pro-theme-com-semantic-strong-font-style)]">
                    788-123-9900
                  </div>
                </div>
              </div>

              <div className="absolute w-2 h-2 top-[57px] left-[242px] border-t-8 border-r-8 border-transparent [border-image:linear-gradient(135deg,rgba(150,111,12,1)_0%,rgba(0,0,0,1)_0%)_1]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-bananistyle w-full">
        <div className="max-w-screen-xl mx-auto px-10 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="py-[22px] pb-[29.08px]">
              <div className="w-[167px] h-[50px] bg-[url(/image.png)] bg-cover bg-[50%_50%]" />
            </div>

            {/* Navigation */}
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="flex">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex min-h-[50px] items-center justify-center px-[15px] py-2 font-pro-theme-com-barlow-semibold text-xl ${
                        link.active ? "text-pro-themecomcorn" : "text-[#222222]"
                      }`}
                    >
                      {link.active && "["}
                      {link.text}
                      {link.active && "]"}
                      {link.active && (
                        <div className="absolute top-[-19px] left-[43px]">
                          <img
                            className="w-5 h-5"
                            alt="Component"
                            src="/component-1-26.svg"
                          />
                        </div>
                      )}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search and cart buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="w-[55px] h-[55px] bg-[#f8f8f8] rounded-full p-0"
              >
                <SearchIcon className="w-6 h-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="w-[55px] h-[55px] bg-[#f8f8f8] rounded-full p-0"
              >
                <ShoppingCartIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
