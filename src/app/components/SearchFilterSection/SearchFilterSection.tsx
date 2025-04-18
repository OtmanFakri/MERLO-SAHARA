import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const SearchFilterSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#EFB007] bg-[url(..//section.png)] bg-cover bg-center">
      <div className="container py-[70px] px-10 max-w-[1680px]">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Newsletter Subscription Section */}
          <div className="flex-1 min-w-[300px]">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-r border-white pr-[70px]">
              <div className="flex-shrink-0">
                <h2 className="font-['Barlow',Helvetica] font-bold text-4xl text-bananistyle leading-[40px]">
                  Newsletter
                  <br />
                  Subscription
                </h2>
              </div>

              <div className="flex-1 w-full">
                <Card className="bg-transparent border-[9px] border-solid border-[#ffffff33] rounded-sm p-[9px]">
                  <div className="flex items-center bg-bananistyle p-[15px]">
                    <div className="relative flex-1">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-2">
                        <img
                          className="w-6 h-6"
                          alt="Search icon"
                          src="/component-1-53.svg"
                        />
                      </div>
                      <Input
                        className="h-10 pl-10 bg-bananistyle border-none font-pro-theme-com-semantic-input text-pro-themecomboulder"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <Button
                      className="h-10 border-l border-[#dddddd] rounded-none bg-transparent hover:bg-transparent px-6 font-pro-theme-com-semantic-button-upper text-[#222222]"
                      variant="ghost"
                    >
                      SUBSCRIBE
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Download App Section */}
          <div className="flex items-center justify-between gap-8 flex-1 min-w-[300px]">
            <div className="flex flex-col gap-[9px]">
              <h3 className="font-pro-theme-com-semantic-heading-4 text-bananistyle whitespace-nowrap">
                Download Our App
              </h3>
              <p className="font-pro-theme-com-barlow-medium text-bananistyle whitespace-nowrap">
                Get Apps For Faster Booking
              </p>
            </div>

            <div className="flex items-center gap-[30px]">
              <Card className="bg-white border-[9px] border-solid border-[#ffffff33] rounded-[1px] p-0">
                <Button variant="ghost" className="p-[15px] h-auto">
                  <div className="w-10 h-10 bg-[url(/appstore.png)] bg-cover bg-center" />
                </Button>
              </Card>

              <Card className="bg-white border-[9px] border-solid border-[#ffffff33] rounded-[1px] p-0">
                <Button variant="ghost" className="p-[15px] h-auto">
                  <div className="w-10 h-10 bg-[url(/appstore-1.png)] bg-cover bg-center" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
