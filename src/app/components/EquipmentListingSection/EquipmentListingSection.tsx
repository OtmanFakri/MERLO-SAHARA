import {
    ArrowRightIcon,
    CalendarIcon,
    LayoutGridIcon,
    LayoutListIcon,
    SearchIcon,
} from "lucide-react";
import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import {Button} from "@/app//components/ui/button";
import {Card, CardContent, CardFooter} from "@/app//components/ui/card";
import {Input} from "@/app//components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectValue,
} from "@/app//components/ui/select";
import {Separator} from "@/app//components/ui/separator";
import {Badge} from "@/app/components/ui/badge";

export const EquipmentListingSection = () => {
    // Data for subcategories
    const subcategories = [
        "Mini Excavator Upto 5T",
        "Standard Excavator 5T to 20T",
        "Large Excavator 20T",
        "Long Reach Excavator",
        "Special Attachment Excavator",
        "Zero Emission Excavator",
    ];

    // Data for equipment cards
    const equipmentCards = [
        {
            id: 1,
            title: "Standard Excavator 8T",
            image: "/standard-excavator-8t.png",
            brand: "Wacker Neuson",
            model: "EZ17",
            mfgYear: "2019",
            operatingWeight: "1.7 Ton",
            price: "$425.00",
            originalPrice: "$899.00",
            dayRate: "$125 / Day",
            weekRate: "$425 / Week",
            monthRate: "$1350 / Month",
        },
        {
            id: 2,
            title: "Dim Breaker Excavator",
            image: "/dim-breaker-excavator.png",
            brand: "Wacker Neuson",
            model: "EZ17",
            mfgYear: "2019",
            operatingWeight: "1.7 Ton",
            price: "$425.00",
            originalPrice: "$899.00",
            dayRate: "$125 / Day",
            weekRate: "$425 / Week",
            monthRate: "$1350 / Month",
        },
    ];

    return (
        <section className="flex flex-col items-start relative flex-1 self-stretch w-full">
            {/* Hero Banner */}
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

            <div className="flex flex-col items-center relative self-stretch w-full">
                <div className="flex flex-col max-w-[1480px] w-full items-start py-[70px]">
                    <div className="flex flex-wrap items-start gap-0 relative self-stretch w-full">
                        {/* Sidebar */}
                        <div className="flex flex-col w-full md:w-1/3 lg:w-1/4 items-start justify-center pl-10">
                            <div
                                className="flex flex-col items-start gap-[60px] pr-10 relative flex-1 self-stretch w-full">
                                <div className="bg-pro-themecomalabaster w-full">
                                    {/* Refine SearchIcon Section */}
                                    <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full">
                                        <div className="flex items-center relative self-stretch w-full">
                                            <div className="flex items-center gap-2.5">
                                                <img
                                                    className="w-[22px] h-[30px]"
                                                    alt="Refine icon"
                                                    src="/component-1-18.svg"
                                                />
                                                <h2 className="font-bold text-[#222222] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap font-['Barlow',Helvetica]">
                                                    Refine SearchIcon
                                                </h2>
                                            </div>
                                        </div>

                                        <div
                                            className="flex flex-col items-start gap-[9px] relative self-stretch w-full">
                                            {/* Category Select */}
                                            <div
                                                className="flex flex-col items-start gap-[5px] relative self-stretch w-full">
                                                <label
                                                    className="font-pro-theme-com-semantic-label text-pro-themecomgray text-[length:var(--pro-theme-com-semantic-label-font-size)] tracking-[var(--pro-theme-com-semantic-label-letter-spacing)] leading-[var(--pro-theme-com-semantic-label-line-height)]">
                                                    Select Category
                                                </label>
                                                <div
                                                    className="relative self-stretch w-full h-[38px] border-b border-[#eeeeee]">
                                                    <Select>
                                                        <SelectTrigger
                                                            className="border-none shadow-none h-[38px] font-medium text-[#222222] text-lg">
                                                            <SelectValue placeholder="Excavators"/>
                                                        </SelectTrigger>
                                                    </Select>
                                                </div>
                                            </div>

                                            {/* Equipment Select */}
                                            <div
                                                className="flex flex-col items-start gap-[5px] relative self-stretch w-full">
                                                <label
                                                    className="font-pro-theme-com-semantic-label text-pro-themecomgray text-[length:var(--pro-theme-com-semantic-label-font-size)] tracking-[var(--pro-theme-com-semantic-label-letter-spacing)] leading-[var(--pro-theme-com-semantic-label-line-height)]">
                                                    Select Equipment
                                                </label>
                                                <div
                                                    className="relative self-stretch w-full h-[38px] border-b border-[#eeeeee]">
                                                    <Select>
                                                        <SelectTrigger
                                                            className="border-none shadow-none h-[38px] font-medium text-[#222222] text-lg">
                                                            <SelectValue placeholder="Large Excavator 20T"/>
                                                        </SelectTrigger>
                                                    </Select>
                                                </div>
                                            </div>

                                            {/* Pickup Location */}
                                            <div
                                                className="flex flex-col items-start gap-[7px] relative self-stretch w-full">
                                                <label
                                                    className="font-pro-theme-com-semantic-label text-pro-themecomgray text-[length:var(--pro-theme-com-semantic-label-font-size)] tracking-[var(--pro-theme-com-semantic-label-letter-spacing)] leading-[var(--pro-theme-com-semantic-label-line-height)]">
                                                    Pickup Location
                                                </label>
                                                <div
                                                    className="flex items-center w-full relative border-b border-[#eeeeee]">
                                                    <Input
                                                        className="border-none shadow-none h-[38px] font-medium text-[#222222]"
                                                        defaultValue="Newyork MainLand"
                                                    />
                                                    <SearchIcon className="absolute right-0 w-5 h-5"/>
                                                </div>
                                            </div>

                                            {/* Date Range */}
                                            <div
                                                className="flex flex-col items-start gap-[7px] relative self-stretch w-full">
                                                <label
                                                    className="font-pro-theme-com-semantic-label text-pro-themecomgray text-[length:var(--pro-theme-com-semantic-label-font-size)] tracking-[var(--pro-theme-com-semantic-label-letter-spacing)] leading-[var(--pro-theme-com-semantic-label-line-height)]">
                                                    Pickup Location
                                                </label>
                                                <div
                                                    className="flex items-center w-full relative border-b border-[#eeeeee]">
                                                    <Input
                                                        className="border-none shadow-none h-[38px] font-medium text-[#222222]"
                                                        defaultValue="20/08/2021 to 25/08/2021"
                                                    />
                                                    <CalendarIcon className="absolute right-0 w-5 h-5"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subcategories Section */}
                                    <div
                                        className="flex flex-col items-start gap-[17px] relative self-stretch w-full mt-[60px]">
                                        <div className="flex items-center relative self-stretch w-full z-[1]">
                                            <div className="flex items-center gap-2.5">
                                                <img
                                                    className="w-[22px] h-[30px]"
                                                    alt="Subcategories icon"
                                                    src="/component-1-18.svg"
                                                />
                                                <h2 className="font-bold text-[#222222] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap font-['Barlow',Helvetica]">
                                                    Subcategories
                                                </h2>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start relative self-stretch w-full">
                                            {subcategories.map((category, index) => (
                                                <a
                                                    key={index}
                                                    href="https://pro-theme.com/html/suprek/06_all-equipments-grid.html"
                                                    className="flex items-center w-full py-1"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                >
                                                    <img
                                                        className="w-5 h-5 mr-3"
                                                        alt="Category icon"
                                                        src="/component-1-1.svg"
                                                    />
                                                    <span
                                                        className="font-normal text-[#222222] text-lg leading-9 font-['Barlow',Helvetica]">
                            {category}
                          </span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price Range Section */}
                        {/*            <div className="flex flex-col items-start relative self-stretch w-full mt-[60px]">*/}
                        {/*                <div className="flex items-center relative self-stretch w-full">*/}
                        {/*                    <div className="flex items-center gap-2.5">*/}
                        {/*                        <img*/}
                        {/*                            className="w-[22px] h-[30px]"*/}
                        {/*                            alt="Price icon"*/}
                        {/*                            src="/component-1-18.svg"*/}
                        {/*                        />*/}
                        {/*                        <h2 className="font-bold text-[#222222] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap font-['Barlow',Helvetica]">*/}
                        {/*                            Price*/}
                        {/*                        </h2>*/}
                        {/*                        <span*/}
                        {/*                            className="text-sm font-light text-[#222222] leading-[19.6px] ml-1">*/}
                        {/*  (Per Day)*/}
                        {/*</span>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <div*/}
                        {/*                    className="flex flex-col items-center gap-[25px] relative self-stretch w-full mt-4">*/}
                        {/*                    <div className="relative w-full h-10 pt-9">*/}
                        {/*                        <div*/}
                        {/*                            className="relative self-stretch w-full h-1 bg-pro-themecomalto rounded"/>*/}
                        {/*                        <div*/}
                        {/*                            className="absolute w-[169px] h-1 top-9 left-[76px] bg-pro-themecommid-gray"/>*/}
                        {/*                        <div className="absolute top-[15px] left-[53px]">*/}
                        {/*                            <img*/}
                        {/*                                className="w-[45px] h-[45px]"*/}
                        {/*                                alt="Slider handle"*/}
                        {/*                                src="/component-1-27.svg"*/}
                        {/*                            />*/}
                        {/*                        </div>*/}
                        {/*                        <div className="absolute top-[15px] left-[222px]">*/}
                        {/*                            <img*/}
                        {/*                                className="w-[45px] h-[45px]"*/}
                        {/*                                alt="Slider handle"*/}
                        {/*                                src="/component-1-36.svg"*/}
                        {/*                            />*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}

                        {/*                    <div className="flex items-center justify-center border-b border-[#222222]">*/}
                        {/*<span className="font-medium text-[#222222] text-base text-center leading-4 whitespace-nowrap">*/}
                        {/*  Range from*/}
                        {/*</span>*/}
                        {/*                        <div className="w-10 text-center font-medium text-[#222222] mx-1">*/}
                        {/*                            1200*/}
                        {/*                        </div>*/}
                        {/*                        <span*/}
                        {/*                            className="font-medium text-[#222222] text-base text-center leading-4 whitespace-nowrap">*/}
                        {/*  To*/}
                        {/*</span>*/}
                        {/*                        <div className="w-10 text-center font-medium text-[#222222] mx-1">*/}
                        {/*                            5000*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                                    {/* Operating Weight Section */}
                        {/*            <div className="flex flex-col items-start relative self-stretch w-full mt-[60px]">*/}
                        {/*                <div className="flex items-center relative self-stretch w-full">*/}
                        {/*                    <div className="flex items-center gap-2.5">*/}
                        {/*                        <img*/}
                        {/*                            className="w-[22px] h-[30px]"*/}
                        {/*                            alt="Weight icon"*/}
                        {/*                            src="/component-1-18.svg"*/}
                        {/*                        />*/}
                        {/*                        <h2 className="font-bold text-[#222222] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap font-['Barlow',Helvetica]">*/}
                        {/*                            Operating Weight*/}
                        {/*                        </h2>*/}
                        {/*                        <span*/}
                        {/*                            className="text-sm font-light text-[#222222] leading-[19.6px] ml-1">*/}
                        {/*  (Ton)*/}
                        {/*</span>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <div*/}
                        {/*                    className="flex flex-col items-center gap-[25px] relative self-stretch w-full mt-4">*/}
                        {/*                    <div className="relative w-full h-10 pt-9">*/}
                        {/*                        <div*/}
                        {/*                            className="relative self-stretch w-full h-1 bg-pro-themecomalto rounded"/>*/}
                        {/*                        <div*/}
                        {/*                            className="absolute w-[177px] h-1 top-9 left-[22px] bg-pro-themecommid-gray"/>*/}
                        {/*                        <div className="absolute top-[15px] left-0">*/}
                        {/*                            <img*/}
                        {/*                                className="w-[45px] h-[45px]"*/}
                        {/*                                alt="Slider handle"*/}
                        {/*                                src="/component-1-55.svg"*/}
                        {/*                            />*/}
                        {/*                        </div>*/}
                        {/*                        <div className="absolute top-[15px] left-[177px]">*/}
                        {/*                            <img*/}
                        {/*                                className="w-[45px] h-[45px]"*/}
                        {/*                                alt="Slider handle"*/}
                        {/*                                src="/component-1-34.svg"*/}
                        {/*                            />*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}

                        {/*                    <div className="flex items-center justify-center border-b border-[#222222]">*/}
                        {/*<span className="font-medium text-[#222222] text-base text-center leading-4 whitespace-nowrap">*/}
                        {/*  Range from*/}
                        {/*</span>*/}
                        {/*                        <div className="w-10 text-center font-medium text-[#222222] mx-1">*/}
                        {/*                            0*/}
                        {/*                        </div>*/}
                        {/*                        <span*/}
                        {/*                            className="font-medium text-[#222222] text-base text-center leading-4 whitespace-nowrap">*/}
                        {/*  To*/}
                        {/*</span>*/}
                        {/*                        <div className="w-10 text-center font-medium text-[#222222] mx-1">*/}
                        {/*                            25*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                                    {/* Digging Depth Section */}
                        {/*            <div className="flex flex-col items-start relative self-stretch w-full mt-[60px]">*/}
                        {/*                <div className="flex items-center relative self-stretch w-full">*/}
                        {/*                    <div className="flex items-center gap-2.5">*/}
                        {/*                        <img*/}
                        {/*                            className="w-[22px] h-[30px]"*/}
                        {/*                            alt="Depth icon"*/}
                        {/*                            src="/component-1-18.svg"*/}
                        {/*                        />*/}
                        {/*                        <h2 className="font-bold text-[#222222] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap font-['Barlow',Helvetica]">*/}
                        {/*                            Digging Depth*/}
                        {/*                        </h2>*/}
                        {/*                        <span*/}
                        {/*                            className="text-sm font-light text-[#222222] leading-[19.6px] ml-1">*/}
                        {/*  (Meter)*/}
                        {/*</span>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <div*/}
                        {/*                    className="flex flex-col items-center gap-[25px] relative self-stretch w-full mt-4">*/}
                        {/*                    <div className="relative w-full h-10 pt-9">*/}
                        {/*                        <div*/}
                        {/*                            className="relative self-stretch w-full h-1 bg-pro-themecomalto rounded"/>*/}
                        {/*                        <div*/}
                        {/*                            className="absolute w-[244px] h-1 top-9 left-[67px] bg-pro-themecommid-gray"/>*/}
                        {/*                        <div className="absolute top-[15px] left-11">*/}
                        {/*                            <img*/}
                        {/*                                className="w-[45px] h-[45px]"*/}
                        {/*                                alt="Slider handle"*/}
                        {/*                                src="/component-1-30.svg"*/}
                        {/*                            />*/}
                        {/*                        </div>*/}
                        {/*                        <div className="absolute top-[15px] left-72">*/}
                        {/*                            <img*/}
                        {/*                                className="w-[45px] h-[45px]"*/}
                        {/*                                alt="Slider handle"*/}
                        {/*                                src="/component-1-37.svg"*/}
                        {/*                            />*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}

                        {/*                    <div className="flex items-center justify-center border-b border-[#222222]">*/}
                        {/*<span className="font-medium text-[#222222] text-base text-center leading-4 whitespace-nowrap">*/}
                        {/*  Range from*/}
                        {/*</span>*/}
                        {/*                        <div className="w-10 text-center font-medium text-[#222222] mx-1">*/}
                        {/*                            1000*/}
                        {/*                        </div>*/}
                        {/*                        <span*/}
                        {/*                            className="font-medium text-[#222222] text-base text-center leading-4 whitespace-nowrap">*/}
                        {/*  To*/}
                        {/*</span>*/}
                        {/*                        <div className="w-10 text-center font-medium text-[#222222] mx-1">*/}
                        {/*                            6500*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex flex-col w-full md:w-2/3 lg:w-3/4 items-end gap-[60px] pl-10">
                            {/* Results Header */}
                            <div
                                className="flex items-center justify-between w-full bg-pro-themecomalabaster px-[30px]">
                                <div>
                                    <p className="text-lg leading-[30px]">
                    <span className="font-light text-[#555555]">
                      Showing results{" "}
                    </span>
                                        <span className="text-[#555555]">1 - 6</span>
                                        <span className="font-light text-[#555555]">
                      {" "}
                                            of total{" "}
                    </span>
                                        <span className="text-[#555555]">25</span>
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex items-center">
                    <span className="font-light text-pro-themecomemperor text-lg leading-[30px]">
                      Sort By:
                    </span>
                                        <div className="relative px-[15px] mr-[30px]">
                                            <Select>
                                                <SelectTrigger
                                                    className="border-none shadow-none font-medium text-[#222222] text-lg">
                                                    <SelectValue placeholder="Price: Low to High"/>
                                                </SelectTrigger>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="flex border-l border-[#dfe1ee]">
                                        <Button
                                            variant="ghost"
                                            className="w-[70px] h-[70px] rounded-none"
                                        >
                                            <LayoutGridIcon className="w-[26px] h-[26px]"/>
                                        </Button>
                                        <Button
                                            variant="default"
                                            className="w-[70px] h-[70px] rounded-none bg-[#222222]"
                                        >
                                            <LayoutListIcon className="w-6 h-6"/>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Equipment Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                                {equipmentCards.map((card, index) => (
                                    <Card
                                        key={index}
                                        className="bg-bananistyle shadow-[0px_0px_20px_9px_#0000000d] border-none rounded-none"
                                    >
                                        <div
                                            className="h-[283.75px] bg-cover bg-center"
                                            style={{backgroundImage: `url(${card.image})`}}
                                        />

                                        <CardContent className="p-[30px]">
                                            <h3 className="font-bold text-[#222222] text-2xl leading-[31.9px]">
                                                <a
                                                    href="https://pro-theme.com/html/suprek/07_equipment-detail.html"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {card.title}
                                                </a>
                                            </h3>

                                            <div className="flex items-center mt-3">
                                                <a
                                                    href="https://pro-theme.com/html/suprek/03_equipment-categories.html"
                                                    className="text-pro-themecomcorn text-sm font-normal"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View Catelogue
                                                </a>
                                                <Separator
                                                    orientation="vertical"
                                                    className="mx-3 h-4 bg-[#dfdfdf]"
                                                />
                                                <a
                                                    href="https://pro-theme.com/html/suprek/04_equipment-categories.html"
                                                    className="text-pro-themecomcorn text-sm font-normal"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Print Quotation
                                                </a>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2 mt-6">
                                                <div className="flex items-start">
                                                    <Badge
                                                        className="w-1.5 h-1.5 rounded-[3px] p-0 mr-1.5 mt-1.5 bg-pro-themecomcorn"/>
                                                    <span
                                                        className="font-pro-theme-com-semantic-item text-[#222222] text-[length:var(--pro-theme-com-semantic-item-font-size)] leading-[var(--pro-theme-com-semantic-item-line-height)]">
                            Brand: {card.brand}
                          </span>
                                                </div>
                                                <div className="flex items-start">
                                                    <Badge
                                                        className="w-1.5 h-1.5 rounded-[3px] p-0 mr-1.5 mt-1.5 bg-pro-themecomcorn"/>
                                                    <span
                                                        className="font-pro-theme-com-semantic-item text-[#222222] text-[length:var(--pro-theme-com-semantic-item-font-size)] leading-[var(--pro-theme-com-semantic-item-line-height)]">
                            Model: {card.model}
                          </span>
                                                </div>
                                                <div className="flex items-start">
                                                    <Badge
                                                        className="w-1.5 h-1.5 rounded-[3px] p-0 mr-1.5 mt-1.5 bg-pro-themecomcorn"/>
                                                    <span
                                                        className="font-pro-theme-com-semantic-item text-[#222222] text-[length:var(--pro-theme-com-semantic-item-font-size)] leading-[var(--pro-theme-com-semantic-item-line-height)]">
                            MFG Year: {card.mfgYear}
                          </span>
                                                </div>
                                                <div className="flex items-start">
                                                    <Badge
                                                        className="w-1.5 h-1.5 rounded-[3px] p-0 mr-1.5 mt-1.5 bg-pro-themecomcorn"/>
                                                    <span
                                                        className="font-pro-theme-com-semantic-item text-[#222222] text-[length:var(--pro-theme-com-semantic-item-font-size)] leading-[var(--pro-theme-com-semantic-item-line-height)]">
                            Operating Weight: {card.operatingWeight}
                          </span>
                                                </div>
                                            </div>

                                            <Separator className="my-6 bg-[#eeeeee]"/>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-semibold text-[#222222] text-sm leading-[15.4px]">
                                                        Total Rental Price
                                                    </p>
                                                    <p className="font-pro-theme-com-semantic-small text-[#222222] text-[length:var(--pro-theme-com-semantic-small-font-size)] leading-[var(--pro-theme-com-semantic-small-line-height)]">
                                                        (Incl. Taxes)
                                                    </p>
                                                </div>
                                                <div className="flex items-end">
                          <span className="font-bold text-[#222222] text-[34px] leading-[34px]">
                            {card.price}
                          </span>
                                                    <span
                                                        className="font-pro-theme-com-semantic-item-strikethrough text-pro-themecommine-shaft text-[length:var(--pro-theme-com-semantic-item-strikethrough-font-size)] leading-[var(--pro-theme-com-semantic-item-strikethrough-line-height)] line-through ml-1">
                            {card.originalPrice}
                          </span>
                                                </div>
                                            </div>

                          {/*                  <div className="flex items-center justify-between mt-6">*/}
                          {/*                      <div*/}
                          {/*                          className="flex items-center pl-[25px] bg-[url(/item-11.png)] bg-cover bg-center">*/}
                          {/*<span className="font-medium text-[#222222] text-sm leading-[21px]">*/}
                          {/*  {card.dayRate}*/}
                          {/*</span>*/}
                          {/*                      </div>*/}
                          {/*                      <div*/}
                          {/*                          className="flex items-center pl-[25px] bg-[url(/item-11.png)] bg-cover bg-center">*/}
                          {/*<span className="font-medium text-[#222222] text-sm leading-[21px]">*/}
                          {/*  {card.weekRate}*/}
                          {/*</span>*/}
                          {/*                      </div>*/}
                          {/*                      <div*/}
                          {/*                          className="flex items-center pl-[25px] bg-[url(/item-11.png)] bg-cover bg-center">*/}
                          {/*<span className="font-medium text-[#222222] text-sm leading-[21px]">*/}
                          {/*  {card.monthRate}*/}
                          {/*</span>*/}
                          {/*                      </div>*/}
                          {/*                  </div>*/}
                                        </CardContent>

                                        <CardFooter className="p-0">
                                            <Button
                                                className="w-full h-[55px] rounded-sm border border-solid border-[#222222] bg-transparent text-[#222222] hover:bg-[#222222] hover:text-white">
                        <span
                            className="font-pro-theme-com-barlow-bold-upper text-[length:var(--pro-theme-com-barlow-bold-upper-font-size)] leading-[var(--pro-theme-com-barlow-bold-upper-line-height)]">
                          BOOK NOW
                        </span>
                                                <ArrowRightIcon className="w-5 h-5 ml-2"/>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-center mt-2.5 w-full">
                                <Button
                                    className="w-[55px] h-[55px] bg-[#222222] rounded-sm border border-solid border-[#eeeeee]">
                  <span
                      className="font-pro-theme-com-semantic-item-upper text-bananistyle text-[length:var(--pro-theme-com-semantic-item-upper-font-size)] leading-[var(--pro-theme-com-semantic-item-upper-line-height)]">
                    1
                  </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-[55px] h-[55px] ml-2.5 rounded-sm border border-solid border-[#eeeeee]"
                                >
                                    <a
                                        href="https://pro-theme.com/html/suprek/06_all-equipments-grid.html"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="font-pro-theme-com-barlow-medium-upper text-[length:var(--pro-theme-com-barlow-medium-upper-font-size)] leading-[var(--pro-theme-com-barlow-medium-upper-line-height)]"
                                    >
                                        2
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-[55px] h-[55px] ml-2.5 rounded-sm border border-solid border-[#eeeeee]"
                                >
                                    <a
                                        href="https://pro-theme.com/html/suprek/06_all-equipments-grid.html"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="font-pro-theme-com-barlow-medium-upper text-[length:var(--pro-theme-com-barlow-medium-upper-font-size)] leading-[var(--pro-theme-com-barlow-medium-upper-line-height)]"
                                    >
                                        3
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
