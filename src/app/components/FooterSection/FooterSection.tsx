import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Data for solutions links
const solutionsLinks = [
  {
    text: "Safe Walls System",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Climate Control",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Health Care",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Entertainment",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Power Generation",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Industrial Lighting",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
];

// Data for company info links
const companyLinks = [
  {
    text: "About Suprek Rental",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Latest News",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Our Process",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Terms & Conditions",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Protections & Coverages",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
  {
    text: "Used Equipment Sale",
    href: "https://pro-theme.com/html/suprek/page-typography.html",
  },
];

// Data for news items
const newsItems = [
  {
    date: "MARCH 12, 2021",
    title: "Safe Driving Tips from Our Drivers ...",
    href: "https://pro-theme.com/html/suprek/10_blog-post.html",
    image: "/news.png",
  },
  {
    date: "MARCH 12, 2021",
    title: "Basic Tips to Motivate Your Team ...",
    href: "https://pro-theme.com/html/suprek/10_blog-post.html",
    image: "/news-1.png",
  },
];

// Social media links
const socialLinks = [
  { icon: <FacebookIcon className="w-5 h-5" />, href: "#" },
  { icon: <TwitterIcon className="w-5 h-5" />, href: "#" },
  { icon: <InstagramIcon className="w-5 h-5" />, href: "#" },
  { icon: <YoutubeIcon className="w-5 h-5" />, href: "#" },
  { icon: <LinkedinIcon className="w-5 h-5" />, href: "#" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full bg-pro-themecomcod-gray">
      <div className="flex flex-col items-center py-[100px]">
        <div className="container max-w-[1480px] px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Company Info Card */}
            <div className="relative mt-[-115px]">
              <Card className="bg-[#222222] rounded p-[50px] max-w-[390px]">
                <CardContent className="p-0 space-y-[18.9px]">
                  {/* Logo */}
                  <div className="flex items-center">
                    <div className="w-[205px] h-[62px] bg-[url(/image-1.png)] bg-cover bg-[50%_50%]" />
                  </div>

                  {/* Description */}
                  <div className="font-pro-theme-com-barlow-light text-pro-themecommercury-70">
                    Aiusmod tempor incididunt labore
                    <br />
                    dnim ad minim veniam quis nostrsd
                    <br />
                    exercitation ullamco.
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-5 pt-[11px]">
                    <div className="flex items-center">
                      <MapPinIcon className="w-5 h-5 mr-[15px]" />
                      <a
                        className="font-pro-theme-com-semantic-link text-bananistyle"
                        href="https://goo.gl/maps/XdgZbYX9V62UpBwc7"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        35 Oakridge Lane, NJ 08102
                      </a>
                    </div>

                    <div className="flex items-center">
                      <PhoneIcon className="w-5 h-5 mr-[15px]" />
                      <div className="font-pro-theme-com-semantic-link text-bananistyle">
                        +1 (236) 799 5500 / 6600
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MailIcon className="w-5 h-5 mr-[15px]" />
                      <a
                        className="font-pro-theme-com-semantic-link text-bananistyle"
                        href="mailto:equipments@domain.net"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        equipments@domain.net
                      </a>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-center pt-[11px] space-x-[5px]">
                    {socialLinks.map((social, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center w-9 h-9 bg-[#ffffff1a] rounded-[18px]"
                      >
                        {social.icon}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Our Solutions */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-[10px]">
                <h4 className="font-pro-theme-com-semantic-heading-4-upper text-bananistyle">
                  OUR SOLUTIONS
                </h4>
                <Separator className="w-11 h-0.5 bg-pro-themecomcorn" />
              </div>

              <div className="flex flex-col gap-[25px]">
                {solutionsLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-[4.5px]">
                    <div className="w-[25px] h-5 flex items-center">
                      <img
                        className="w-5 h-5"
                        alt="Arrow icon"
                        src="/component-1-3.svg"
                      />
                    </div>
                    <a
                      className="font-light text-pro-themecomwhite-70 text-lg leading-[18px] [font-family:'Barlow',Helvetica]"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-[10px]">
                <h4 className="font-pro-theme-com-semantic-heading-4-upper text-bananistyle">
                  COMPANY INFO
                </h4>
                <Separator className="w-11 h-0.5 bg-pro-themecomcorn" />
              </div>

              <div className="flex flex-col gap-[25px]">
                {companyLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-[4.5px]">
                    <div className="w-[25px] h-5 flex items-center">
                      <img
                        className="w-5 h-5"
                        alt="Arrow icon"
                        src="/component-1-3.svg"
                      />
                    </div>
                    <a
                      className="font-light text-pro-themecomwhite-70 text-lg leading-[18px] [font-family:'Barlow',Helvetica]"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest News */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-[10px]">
                <h4 className="font-pro-theme-com-semantic-heading-4-upper text-bananistyle">
                  LATEST NEWS
                </h4>
                <Separator className="w-11 h-0.5 bg-pro-themecomcorn" />
              </div>

              <div className="flex flex-col gap-5">
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex max-w-[300px] ${index > 0 ? "pt-[21px] border-t border-[#ffffff1a]" : ""}`}
                  >
                    <div className="w-[115px] h-[88px] pr-5">
                      <div
                        className="w-[95px] h-[88px] bg-cover bg-[50%_50%]"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="pb-[15px]">
                        <div className="font-pro-theme-com-semantic-item-underline-upper text-pro-themecomcorn underline">
                          {item.date}
                        </div>
                      </div>
                      <a
                        className="font-light text-pro-themecomwhite-70 text-lg leading-[21.6px] [font-family:'Barlow',Helvetica]"
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.title.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < item.title.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#ffffff4c] py-[45px]">
        <div className="container max-w-[1480px] px-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-center md:text-left [font-family:'Barlow',Helvetica] text-lg">
            <span className="font-light text-white">(c) 2022 </span>
            <span className="text-white">Suprek</span>
            <span className="font-light text-white">
              {" "}
              - Heavy Equipment Rental Service
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              className="font-pro-theme-com-barlow-light-underline text-pro-themecomwhite-30 underline"
              href="https://pro-theme.com/html/suprek/page-typography.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Terms &amp; Conditions
            </a>

            <Separator
              orientation="vertical"
              className="h-[22px] bg-[#ffffff4c]"
            />

            <a
              className="font-pro-theme-com-barlow-light-underline text-pro-themecomwhite-30 underline"
              href="#"
            >
              Sitemap
            </a>

            <Separator
              orientation="vertical"
              className="h-[22px] bg-[#ffffff4c]"
            />

            <a
              className="font-pro-theme-com-barlow-light-underline text-pro-themecomwhite-30 underline"
              href="#"
            >
              Career Opportunities
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
