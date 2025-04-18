'use client'
import {
    ArrowRightIcon,
    ClockIcon,
    DownloadIcon,
    MailIcon,
    MapPinIcon,
    PhoneIcon,
} from "lucide-react";
import React, {useState} from "react";
import { AspectRatio } from "@/app/components/ui/details/aspect-ratio";
import { Button } from "@/app/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/details/card";
import { Input } from "@/app/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/app//components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/app/components/ui/details/table";
import { Textarea } from "@/app/components/ui/details/textarea";
import Image from 'next/image'
import {features, galleryItems, specifications} from "@/app/constents/constents";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/app/components/ui/breadcrumb";
// Contact info data
const contactInfo = [
    {
        icon: <MapPinIcon className="w-5 h-5" />,
        content: "merlo-sahara Equip. Rentals",
        subContent: "354 Oakridge Lane, Camden\nNew Jersey 08102 - USA",
        link: "https://goo.gl/maps/RwFh5b8Po1pdxBS19",
    },
    {
        icon: <PhoneIcon className="w-5 h-5" />,
        content: "298-345-0088",
        link: "https://wa.me/1XXXXXXXXXX",
    },
    {
        icon: <ClockIcon className="w-5 h-5" />,
        content: "8:00am - 5:00pm - Sat Closed",
        link: "",
    },
    {
        icon: <MailIcon className="w-5 h-5" />,
        content: "rentals@merlo-sahara.com",
        link: "mailto:rentals@merlo-sahara.com",
    },
];
export default function Page() {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    // Handle Previous button click
    const handlePrevious = () => {
        setCurrentItemIndex((prevIndex) =>
            prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
        );
    };

    // Handle Next button click
    const handleNext = () => {
        setCurrentItemIndex((prevIndex) =>
            prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Handle thumbnail click
    const handleThumbnailClick = (index:number) => {
        setCurrentItemIndex(index);
    };

    // Get the current item
    const currentItem = galleryItems[currentItemIndex];
    return (
        <div className="flex flex-col min-w-80 max-w-[1920px] min-h-screen bg-bananistyle">
            <div
                className="flex h-[300px] items-center justify-center p-[15px] relative self-stretch w-full bg-[url(/background.png)] bg-cover bg-center">
                <div className="inline-flex flex-col items-start relative">
                    <h1 className="text-bananistyle font-pro-theme-com-barlow-bold text-[length:var(--pro-theme-com-barlow-bold-font-size)] tracking-[var(--pro-theme-com-barlow-bold-letter-spacing)] leading-[var(--pro-theme-com-barlow-bold-line-height)]">
                        Get &quot;Excavators&quot; On Rent
                    </h1>
                </div>

                {/* Breadcrumb */}
                <div className="absolute top-[248px] left-[780px] bg-pro-themecomcorn rounded-sm px-[35px] py-5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="#"
                                    className="font-medium text-bananistyle text-lg"
                                >
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <span className="text-bananistyle">→</span>
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="#"
                                    className="font-medium text-bananistyle text-lg"
                                >
                                    Get &quot;Excavators&quot; On Rent
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <div className="flex flex-col flex-1 w-full">
                <div className="flex flex-col items-center w-full">
                    <div
                        className="flex flex-col max-w-screen-xl w-full lg:w-[1280px] items-start px-4 lg:pl-0 lg:pr-10 py-[70px]">
                        <div className="flex flex-wrap w-full gap-8">
                            {/* Left Column - Product Details */}
                            <div className="flex flex-col w-full lg:w-[826px] px-4 lg:pl-10 lg:pr-0">
                                {/* Image Gallery */}
                                <div className="mb-10">
                                    {/* Main Display (Image or Video) */}
                                    <div className="relative">
                                        <AspectRatio
                                            ratio={16 / 9}
                                            className="bg-gray-100 rounded-md overflow-hidden"
                                        >
                                            {currentItem.type === 'image' ? (
                                                <Image
                                                    src={currentItem.src}
                                                    alt={currentItem.alt}
                                                    fill
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <video
                                                    src={currentItem.src}
                                                    poster={'/video-poster.png'}
                                                    className="w-full h-full object-cover"
                                                    controls
                                                    autoPlay
                                                    muted
                                                />
                                            )}
                                        </AspectRatio>

                                        {/* Previous Button */}
                                        <button
                                            onClick={handlePrevious}
                                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2.5 rounded-md"
                                        >
                                            <img
                                                className="w-3.5 h-6"
                                                alt="Previous"
                                                src="/component-1.svg"
                                            />
                                        </button>

                                        {/* Next Button */}
                                        <button
                                            onClick={handleNext}
                                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2.5 rounded-md"
                                        >
                                            <img
                                                className="w-3.5 h-6"
                                                alt="Next"
                                                src="/component-1-2.svg"
                                            />
                                        </button>
                                    </div>

                                    {/* Thumbnails */}
                                    <div className="flex mt-5 overflow-x-auto">
                                        {galleryItems.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 px-4 first:pl-0"
                                                onClick={() => handleThumbnailClick(index)}
                                            >
                                                <div className="relative cursor-pointer">
                                                    <img
                                                        src={item.type === 'image' ? item.src : item.poster}
                                                        alt={item.alt}
                                                        className={`w-36 h-20 object-cover ${
                                                            currentItemIndex !== index ? 'opacity-50' : 'opacity-100'
                                                        }`}
                                                    />
                                                    {item.type === 'video' && (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <svg
                                                                className="w-8 h-8 text-white opacity-80"
                                                                fill="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Product Title */}
                                <h1 className="font-['Barlow',Helvetica] font-bold text-[#222222] text-4xl leading-[56px] mb-4">
                                    Caterpillar 345 GC Excavator
                                </h1>

                                {/* Location */}
                                <div className="flex items-center pb-4 border-b border-[#dddddd] mb-10">
                                    <MapPinIcon className="w-5 h-5 mr-2"/>
                                    <span className="font-['Barlow',Helvetica] text-[#222222] text-lg leading-[26px]">
                    354 Oakridge Lane, Camden NJ 08102 - USA
                  </span>
                                </div>

                                {/* Description Section */}
                                <div className="mb-10">
                                    <h2 className="font-pro-theme-com-semantic-heading-3 text-[#222222] text-[40px] leading-[48px] mb-8">
                                        Description
                                    </h2>

                                    {/*<h3 className="font-pro-theme-com-semantic-heading-5 text-pro-themecommine-shaft text-[16px] leading-[22px] mb-4">*/}
                                    {/*    Best Yanmar powered hydraulic excavator for rent.*/}
                                    {/*</h3>*/}

                                    {/*<p className="font-['Barlow',Helvetica] font-light text-pro-themecomemperor text-lg leading-7 mb-6">*/}
                                    {/*    Sed ut perspiciatis unde omnis iste natus error sit*/}
                                    {/*    voluptatem accusantium dolore mque laud antium,*/}
                                    {/*    <br/>*/}
                                    {/*    totam rem aperiam, eaque ipsa quae ab illo inventore*/}
                                    {/*    veritatis et quasi architecto be atae vitae dicta*/}
                                    {/*    <br/>*/}
                                    {/*    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit*/}
                                    {/*    aspernatur aut odit aut fugit, sed quia*/}
                                    {/*    <br/>*/}
                                    {/*    consequuntur magni dolores.*/}
                                    {/*</p>*/}

                                    {/*<p className="font-['Barlow',Helvetica] font-light text-pro-themecomemperor text-lg leading-7 mb-6">*/}
                                    {/*    Eos qui ratione voluptatem sequi nesciunt. Neque porro*/}
                                    {/*    quisquam es qui dolorem ipsum quia dolor sit*/}
                                    {/*    <br/>*/}
                                    {/*    amet consectetur, adipisci velit sed quia non numquam eius*/}
                                    {/*    modiy.*/}
                                    {/*</p>*/}

                                    {/* Features List */}
                                    <ul className="space-y-1 mt-6">
                        {/*                {features.map((feature, index) => (*/}
                        {/*                    <li key={index} className="flex items-center">*/}
                        {/*                        <div className="w-[31px] flex items-center">*/}
                        {/*                            <div className="w-[17px] h-[17px] relative">*/}
                        {/*                                <img*/}
                        {/*                                    className="w-5 h-5"*/}
                        {/*                                    alt="Check"*/}
                        {/*                                    src="/component-1-3.svg"*/}
                        {/*                                />*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                        <span*/}
                        {/*                            className="font-['Barlow',Helvetica] font-light text-pro-themecomemperor text-lg leading-7 truncate">*/}
                        {/*  {feature}*/}
                        {/*</span>*/}
                        {/*                    </li>*/}
                        {/*                ))}*/}
                                    </ul>
                                </div>

                                {/* Specification Section */}
                                <div className="mb-10">
                                    <h2 className="font-pro-theme-com-semantic-heading-3 text-[#222222] text-[40px] leading-[48px] mb-8">
                                        Specification
                                    </h2>

                                    <Table>
                                        <TableBody>
                                            {specifications.map((spec, index) => (
                                                <TableRow
                                                    key={index}
                                                    className={
                                                        index % 2 === 0
                                                            ? "bg-[#f8f8f8] border-y border-[#dfe1ee]"
                                                            : ""
                                                    }
                                                >
                                                    <TableCell className="w-[60%] py-4 px-3">
                            <span
                                className="font-['Barlow',Helvetica] font-light text-pro-themecomemperor text-lg leading-7">
                              {spec.label}
                            </span>
                                                    </TableCell>
                                                    <TableCell className="w-[40%] py-4 px-3">
                            <span
                                className="font-['Barlow',Helvetica] font-semibold text-pro-themecomemperor text-lg leading-7">
                              {spec.value}
                            </span>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>

                            {/* Right Column - Sidebar */}
                            <div className="flex flex-col w-full lg:w-[373px] bg-[#f9f9f9]">
                                {/* Price Card */}
                                <Card
                                    className="border-none rounded-none border-l-[5px] border-l-[#efb007] bg-[#222222] mb-10">
                                    <CardContent className="p-[50px]">
                                        <div className="text-center">
                                            <p className="font-['Barlow',Helvetica] text-bananistyle text-lg leading-7 mb-2">
                                                [Equipment Current Price]
                                            </p>
                                            <p className="font-pro-theme-com-barlow-bold text-bananistyle text-[48px] leading-[48px]">
                                                $69,800
                                            </p>
                                            <p className="font-pro-theme-com-barlow-regular-strikethrough text-pro-themecomgray text-[24px] leading-[37px] line-through">
                                                $75,300
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Contact Card */}
                                <Card className="border-none rounded-none bg-bananistyle mb-10">
                                    <CardHeader className="px-[30px] pt-[30px] pb-4 border-b border-[#eeeeee]">
                                        <div className="flex items-center">
                                            <div className="w-8 h-[30px] mr-2.5">
                                                <img
                                                    className="w-[22px] h-[30px]"
                                                    alt="Contact"
                                                    src="/component-1-1.svg"
                                                />
                                            </div>
                                            <CardTitle
                                                className="font-['Barlow',Helvetica] font-bold text-[#222222] text-lg leading-7">
                                                Get In Touch
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="px-[30px] pt-6 pb-10">
                                        <div className="space-y-5">
                                            {contactInfo.map((item, index) => (
                                                <div key={index} className="flex">
                                                    <div className="w-[35px] h-5 pt-[7px]">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        {item.subContent ? (
                                                            <>
                                                                <a
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="font-['Barlow',Helvetica] font-bold text-[#222222] text-lg leading-[30px] block"
                                                                >
                                                                    {item.content}
                                                                </a>
                                                                <a
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="font-['Barlow',Helvetica] text-[#222222] text-lg leading-[30px] whitespace-pre-line"
                                                                >
                                                                    {item.subContent}
                                                                </a>
                                                            </>
                                                        ) : (
                                                            <a
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="font-pro-theme-com-semantic-link text-[#222222] text-[18px] leading-[30px]"
                                                            >
                                                                {item.content}
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                          {/*              <div className="mt-10 space-y-4">*/}
                          {/*                  <Button*/}
                          {/*                      className="w-full h-[55px] bg-[#efb007] hover:bg-[#d69e06] rounded-sm text-bananistyle justify-between px-10"*/}
                          {/*                      asChild*/}
                          {/*                  >*/}
                          {/*                      <a*/}
                          {/*                          href="https://pro-theme.com/html/merlo-sahara/07_equipment-detail.html#!"*/}
                          {/*                          target="_blank"*/}
                          {/*                          rel="noopener noreferrer"*/}
                          {/*                      >*/}
                          {/*<span className="font-pro-theme-com-barlow-light-upper text-[18px] leading-[53px]">*/}
                          {/*  DOWNLOAD FLYER*/}
                          {/*</span>*/}
                          {/*                          <DownloadIcon className="w-5 h-5"/>*/}
                          {/*                      </a>*/}
                          {/*                  </Button>*/}

                          {/*                  <Button*/}
                          {/*                      className="w-full h-[55px] bg-[#efb007] hover:bg-[#d69e06] rounded-sm text-bananistyle justify-between px-10"*/}
                          {/*                      asChild*/}
                          {/*                  >*/}
                          {/*                      <a*/}
                          {/*                          href="https://pro-theme.com/html/merlo-sahara/07_equipment-detail.html#!"*/}
                          {/*                          target="_blank"*/}
                          {/*                          rel="noopener noreferrer"*/}
                          {/*                      >*/}
                          {/*<span className="font-pro-theme-com-barlow-light-upper text-[18px] leading-[53px]">*/}
                          {/*  ASK FINANCE QUOTE*/}
                          {/*</span>*/}
                          {/*                          <ArrowRightIcon className="w-5 h-5"/>*/}
                          {/*                      </a>*/}
                          {/*                  </Button>*/}
                          {/*              </div>*/}
                                    </CardContent>
                                </Card>

                                {/* Contact Form */}
                                <Card className="border-none rounded-none bg-bananistyle">
                                    <CardHeader className="px-[30px] pt-[30px] pb-4 border-b border-[#eeeeee]">
                                        <div className="flex items-center">
                                            <div className="w-8 h-[30px] mr-2.5">
                                                <img
                                                    className="w-[22px] h-[30px]"
                                                    alt="Contact"
                                                    src="/component-1-1.svg"
                                                />
                                            </div>
                                            <CardTitle
                                                className="font-['Barlow',Helvetica] font-bold text-[#222222] text-lg leading-7">
                                                Get In Touch
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-[30px]">
                                        <form className="space-y-4">
                                            <div>
                                                <Input
                                                    className="h-[62px] pl-[30px] bg-pro-themecomalabaster rounded-sm text-pro-themecomgray"
                                                    placeholder="Name *"
                                                />
                                            </div>
                                            <div>
                                                <Input
                                                    className="h-[62px] pl-[30px] bg-pro-themecomalabaster rounded-sm text-pro-themecomgray"
                                                    placeholder="Email *"
                                                    type="email"
                                                />
                                            </div>
                                            <div>
                                                <Input
                                                    className="h-[62px] pl-[30px] bg-pro-themecomalabaster rounded-sm text-pro-themecomgray"
                                                    placeholder="PhoneIcon *"
                                                    type="tel"
                                                />
                                            </div>
                                            <div>
                                                <Input
                                                    className="h-[62px] pl-[30px] bg-pro-themecomalabaster rounded-sm text-pro-themecomgray"
                                                    placeholder="Company"
                                                />
                                            </div>
                                            <div>
                                                <Input
                                                    className="h-[62px] pl-[30px] bg-pro-themecomalabaster rounded-sm text-pro-themecomgray"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                            <div>
                                                <Select>
                                                    <SelectTrigger
                                                        className="h-[62px] pl-[30px] bg-pro-themecomalabaster rounded-sm text-pro-themecomgray">
                                                        <SelectValue placeholder="State / City"/>
                                                    </SelectTrigger>
                                                </Select>
                                            </div>
                                            <div>
                                                <Textarea
                                                    className="h-[150px] pl-[30px] pt-[15px] bg-pro-themecomalabaster rounded-sm text-pro-themecomgray resize-none"
                                                    placeholder="Questions/Comments:"
                                                />
                                            </div>
                                            <div>
                                                <Button
                                                    className="w-full h-[55px] bg-transparent border border-[#222222] rounded-sm hover:bg-[#f5f5f5] text-[#222222] justify-between px-10"
                                                    type="submit"
                                                >
                          <span className="font-pro-theme-com-barlow-bold-upper text-[18px] leading-[53px]">
                            SEND MESSAGE
                          </span>
                                                    <ArrowRightIcon className="w-5 h-5"/>
                                                </Button>
                                            </div>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}