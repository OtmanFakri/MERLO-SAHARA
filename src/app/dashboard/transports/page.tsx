'use client'
import {Button} from '@/app/components/ui/button';
import {Card, CardHeader, CardTitle, CardContent, CardDescription} from '@/app/components/ui/card';
import React, {useEffect, useState} from "react";
import {Badge} from "@/app/components/ui/badge";
import {Separator} from "@/app/components/ui/separator";
import { MapPin, Flag, Truck, Eye, Plus, Navigation } from 'lucide-react';

interface Specification {
    name: string;
    value: string;
}

interface Maintenances {
    id: number;
    date: string;
    type: string;
    description: string;
    cost: string;
}

interface RecentPayment {
    amount: string;
    date: string;
    method: string;
}

interface Transports {
    destination: string;
    origin: string;
    machine: NewMachine;
    pyement: RecentPayment;
    status?: string; // Added status field
    date?: string; // Added date field
}

interface NewMachine {
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
    specifications: Specification[];
    maintences: Maintenances[];
    recentPayment: RecentPayment[];
    transports: Transports[];
    is_sell: boolean;
    status: string;
    location: string;
}

const Page = () => {
    const [transports, setTransports] = useState<Transports[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const getStatusColor = (status?: string) => {
        switch (status) {
            case "completed":
                return "bg-green-100 text-green-800";
            case "in-progress":
                return "bg-yellow-100 text-yellow-800";
            case "pending":
                return "bg-gray-100 text-gray-800";
            default:
                return "bg-blue-100 text-blue-800";
        }
    };
    // Mock data for demonstration
    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            const mockTransports: Transports[] = [
                {
                    destination: "New York, NY",
                    origin: "Chicago, IL",
                    status: "completed",
                    date: "2025-04-15",
                    machine: {
                        id: 1,
                        title: "Excavator XL2000",
                        image:
                            "https://readdy.ai/api/search-image?query=Professional%20high-quality%20photograph%20of%20a%20modern%20yellow%20excavator%20construction%20machine%20with%20a%20clean%20white%20background%2C%20detailed%20hydraulic%20arm%20and%20bucket%2C%20industrial%20equipment%20with%20sharp%20details%20and%20realistic%20lighting&width=500&height=400&seq=1&orientation=landscape",
                        brand: "Caterpillar",
                        model: "XL2000",
                        mfgYear: "2023",
                        operatingWeight: "22,000 kg",
                        features: ["GPS Tracking", "Auto-leveling", "Climate Control"],
                        price: "$180,000",
                        originalPrice: "$200,000",
                        specifications: [],
                        maintences: [],
                        recentPayment: [],
                        transports: [],
                        is_sell: true,
                        status: "active",
                        location: "Chicago Warehouse",
                    },
                    pyement: {
                        amount: "$2,500",
                        date: "2025-04-10",
                        method: "Bank Transfer",
                    },
                },
                {
                    destination: "Miami, FL",
                    origin: "Atlanta, GA",
                    status: "in-progress",
                    date: "2025-04-18",
                    machine: {
                        id: 2,
                        title: "Bulldozer D9T",
                        image:
                            "https://readdy.ai/api/search-image?query=Professional%20high-quality%20photograph%20of%20a%20powerful%20yellow%20bulldozer%20construction%20machine%20on%20a%20clean%20white%20background%2C%20detailed%20tracks%20and%20blade%2C%20industrial%20heavy%20equipment%20with%20sharp%20details%20and%20realistic%20lighting&width=500&height=400&seq=2&orientation=landscape",
                        brand: "Komatsu",
                        model: "D9T",
                        mfgYear: "2024",
                        operatingWeight: "49,000 kg",
                        features: ["Blade Control", "Rear Ripper", "360° Camera"],
                        price: "$320,000",
                        originalPrice: "$350,000",
                        specifications: [],
                        maintences: [],
                        recentPayment: [],
                        transports: [],
                        is_sell: true,
                        status: "active",
                        location: "Atlanta Depot",
                    },
                    pyement: {
                        amount: "$3,200",
                        date: "2025-04-16",
                        method: "Credit Card",
                    },
                },
                {
                    destination: "Los Angeles, CA",
                    origin: "Phoenix, AZ",
                    status: "pending",
                    date: "2025-04-25",
                    machine: {
                        id: 3,
                        title: "Wheel Loader 980H",
                        image:
                            "https://readdy.ai/api/search-image?query=Professional%20high-quality%20photograph%20of%20a%20modern%20yellow%20wheel%20loader%20construction%20machine%20with%20a%20clean%20white%20background%2C%20detailed%20bucket%20and%20articulated%20frame%2C%20industrial%20equipment%20with%20sharp%20details%20and%20realistic%20lighting&width=500&height=400&seq=3&orientation=landscape",
                        brand: "Volvo",
                        model: "980H",
                        mfgYear: "2022",
                        operatingWeight: "30,500 kg",
                        features: ["Load Sensing", "Eco Mode", "Comfort Cab"],
                        price: "$210,000",
                        originalPrice: "$230,000",
                        specifications: [],
                        maintences: [],
                        recentPayment: [],
                        transports: [],
                        is_sell: true,
                        status: "maintenance",
                        location: "Phoenix Yard",
                    },
                    pyement: {
                        amount: "$2,800",
                        date: "2025-04-20",
                        method: "Wire Transfer",
                    },
                },
                {
                    destination: "Seattle, WA",
                    origin: "Portland, OR",
                    status: "completed",
                    date: "2025-04-12",
                    machine: {
                        id: 4,
                        title: "Backhoe Loader 3CX",
                        image:
                            "https://readdy.ai/api/search-image?query=Professional%20high-quality%20photograph%20of%20a%20modern%20yellow%20backhoe%20loader%20construction%20machine%20with%20a%20clean%20white%20background%2C%20detailed%20front%20bucket%20and%20rear%20excavator%20arm%2C%20industrial%20equipment%20with%20sharp%20details%20and%20realistic%20lighting&width=500&height=400&seq=4&orientation=landscape",
                        brand: "JCB",
                        model: "3CX",
                        mfgYear: "2023",
                        operatingWeight: "8,200 kg",
                        features: ["4WD", "Extendable Dipper", "Power Shift"],
                        price: "$95,000",
                        originalPrice: "$110,000",
                        specifications: [],
                        maintences: [],
                        recentPayment: [],
                        transports: [],
                        is_sell: true,
                        status: "active",
                        location: "Portland Facility",
                    },
                    pyement: {
                        amount: "$1,900",
                        date: "2025-04-08",
                        method: "ACH Transfer",
                    },
                },
                {
                    destination: "Denver, CO",
                    origin: "Salt Lake City, UT",
                    status: "in-progress",
                    date: "2025-04-20",
                    machine: {
                        id: 5,
                        title: "Crawler Crane LR1300",
                        image:
                            "https://readdy.ai/api/search-image?query=Professional%20high-quality%20photograph%20of%20a%20large%20yellow%20crawler%20crane%20construction%20machine%20with%20a%20clean%20white%20background%2C%20detailed%20lattice%20boom%20and%20tracks%2C%20industrial%20heavy%20lifting%20equipment%20with%20sharp%20details%20and%20realistic%20lighting&width=500&height=400&seq=5&orientation=landscape",
                        brand: "Liebherr",
                        model: "LR1300",
                        mfgYear: "2021",
                        operatingWeight: "300,000 kg",
                        features: ["300t Capacity", "Luffing Jib", "Wind Monitor"],
                        price: "$1,200,000",
                        originalPrice: "$1,350,000",
                        specifications: [],
                        maintences: [],
                        recentPayment: [],
                        transports: [],
                        is_sell: true,
                        status: "active",
                        location: "Salt Lake Yard",
                    },
                    pyement: {
                        amount: "$8,500",
                        date: "2025-04-15",
                        method: "Bank Transfer",
                    },
                },
                {
                    destination: "Boston, MA",
                    origin: "New York, NY",
                    status: "pending",
                    date: "2025-04-28",
                    machine: {
                        id: 6,
                        title: "Skid Steer S650",
                        image:
                            "https://readdy.ai/api/search-image?query=Professional%20high-quality%20photograph%20of%20a%20compact%20white%20skid%20steer%20loader%20construction%20machine%20with%20a%20clean%20white%20background%2C%20detailed%20bucket%20and%20cab%2C%20industrial%20equipment%20with%20sharp%20details%20and%20realistic%20lighting&width=500&height=400&seq=6&orientation=landscape",
                        brand: "Bobcat",
                        model: "S650",
                        mfgYear: "2024",
                        operatingWeight: "3,900 kg",
                        features: ["Vertical Lift", "High Flow Hydraulics", "Enclosed Cab"],
                        price: "$65,000",
                        originalPrice: "$72,000",
                        specifications: [],
                        maintences: [],
                        recentPayment: [],
                        transports: [],
                        is_sell: true,
                        status: "active",
                        location: "Manhattan Depot",
                    },
                    pyement: {
                        amount: "$1,200",
                        date: "2025-04-22",
                        method: "Credit Card",
                    },
                },
            ];

            setTransports(mockTransports);
            setIsLoading(false);
        }, 1000);
    }, []);
    return (
        <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[600px] place-items-center">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            key={item}
                            className="w-full h-64 bg-gray-100 rounded-lg animate-pulse"
                        ></div>
                    ))}
                </div>
            ) : transports.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {transports.map((transport, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
                        >
                            <CardHeader className="pb-2 bg-gray-50">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg font-bold">
                                            <Navigation className="inline h-5 w-5 text-blue-500 mr-2"/>
                                            Transport #{transport.machine.id}
                                        </CardTitle>
                                        <CardDescription className="mt-1">
                                            {transport.date
                                                ? new Date(transport.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })
                                                : "Date not available"}
                                        </CardDescription>
                                    </div>
                                    <Badge className={`${getStatusColor(transport.status)} capitalize`}>
                                        {transport.status || "Unknown"}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="flex items-center mb-4">
                                    <div className="min-w-[80px] w-20 h-20 rounded-md overflow-hidden mr-4 bg-gray-100">
                                        <img
                                            src={transport.machine.image}
                                            alt={transport.machine.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">{transport.machine.title}</h3>
                                        <p className="text-sm text-gray-500">
                                            {transport.machine.brand} {transport.machine.model}
                                        </p>
                                        <p className="text-sm text-gray-500">ID: {transport.machine.id}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start">
                                        <div
                                            className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                            <MapPin className="h-4 w-4 text-green-600"/>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Origin</p>
                                            <p className="font-medium">{transport.origin}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div
                                            className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                            <Flag className="h-4 w-4 text-blue-600"/>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Destination</p>
                                            <p className="font-medium">{transport.destination}</p>
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-4"/>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-gray-500">Payment</p>
                                        <p className="font-medium">{transport.pyement.amount}</p>
                                        <p className="text-xs text-gray-500">{transport.pyement.method}</p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="!rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                        <Eye className="h-4 w-4 mr-2"/>
                                        Details
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div
                    className="bg-white rounded-lg p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        <Truck className="h-8 w-8 text-gray-400"/>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No transports found</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-6">
                        We couldn&#39;t find any transport records matching your search criteria. Try
                        adjusting your filters or create a new transport.
                    </p>
                    <Button className="!rounded-button whitespace-nowrap cursor-pointer">
                        <Plus className="h-4 w-4 mr-2"/>
                        Create New Transport
                    </Button>
                </div>
            )}
        </main>
    )
}
export default Page