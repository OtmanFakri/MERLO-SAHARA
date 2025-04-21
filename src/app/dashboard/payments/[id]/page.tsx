'use client'
import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import {Button} from "@/app/components/ui/button";
import {Badge} from "@/app/components/ui/badge";
import {TabsList, TabsTrigger, Tabs, TabsContent} from "@/app/components/ui/tabs";
import {Table, TableCell, TableHead, TableBody, TableRow, TableHeader} from "@/app/components/ui/details/table";
import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {format} from "date-fns";
import { Download, Share2, Printer, AlertCircle } from 'lucide-react';
const Page = () => {
    // Mock data for the payment details page
    const paymentData = {
        id: "PAY-2025-04-20-001",
        amount: 12500.0,
        date: new Date("2025-04-15T14:30:00"),
        method: "Credit Card",
        status: "Completed",
        reference: "REF-2025-04-15-CC-8976",
    };

    const clientData = {
        id: "CLIENT-001",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main Street, New York, NY 10001",
        company: "Doe Construction LLC",
        status: "Active",
        createdAt: new Date("2023-08-10T09:15:00"),
    };

    const machineData = {
        id: "MACHINE-001",
        title: "Heavy Duty Excavator XL-9000",
        image:
            "https://readdy.ai/api/search-image?query=Professional%20high-end%20modern%20excavator%20heavy%20machinery%20with%20sleek%20design%2C%20photographed%20on%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20high%20resolution%2C%20detailed%2C%20photorealistic%2C%20industrial%20equipment%2C%20construction%20vehicle&width=600&height=400&seq=1&orientation=landscape",
        brand: "CaterpillarPro",
        model: "XL-9000",
        mfgYear: 2024,
        operatingWeight: "25 tons",
        features: [
            "GPS Navigation",
            "Climate Control",
            "Advanced Hydraulics",
            "Fuel Efficiency System",
        ],
        price: 125000.0,
        originalPrice: 135000.0,
        status: "Available",
        location: "New York Warehouse",
        is_sell: true,
    };

    const specifications = [
        { key: "Engine Type", value: "Diesel Turbo V8" },
        { key: "Horsepower", value: "420 HP" },
        { key: "Fuel Capacity", value: "150 gallons" },
        { key: "Max Digging Depth", value: "25 feet" },
        { key: "Hydraulic System", value: "Advanced Dual-Pump" },
        {
            key: "Cabin Features",
            value: "Air Conditioning, Heated Seats, LCD Display",
        },
        { key: "Dimensions", value: "Length: 25ft, Width: 10ft, Height: 12ft" },
        { key: "Warranty", value: "3 Years or 3000 Hours" },
    ];

    const maintenances = [
        {
            cost: 1200.0,
            date: new Date("2025-03-10"),
            description: "Regular maintenance and oil change",
        },
        {
            cost: 2500.0,
            date: new Date("2025-02-05"),
            description: "Hydraulic system repair and calibration",
        },
        {
            cost: 800.0,
            date: new Date("2025-01-15"),
            description: "Filter replacement and inspection",
        },
    ];

    const recentPayments = [
        { amount: 12500.0, date: new Date("2025-04-15"), method: "Credit Card" },
        { amount: 2500.0, date: new Date("2025-02-05"), method: "Bank Transfer" },
        { amount: 1200.0, date: new Date("2025-03-10"), method: "Check" },
    ];

    const transports = [
        {
            cost: 1500.0,
            origin: "Factory",
            destination: "New York Warehouse",
            date: new Date("2025-01-05"),
        },
        {
            cost: 800.0,
            origin: "New York Warehouse",
            destination: "Client Site",
            date: new Date("2025-04-16"),
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-green-100 text-green-800";
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            case "failed":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(amount);
    };
    return (
        <div  className="min-h-screen">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Payment and Client Info */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Payment Information Card */}
                        <Card className="overflow-hidden border-none shadow-lg">
                            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                                <CardTitle className="text-xl">Payment Information</CardTitle>
                                <CardDescription className="text-blue-100">
                                    {format(paymentData.date, "MMMM dd, yyyy")} at{" "}
                                    {format(paymentData.date, "h:mm a")}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6 pb-2">
                                <div className="text-center mb-6">
                                    <p className="text-sm text-gray-500 mb-1">Payment Amount</p>
                                    <h2 className="text-4xl font-bold text-gray-900">
                                        {formatCurrency(paymentData.amount)}
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Payment Method</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-credit-card text-blue-600 mr-2"></i>
                                            <span className="font-medium">{paymentData.method}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Reference Number</span>
                                        <span className="font-medium text-gray-900">
                      {paymentData.reference}
                    </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Payment ID</span>
                                        <span className="font-medium text-gray-900">
                      {paymentData.id}
                    </span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="bg-gray-50 px-6 py-4">
                                <div className="w-full flex justify-between items-center">
                                    <Badge
                                        className={`${getStatusColor(paymentData.status)} px-3 py-1`}
                                    >
                                        {paymentData.status}
                                    </Badge>
                                    <span className="text-sm text-gray-500">
                    Processed on {format(paymentData.date, "MMM dd, yyyy")}
                  </span>
                                </div>
                            </CardFooter>
                        </Card>

                        {/* Client Information Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Client Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage
                                            src=""
                                            alt={`${clientData.firstName} ${clientData.lastName}`}
                                        />
                                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
                                            {clientData.firstName.charAt(0)}
                                            {clientData.lastName.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {clientData.firstName} {clientData.lastName}
                                        </h3>
                                        {clientData.company && (
                                            <p className="text-gray-500">{clientData.company}</p>
                                        )}
                                        <div className="flex items-center mt-1">
                                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                                                {clientData.status}
                                            </Badge>
                                            <span className="text-xs text-gray-500 ml-2">
                        Client since {format(clientData.createdAt, "MMM yyyy")}
                      </span>
                                        </div>
                                    </div>
                                </div>

                                <Separator/>

                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <i className="fas fa-envelope text-gray-400 mt-1 w-6"></i>
                                        <div className="ml-2">
                                            <p className="text-sm text-gray-500">Email</p>
                                            <p className="font-medium">{clientData.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <i className="fas fa-phone text-gray-400 mt-1 w-6"></i>
                                        <div className="ml-2">
                                            <p className="text-sm text-gray-500">Phone</p>
                                            <p className="font-medium">{clientData.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <i className="fas fa-map-marker-alt text-gray-400 mt-1 w-6"></i>
                                        <div className="ml-2">
                                            <p className="text-sm text-gray-500">Address</p>
                                            <p className="font-medium">{clientData.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Machine Details and Tabs */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Machine Details Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Machine Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg overflow-hidden bg-gray-100 aspect-video">
                                            <img
                                                src={machineData.image}
                                                alt={machineData.title}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {machineData.title}
                                        </h3>
                                        <p className="text-gray-500 mb-4">
                                            Model: {machineData.model}
                                        </p>

                                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Brand</p>
                                                <p className="font-medium">{machineData.brand}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Manufacturing Year
                                                </p>
                                                <p className="font-medium">{machineData.mfgYear}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Operating Weight
                                                </p>
                                                <p className="font-medium">
                                                    {machineData.operatingWeight}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Status</p>
                                                <Badge className="bg-green-100 text-green-800">
                                                    {machineData.status}
                                                </Badge>
                                            </div>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-sm text-gray-500">Price</p>
                                                <div className="flex items-baseline">
                                                    <p className="text-2xl font-bold text-gray-900">
                                                        {formatCurrency(machineData.price)}
                                                    </p>
                                                    {machineData.originalPrice > machineData.price && (
                                                        <p className="ml-2 text-sm line-through text-gray-500">
                                                            {formatCurrency(machineData.originalPrice)}
                                                        </p>
                                                    )}
                                                </div>
                                                {machineData.originalPrice > machineData.price && (
                                                    <p className="text-sm text-green-600">
                                                        Save{" "}
                                                        {formatCurrency(
                                                            machineData.originalPrice - machineData.price,
                                                        )}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-500">Location</p>
                                                <p className="font-medium">{machineData.location}</p>
                                                {machineData.is_sell && (
                                                    <Badge className="mt-1 bg-blue-100 text-blue-800">
                                                        For Sale
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tabs Section */}
                        <Tabs defaultValue="specifications" className="w-full">
                            <TabsList className="grid grid-cols-4 mb-4">
                                <TabsTrigger
                                    value="specifications"
                                    className="!rounded-button cursor-pointer whitespace-nowrap"
                                >
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger
                                    value="maintenance"
                                    className="!rounded-button cursor-pointer whitespace-nowrap"
                                >
                                    Maintenance History
                                </TabsTrigger>
                                <TabsTrigger
                                    value="payments"
                                    className="!rounded-button cursor-pointer whitespace-nowrap"
                                >
                                    Payment History
                                </TabsTrigger>
                                <TabsTrigger
                                    value="transport"
                                    className="!rounded-button cursor-pointer whitespace-nowrap"
                                >
                                    Transport History
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="specifications">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Technical Specifications</CardTitle>
                                        <CardDescription>
                                            Detailed specifications of the {machineData.title}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                            {specifications.map((spec, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-between p-3 bg-gray-100 rounded-lg"
                                                >
                                                  <span className="text-gray-600 font-medium">
                                                    {spec.key}
                                                  </span>
                                                    <span className="text-gray-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="maintenance">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Maintenance History</CardTitle>
                                        <CardDescription>
                                            Record of all maintenance activities
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead>Description</TableHead>
                                                    <TableHead className="text-right">Cost</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {maintenances.map((maintenance, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell>
                                                            {format(maintenance.date, "MMM dd, yyyy")}
                                                        </TableCell>
                                                        <TableCell>{maintenance.description}</TableCell>
                                                        <TableCell className="text-right">
                                                            {formatCurrency(maintenance.cost)}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="payments">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Payment History</CardTitle>
                                        <CardDescription>Record of all payments</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead>Method</TableHead>
                                                    <TableHead className="text-right">Amount</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {recentPayments.map((payment, index) => (
                                                    <TableRow
                                                        key={index}
                                                        className={index === 0 ? "bg-blue-50" : ""}
                                                    >
                                                        <TableCell>
                                                            {format(payment.date, "MMM dd, yyyy")}
                                                        </TableCell>
                                                        <TableCell>{payment.method}</TableCell>
                                                        <TableCell className="text-right">
                                                            {formatCurrency(payment.amount)}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="transport">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Transport History</CardTitle>
                                        <CardDescription>
                                            Record of all transport activities
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead>Origin</TableHead>
                                                    <TableHead>Destination</TableHead>
                                                    <TableHead className="text-right">Cost</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {transports.map((transport, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell>
                                                            {format(transport.date, "MMM dd, yyyy")}
                                                        </TableCell>
                                                        <TableCell>{transport.origin}</TableCell>
                                                        <TableCell>{transport.destination}</TableCell>
                                                        <TableCell className="text-right">
                                                            {formatCurrency(transport.cost)}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </main>

            {/* Action Buttons */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-2">Payment ID:</span>
                            <span className="text-sm font-medium text-gray-900">{paymentData.id}</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                variant="outline"
                                className="rounded-md whitespace-nowrap transition-colors hover:bg-blue-50 hover:text-blue-700 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                                aria-label="Download Receipt"
                            >
                                <Download className="h-4 w-4 mr-2"/>
                                Download Receipt
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-md whitespace-nowrap transition-colors hover:bg-blue-50 hover:text-blue-700 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                                aria-label="Share Payment Details"
                            >
                                <Share2 className="h-4 w-4 mr-2"/>
                                Share
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-md whitespace-nowrap transition-colors hover:bg-blue-50 hover:text-blue-700 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                                aria-label="Print Receipt"
                            >
                                <Printer className="h-4 w-4 mr-2"/>
                                Print
                            </Button>
                            <Button
                                variant="destructive"
                                className="rounded-md whitespace-nowrap transition-colors hover:bg-red-600 focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
                                aria-label="Report an Issue"
                            >
                                <AlertCircle className="h-4 w-4 mr-2"/>
                                Report Issue
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Page