'use client'
import {Button} from '@/app/components/ui/button';
import {Card, CardHeader, CardTitle, CardFooter, CardContent, CardDescription} from '@/app/components/ui/card';
import React, {useState} from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
// import * as Separator from "@radix-ui/react-separator";
import * as Progress from "@radix-ui/react-progress";
import {Factory, Tag, Calendar, Weight, Images, TramFront, SquareM} from "lucide-react";
import {Wrench, Truck, Banknote, CreditCard} from "lucide-react";

import {Separator} from "@radix-ui/react-separator";

import {Badge} from "@/app/components/ui/badge";
import {TabsList, TabsTrigger, Tabs, TabsContent} from "@/app/components/ui/tabs";
import {Table, TableCell, TableHead, TableBody, TableRow, TableHeader} from "@/app/components/ui/details/table";

const Page = () => {
    const [, setActiveTab] = useState("overview");

    // Mock data for single machine detail
    const machine: {
        id: number;
        title: string;
        image: string;
        brand: string;
        model: string;
        mfgYear: string;
        operatingWeight: string;
        features: string[];
        price: string;
        originalPrice: string;
        specifications: { key: string; value: string }[];
        maintences: { cost: string; date: string; description: string }[];
        recentPayment: { amount: string; date: string; method: string }[];
        transports: { cost: string; destination: string; origin: string }[];
        is_sell: boolean;
    } = {
        id: 1,
        title: "Caterpillar 320 Excavator",
        image:
            "https://readdy.ai/api/search-image?query=A%20professional%20high-quality%20photograph%20of%20a%20Caterpillar%20320%20Excavator%2C%20yellow%20heavy%20construction%20machinery%20with%20hydraulic%20arm%20and%20bucket%2C%20positioned%20on%20a%20clean%20construction%20site%20with%20neutral%20background%2C%20showing%20the%20machine%20from%20a%203%2F4%20angle%20to%20display%20both%20its%20side%20and%20front%20features&width=800&height=500&seq=1&orientation=landscape",
        brand: "Caterpillar",
        model: "320 GX",
        mfgYear: "2022",
        operatingWeight: "22,700 kg",
        features: [
            "Smart Boom Mode",
            "Power Mode Selection",
            "Automatic Engine Speed Control",
            "Electric Fuel Pumping System",
            "Advanced Hydraulic System",
            "Reinforced Undercarriage",
            "Premium Cab with ROPS",
            "360° Visibility Camera System",
        ],
        price: "$185,000",
        originalPrice: "$210,000",
        specifications: [
            {key: "Engine", value: "Cat C4.4 Diesel Engine"},
            {key: "Net Power", value: "121 kW (162 hp)"},
            {key: "Max Dig Depth", value: "6.72 m"},
            {key: "Max Reach at Ground Level", value: "9.87 m"},
            {key: "Bucket Capacity", value: "0.9-1.3 m³"},
            {key: "Fuel Tank Capacity", value: "345 L"},
            {key: "Hydraulic System", value: "Advanced electrohydraulic system"},
            {key: "Track Length", value: "4.45 m"},
            {key: "Ground Clearance", value: "470 mm"},
            {key: "Swing Speed", value: "11.5 rpm"},
        ],
        maintences: [
            {
                cost: "$2,500",
                date: "2025-03-15",
                description: "Full hydraulic system maintenance and fluid replacement",
            },
            {
                cost: "$1,800",
                date: "2025-01-20",
                description: "Engine overhaul and air filter replacement",
            },
            {
                cost: "$950",
                date: "2024-11-05",
                description: "Track tension adjustment and undercarriage cleaning",
            },
            {
                cost: "$1,200",
                date: "2024-09-12",
                description: "Electrical system diagnostics and repair",
            },
            {
                cost: "$750",
                date: "2024-07-25",
                description: "Regular service and oil change",
            },
        ],
        recentPayment: [
            {amount: "$15,000", date: "2025-04-01", method: "Bank Transfer"},
            {amount: "$20,000", date: "2025-03-01", method: "Credit Card"},
            {amount: "$15,000", date: "2025-02-01", method: "Bank Transfer"},
            {amount: "$20,000", date: "2025-01-01", method: "Wire Transfer"},
            {amount: "$15,000", date: "2024-12-01", method: "Bank Transfer"},
        ],
        transports: [
            {cost: "$3,200", origin: "Chicago, IL", destination: "Detroit, MI"},
            {cost: "$4,500", origin: "Detroit, MI", destination: "Columbus, OH"},
            {cost: "$2,800", origin: "Columbus, OH", destination: "Pittsburgh, PA"},
            {cost: "$5,100", origin: "Pittsburgh, PA", destination: "New York, NY"},
        ],
        is_sell: true,
    };

    // Calculate total maintenance cost
    const totalMaintenanceCost = machine.maintences.reduce(
        (total, item) =>
            total + parseFloat(item.cost.replace("$", "").replace(",", "")),
        0,
    );
    // Calculate total transport cost
    const totalTransportCost = machine.transports.reduce(
        (total, item) =>
            total + parseFloat(item.cost.replace("$", "").replace(",", "")),
        0,
    );
    // Calculate total payments
    const totalPayments = machine.recentPayment.reduce(
        (total, item) =>
            total + parseFloat(item.amount.replace("$", "").replace(",", "")),
        0,
    );
    // Calculate price discount percentage
    const originalPrice = parseFloat(
        machine.originalPrice.replace("$", "").replace(",", ""),
    );
    const currentPrice = parseFloat(
        machine.price.replace("$", "").replace(",", ""),
    );
    const discountPercentage = Math.round(
        ((originalPrice - currentPrice) / originalPrice) * 100,
    );
    return (
        <>
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-tractor text-blue-600 text-2xl"></i>
                        <h1 className="text-xl font-bold text-gray-800">Heavy Machinery Management</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="outline" className="!rounded-button whitespace-nowrap">
                            <i className="fas fa-download mr-2"></i>
                            Export Data
                        </Button>
                        <Button variant="default" className="!rounded-button whitespace-nowrap">
                            <i className="fas fa-edit mr-2"></i>
                            Edit Machine
                        </Button>
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-6 py-8">
                {/* Machine Header */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center mb-2">
                                    <Badge
                                        variant={machine.is_sell ? "default" : "destructive"}
                                        className="mr-2"
                                    >
                                        {machine.is_sell ? "Available for Sale" : "Not for Sale"}
                                    </Badge>
                                    <span className="text-sm text-gray-500">
                    ID: {machine.id}
                  </span>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    {machine.title}
                                </h1>
                                <div className="flex items-center mb-4">
                  <span className="text-xl font-semibold text-blue-600 mr-3">
                    {machine.price}
                  </span>
                                    <span className="text-lg text-gray-500 line-through mr-3">
                    {machine.originalPrice}
                  </span>
                                    <Badge
                                        variant="outline"
                                        className="bg-green-50 text-green-700 border-green-200"
                                    >
                                        {discountPercentage}% Off
                                    </Badge>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center">
                                        <Factory className="text-gray-400 mr-2 h-5 w-5"/>
                                        <div>
                                            <p className="text-sm text-gray-500">Brand</p>
                                            <p className="font-medium">{machine.brand}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Tag className="text-gray-400 mr-2 h-5 w-5"/>
                                        <div>
                                            <p className="text-sm text-gray-500">Model</p>
                                            <p className="font-medium">{machine.model}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="text-gray-400 mr-2 h-5 w-5"/>
                                        <div>
                                            <p className="text-sm text-gray-500">Year</p>
                                            <p className="font-medium">{machine.mfgYear}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Weight className="text-gray-400 mr-2 h-5 w-5"/>
                                        <div>
                                            <p className="text-sm text-gray-500">Operating Weight</p>
                                            <p className="font-medium">{machine.operatingWeight}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {machine.features.map((feature, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="bg-gray-100 text-gray-700"
                                    >
                                        {feature}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden">
                            <img
                                src={machine.image}
                                alt={machine.title}
                                className="w-full h-full object-cover object-top"
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <div className="flex justify-between items-center">
                                    <div className="text-white">
                                        <p className="font-bold">
                                            {machine.brand} {machine.model}
                                        </p>
                                        <p className="text-sm opacity-90">{machine.mfgYear}</p>
                                    </div>
                                    <Button
                                        variant="default"
                                        className="!rounded-button whitespace-nowrap"
                                    >
                                        <Images className="mr-2 h-4 w-4"/>
                                        View Gallery
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Financial Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className={'bg-white'}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                                <Wrench className="text-blue-500 mr-2 h-5 w-5"/>
                                Maintenance Costs
                            </CardTitle>
                            <CardDescription>Total cost of all maintenance</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">
                                        ${totalMaintenanceCost.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {machine.maintences.length} records
                                    </p>
                                </div>
                                <div className="text-right">
                                    <Badge
                                        variant="outline"
                                        className="bg-blue-50 text-blue-700 border-blue-200"
                                    >
                                        <Wrench className="mr-1 h-3 w-3"/>
                                        Maintenance
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={'bg-white'}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                                <Truck className="text-amber-500 mr-2 h-5 w-5"/>
                                Transport Costs
                            </CardTitle>
                            <CardDescription>Total cost of all transports</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">
                                        ${totalTransportCost.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {machine.transports.length} records
                                    </p>
                                </div>
                                <div className="text-right">
                                    <Badge
                                        variant="outline"
                                        className="bg-amber-50 text-amber-700 border-amber-200"
                                    >
                                        <TramFront className="mr-1 h-3 w-3"/>
                                        Transport
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={'bg-white'}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                                <Banknote className="text-green-500 mr-2 h-5 w-5"/>
                                Total Payments
                            </CardTitle>
                            <CardDescription>Sum of all payments made</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">
                                        ${totalPayments.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {machine.recentPayment.length} payments
                                    </p>
                                </div>
                                <div className="text-right">
                                    <Badge
                                        variant="outline"
                                        className="bg-green-50 text-green-700 border-green-200"
                                    >
                                        <CreditCard className="mr-1 h-3 w-3"/>
                                        Payments
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* Tabs Content */}
                <Tabs
                    defaultValue="overview"
                    className="w-full "
                    onValueChange={setActiveTab}
                >
                    <TabsList className="grid grid-cols-4 mb-8 bg-white">
                        <TabsTrigger
                            value="overview"
                            className="flex items-center justify-center py-2 px-4 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-600 hover:bg-gray-100"
                                                >
                            <i className="fas fa-info-circle mr-2"></i>
                            Overview
                        </TabsTrigger>
                        <TabsTrigger
                            value="specifications"
                            className="flex items-center justify-center py-2 px-4 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-600 hover:bg-gray-100"
                        >
                            <i className="fas fa-clipboard-list mr-2"></i>
                            Specifications
                        </TabsTrigger>
                        <TabsTrigger
                            value="maintenance"
                            className="flex items-center justify-center py-2 px-4 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-600 hover:bg-gray-100"
                        >
                            <i className="fas fa-tools mr-2"></i>
                            Maintenance
                        </TabsTrigger>
                        <TabsTrigger
                            value="financial"
                            className="flex items-center justify-center py-2 px-4 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-600 hover:bg-gray-100"
                        >
                            <i className="fas fa-chart-line mr-2"></i>
                            Financial
                        </TabsTrigger>
                    </TabsList>
                    {/* Overview Tab */}
                    <TabsContent value="overview" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="md:col-span-2 bg-white">
                                <CardHeader>
                                    <CardTitle>Machine Details</CardTitle>
                                    <CardDescription>
                                        Key information about this {machine.brand} {machine.model}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {machine.specifications.slice(0, 6).map((spec, index) => (
                                            <div key={index} className="flex items-start">
                                                <div
                                                    className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                                                    <i
                                                        className={`fas fa-${
                                                            spec.key === "Engine"
                                                                ? "engine"
                                                                : spec.key.includes("Power")
                                                                    ? "bolt"
                                                                    : spec.key.includes("Depth")
                                                                        ? "ruler-vertical"
                                                                        : spec.key.includes("Reach")
                                                                            ? "ruler-horizontal"
                                                                            : spec.key.includes("Capacity")
                                                                                ? "gas-pump"
                                                                                : "cogs"
                                                        } text-blue-600 text-sm`}
                                                    ></i>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-700">
                                                        {spec.key}
                                                    </p>
                                                    <p className="text-gray-600">{spec.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        variant="outline"
                                        className="w-full !rounded-button whitespace-nowrap"
                                        onClick={() => setActiveTab("specifications")}
                                    >
                                        View All Specifications
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className={'bg-white'}>
                                <CardHeader className={''}>
                                    <CardTitle>Transport History</CardTitle>
                                    <CardDescription>Recent transport locations</CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="px-6">
                                        {machine.transports.map((transport, index) => (
                                            <div
                                                key={index}
                                                className={`py-3 ${index !== machine.transports.length - 1 ? "border-b border-gray-100" : ""}`}
                                            >
                                                <div className="flex items-center justify-between mb-1">
                                                    <div className="flex items-center">
                                                        <i className="fas fa-map-marker-alt text-red-500 mr-2"></i>
                                                        <span className="font-medium">
                              {transport.destination}
                            </span>
                                                    </div>
                                                    <Badge variant="outline">${transport.cost}</Badge>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <i className="fas fa-arrow-right text-gray-400 mr-2"></i>
                                                    <span>From {transport.origin}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Total Distance</p>
                                        <p className="font-medium">4 Locations</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Total Cost</p>
                                        <p className="font-medium">
                                            ${totalTransportCost.toLocaleString()}
                                        </p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        <Card className={'bg-white'}>
                            <CardHeader>
                                <CardTitle>Key Features</CardTitle>
                                <CardDescription>
                                    Important capabilities and features of this machine
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    {machine.features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <div
                                                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                                                <i
                                                    className={`fas fa-${
                                                        feature.includes("Boom")
                                                            ? "arrow-up"
                                                            : feature.includes("Power")
                                                                ? "bolt"
                                                                : feature.includes("Engine")
                                                                    ? "tachometer-alt"
                                                                    : feature.includes("Fuel")
                                                                        ? "gas-pump"
                                                                        : feature.includes("Hydraulic")
                                                                            ? "water"
                                                                            : feature.includes("Undercarriage")
                                                                                ? "truck-monster"
                                                                                : feature.includes("Cab")
                                                                                    ? "hard-hat"
                                                                                    : feature.includes("Camera")
                                                                                        ? "video"
                                                                                        : "cog"
                                                    } text-blue-500`}
                                                ></i>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800">{feature}</p>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {feature.includes("Boom")
                                                        ? "Enhanced control and efficiency"
                                                        : feature.includes("Power")
                                                            ? "Optimized power management"
                                                            : feature.includes("Engine")
                                                                ? "Automatic speed optimization"
                                                                : feature.includes("Fuel")
                                                                    ? "Efficient fuel delivery system"
                                                                    : feature.includes("Hydraulic")
                                                                        ? "Precise movement control"
                                                                        : feature.includes("Undercarriage")
                                                                            ? "Improved stability and durability"
                                                                            : feature.includes("Cab")
                                                                                ? "Operator safety and comfort"
                                                                                : feature.includes("Camera")
                                                                                    ? "Enhanced operational safety"
                                                                                    : "Advanced functionality"}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    {/* Specifications Tab */}
                    <TabsContent value="specifications">
                        <Card className={'bg-white'}>
                            <CardHeader>
                                <CardTitle>Technical Specifications</CardTitle>
                                <CardDescription>
                                    Detailed technical information about the {machine.brand}{" "}
                                    {machine.model}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {machine.specifications.map((spec, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center p-4 bg-pro-themecomgray-50 rounded-lg"
                                        >
                                            <div
                                                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">

                                                <SquareM className="w-6 h-6 text-blue-500" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500">{spec.key}</p>
                                                <p className="font-medium text-gray-900">
                                                    {spec.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    variant="outline"
                                    className="!rounded-button whitespace-nowrap"
                                >
                                    <i className="fas fa-file-pdf mr-2"></i>
                                    Download Full Specifications
                                </Button>
                            </CardFooter>
                        </Card>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Performance Metrics</CardTitle>
                                    <CardDescription>Key performance indicators</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Fuel Efficiency
                      </span>
                                            <span className="text-sm text-gray-500">85%</span>
                                        </div>
                                        <Progress.Root
                                            value={85} className="h-2"/>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium">Power Output</span>
                                            <span className="text-sm text-gray-500">92%</span>
                                        </div>
                                        <Progress.Root
                                            value={92} className="h-2"/>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Hydraulic Performance
                      </span>
                                            <span className="text-sm text-gray-500">78%</span>
                                        </div>
                                        <Progress.Root value={78} className="h-2"/>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Operator Comfort
                      </span>
                                            <span className="text-sm text-gray-500">88%</span>
                                        </div>
                                        <Progress.Root
                                            value={88} className="h-2"/>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Dimensions</CardTitle>
                                    <CardDescription>Physical measurements</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <i className="fas fa-arrows-alt-h text-gray-400 mr-3"></i>
                                                <span>Overall Length</span>
                                            </div>
                                            <span className="font-medium">9.53 m</span>
                                        </div>
                                        <Separator/>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <i className="fas fa-arrows-alt-v text-gray-400 mr-3"></i>
                                                <span>Overall Height</span>
                                            </div>
                                            <span className="font-medium">3.18 m</span>
                                        </div>
                                        <Separator/>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <i className="fas fa-expand-arrows-alt text-gray-400 mr-3"></i>
                                                <span>Width</span>
                                            </div>
                                            <span className="font-medium">2.98 m</span>
                                        </div>
                                        <Separator/>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <i className="fas fa-ruler-vertical text-gray-400 mr-3"></i>
                                                <span>Tail Swing Radius</span>
                                            </div>
                                            <span className="font-medium">2.83 m</span>
                                        </div>
                                        <Separator/>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <i className="fas fa-ruler-combined text-gray-400 mr-3"></i>
                                                <span>Track Width</span>
                                            </div>
                                            <span className="font-medium">600 mm</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    {/* Maintenance Tab */}
                    <TabsContent value="maintenance">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="md:col-span-2 bg-gray-50">
                                <CardHeader>
                                    <CardTitle>Maintenance History</CardTitle>
                                    <CardDescription>
                                        Record of all maintenance activities
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]" id="maintenance-chart"></div>
                                </CardContent>
                            </Card>
                            <Card className={'bg-gray-50'}>
                                <CardHeader>
                                    <CardTitle>Maintenance Summary</CardTitle>
                                    <CardDescription>
                                        Overview of maintenance costs
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span>Total Cost</span>
                                        <span className="font-bold">
                      ${totalMaintenanceCost.toLocaleString()}
                    </span>
                                    </div>
                                    <Separator/>
                                    <div className="flex justify-between items-center">
                                        <span>Average Cost</span>
                                        <span className="font-medium">
                      $
                                            {(
                                                totalMaintenanceCost / machine.maintences.length
                                            ).toFixed(2)}
                    </span>
                                    </div>
                                    <Separator/>
                                    <div className="flex justify-between items-center">
                                        <span>Records</span>
                                        <span className="font-medium">
                      {machine.maintences.length}
                    </span>
                                    </div>
                                    <Separator/>
                                    <div className="flex justify-between items-center">
                                        <span>Last Service</span>
                                        <span className="font-medium">
                      {new Date(
                          machine.maintences[0].date,
                      ).toLocaleDateString()}
                    </span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        variant="default"
                                        className="w-full !rounded-button whitespace-nowrap"
                                    >
                                        <i className="fas fa-plus mr-2"></i>
                                        Schedule Maintenance
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                        <Card className="mt-6">
                            <CardHeader>
                                <CardTitle>Detailed Maintenance Records</CardTitle>
                                <CardDescription>
                                    Complete history of all maintenance activities
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Description</TableHead>
                                            <TableHead>Cost</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {machine.maintences.map((maintenance, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium">
                                                    {new Date(maintenance.date).toLocaleDateString()}
                                                </TableCell>
                                                <TableCell>{maintenance.description}</TableCell>
                                                <TableCell>{maintenance.cost}</TableCell>
                                                <TableCell className="text-right">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0 !rounded-button whitespace-nowrap"
                                                    >
                                                        <i className="fas fa-eye text-gray-500"></i>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0 !rounded-button whitespace-nowrap"
                                                    >
                                                        <i className="fas fa-edit text-gray-500"></i>
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    variant="outline"
                                    className="!rounded-button whitespace-nowrap"
                                >
                                    <i className="fas fa-file-export mr-2"></i>
                                    Export Records
                                </Button>
                                <Button
                                    variant="default"
                                    className="!rounded-button whitespace-nowrap"
                                >
                                    <i className="fas fa-plus mr-2"></i>
                                    Add Record
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    {/* Financial Tab */}
                    <TabsContent value="financial">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="md:col-span-2 bg-gray-50">
                                <CardHeader>
                                    <CardTitle>Payment History</CardTitle>
                                    <CardDescription>Record of all payments</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]" id="payment-chart"></div>
                                </CardContent>
                            </Card>
                            <Card className={'bg-gray-50'}>
                                <CardHeader>
                                    <CardTitle>Financial Summary</CardTitle>
                                    <CardDescription>Overview of all costs</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span>Purchase Price</span>
                                        <span className="font-bold">{machine.price}</span>
                                    </div>
                                    <Separator/>
                                    <div className="flex justify-between items-center">
                                        <span>Total Payments</span>
                                        <span className="font-medium">
                      ${totalPayments.toLocaleString()}
                    </span>
                                    </div>
                                    <Separator/>
                                    <div className="flex justify-between items-center">
                                        <span>Maintenance Costs</span>
                                        <span className="font-medium">
                      ${totalMaintenanceCost.toLocaleString()}
                    </span>
                                    </div>
                                    <Separator/>
                                    <div className="flex justify-between items-center">
                                        <span>Transport Costs</span>
                                        <span className="font-medium">
                      ${totalTransportCost.toLocaleString()}
                    </span>
                                    </div>
                                    <Separator/>
                                    <div className="flex justify-between items-center">
                                        <span>Total Cost of Ownership</span>
                                        <span className="font-bold text-blue-600">
                      $
                                            {(
                                                currentPrice +
                                                totalMaintenanceCost +
                                                totalTransportCost
                                            ).toLocaleString()}
                    </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <Card className={'bg-gray-50'}>
                                <CardHeader>
                                    <CardTitle>Payment Records</CardTitle>
                                    <CardDescription>Detailed payment history</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea.Root className="h-[300px] pr-4">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead>Amount</TableHead>
                                                    <TableHead>Method</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {machine.recentPayment.map((payment, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell className="font-medium">
                                                            {new Date(payment.date).toLocaleDateString()}
                                                        </TableCell>
                                                        <TableCell>{payment.amount}</TableCell>
                                                        <TableCell>
                                                            <Badge
                                                                variant="outline"
                                                                className={
                                                                    payment.method.includes("Bank")
                                                                        ? "bg-blue-50 text-blue-700 border-blue-200"
                                                                        : payment.method.includes("Credit")
                                                                            ? "bg-purple-50 text-purple-700 border-purple-200"
                                                                            : "bg-green-50 text-green-700 border-green-200"
                                                                }
                                                            >
                                                                <i
                                                                    className={`fas fa-${
                                                                        payment.method.includes("Bank")
                                                                            ? "university"
                                                                            : payment.method.includes("Credit")
                                                                                ? "credit-card"
                                                                                : "money-check-alt"
                                                                    } mr-1`}
                                                                ></i>
                                                                {payment.method}
                                                            </Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </ScrollArea.Root>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        variant="outline"
                                        className="w-full !rounded-button whitespace-nowrap"
                                    >
                                        <i className="fas fa-file-invoice-dollar mr-2"></i>
                                        View Payment Receipts
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className={'bg-gray-50'}>
                                <CardHeader>
                                    <CardTitle>Transport Records</CardTitle>
                                    <CardDescription>Detailed transport history</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea.Root className="h-[300px] pr-4">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Origin</TableHead>
                                                    <TableHead>Destination</TableHead>
                                                    <TableHead>Cost</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {machine.transports.map((transport, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell className="font-medium">
                                                            {transport.origin}
                                                        </TableCell>
                                                        <TableCell>{transport.destination}</TableCell>
                                                        <TableCell>{transport.cost}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </ScrollArea.Root>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        variant="outline"
                                        className="w-full !rounded-button whitespace-nowrap"
                                    >
                                        <i className="fas fa-route mr-2"></i>
                                        View Transport Routes
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </>
    );
};

export default Page;