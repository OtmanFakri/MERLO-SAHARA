'use client'
// Interfaces
import {useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/app/components/ui/card";
import {Button} from "@/app/components/ui/button";
import {Badge} from "@/app/components/ui/badge";
import { useRouter } from 'next/navigation'

import { format } from "date-fns";

import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@radix-ui/react-collapsible";
import {Avatar, AvatarFallback} from "@radix-ui/react-avatar";
import {
    ChevronUp,
    ChevronDown,
    Mail,
    Phone,
    MapPin,
    Printer,
    FileText,
    Search,
    CreditCard,
    DollarSign,
    Wallet,
    Info
} from 'lucide-react';

interface Specification {
    key: string;
    value: string;
}

interface Maintenance {
    cost: number;
    date: string;
    description: string;
}

interface RecentPayment {
    id: string;
    amount: number;
    date: string;
    method: string;
    status?: string;
    client: Client;
    machine: NewMachine;
}

interface Transport {
    cost: number;
    destination: string;
    origin: string;
    date: string;
}

interface Client {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    company?: string;
    orders?: number;
    status: string;
    createdAt: string;
    transports?: Transport[];
    recentPayments?: RecentPayment[];
    maintenances?: Maintenance[];
}

interface NewMachine {
    id: string;
    title: string;
    image: string;
    brand: string;
    model: string;
    mfgYear: number;
    operatingWeight: string;
    features: string[];
    price: number;
    originalPrice: number;
    specifications: Specification[];
    maintenances: Maintenance[];
    recentPayments: RecentPayment[];
    transports: Transport[];
    is_sell: boolean;
    status: string;
    location: string;
}

interface RecentPayment {
    id: string;
    amount: number;
    date: string;
    method: string;
    status?: string;
    client: Client;
    machine: NewMachine;
}

const Page = () => {
    const [expandedPayment, setExpandedPayment] = useState<string | null>(null);
    const [searchTerm, ] = useState("");
    const [filterMethod, ] = useState("all");
    const mockPayments: RecentPayment[] = [
        {
            id: "pay-001",
            amount: 12500,
            date: "2025-04-18T14:30:00",
            method: "Credit Card",
            status: "Completed",
            client: {
                id: "client-001",
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                phone: "+1 (555) 123-4567",
                address: "123 Main St, New York, NY 10001",
                company: "Doe Construction Inc.",
                status: "Active",
                createdAt: "2023-06-15T10:00:00",
            },
            machine: {
                id: "machine-001",
                title: "Excavator XL2000",
                image:
                    "https://readdy.ai/api/search-image?query=Professional%20high-end%20yellow%20excavator%20construction%20machinery%20with%20hydraulic%20arm%20and%20track%20system%2C%20photographed%20in%20a%20clean%20construction%20site%20with%20neutral%20light%20gray%20background%2C%20photorealistic%2C%20high%20detail%2C%20studio%20lighting&width=300&height=200&seq=1&orientation=landscape",
                brand: "Caterpillar",
                model: "XL2000",
                mfgYear: 2023,
                operatingWeight: "20 tons",
                features: ["GPS Tracking", "Fuel Efficiency", "Extended Reach"],
                price: 125000,
                originalPrice: 135000,
                specifications: [
                    {key: "Engine Power", value: "173 HP"},
                    {key: "Digging Depth", value: "6.5m"},
                ],
                maintenances: [],
                recentPayments: [],
                transports: [],
                is_sell: true,
                status: "Available",
                location: "New York Warehouse",
            },
        },
        {
            id: "pay-002",
            amount: 8750,
            date: "2025-04-15T09:15:00",
            method: "Bank Transfer",
            status: "Completed",
            client: {
                id: "client-002",
                firstName: "Sarah",
                lastName: "Johnson",
                email: "sarah.j@buildright.com",
                phone: "+1 (555) 987-6543",
                address: "456 Park Ave, Boston, MA 02108",
                company: "BuildRight Solutions",
                status: "Active",
                createdAt: "2024-01-10T11:30:00",
            },
            machine: {
                id: "machine-002",
                title: "Compact Loader S450",
                image:
                    "https://readdy.ai/api/search-image?query=Modern%20compact%20skid%20steer%20loader%20with%20bucket%20attachment%2C%20clean%20white%20machine%20with%20black%20details%2C%20photographed%20in%20a%20warehouse%20environment%20with%20neutral%20light%20gray%20background%2C%20photorealistic%2C%20high%20detail%2C%20studio%20lighting&width=300&height=200&seq=2&orientation=landscape",
                brand: "Bobcat",
                model: "S450",
                mfgYear: 2024,
                operatingWeight: "2.7 tons",
                features: ["Quick Attach System", "Climate Control", "Low Emissions"],
                price: 45000,
                originalPrice: 48000,
                specifications: [
                    {key: "Engine Power", value: "49 HP"},
                    {key: "Operating Capacity", value: "1,300 lbs"},
                ],
                maintenances: [],
                recentPayments: [],
                transports: [],
                is_sell: true,
                status: "In Transit",
                location: "Boston Distribution Center",
            },
        },
        {
            id: "pay-003",
            amount: 3200,
            date: "2025-04-20T10:45:00",
            method: "PayPal",
            status: "Completed",
            client: {
                id: "client-003",
                firstName: "Michael",
                lastName: "Chen",
                email: "m.chen@innovatech.net",
                phone: "+1 (555) 234-5678",
                address: "789 Tech Blvd, San Francisco, CA 94107",
                company: "InnovaTech Systems",
                status: "Active",
                createdAt: "2023-11-05T14:20:00",
            },
            machine: {
                id: "machine-003",
                title: "Mini Excavator E35",
                image:
                    "https://readdy.ai/api/search-image?query=Compact%20mini%20excavator%20with%20orange%20and%20black%20color%20scheme%2C%20shown%20digging%20in%20a%20residential%20construction%20site%2C%20clean%20machine%20with%20visible%20hydraulic%20components%2C%20photorealistic%2C%20high%20detail%2C%20natural%20lighting%20with%20neutral%20background&width=300&height=200&seq=3&orientation=landscape",
                brand: "Kubota",
                model: "E35",
                mfgYear: 2024,
                operatingWeight: "3.5 tons",
                features: ["Zero Tail Swing", "Adjustable Tracks", "Quick Coupler"],
                price: 42000,
                originalPrice: 45000,
                specifications: [
                    {key: "Engine Power", value: "24.8 HP"},
                    {key: "Digging Depth", value: "3.2m"},
                ],
                maintenances: [],
                recentPayments: [],
                transports: [],
                is_sell: false,
                status: "Rented",
                location: "San Francisco Branch",
            },
        },
        {
            id: "pay-004",
            amount: 22800,
            date: "2025-04-12T16:20:00",
            method: "Wire Transfer",
            status: "Pending",
            client: {
                id: "client-004",
                firstName: "Emily",
                lastName: "Rodriguez",
                email: "e.rodriguez@constructpro.com",
                phone: "+1 (555) 345-6789",
                address: "101 Construction Way, Miami, FL 33130",
                company: "ConstructPro Inc.",
                status: "Active",
                createdAt: "2024-02-18T09:45:00",
            },
            machine: {
                id: "machine-004",
                title: "Articulated Dump Truck",
                image:
                    "https://readdy.ai/api/search-image?query=Large%20yellow%20articulated%20dump%20truck%20with%20massive%20tires%20and%20hydraulic%20lifting%20bed%2C%20shown%20on%20a%20construction%20site%20with%20earth%20moving%20capability%2C%20clean%20machine%20with%20visible%20details%2C%20photorealistic%2C%20high%20detail%2C%20outdoor%20lighting%20with%20neutral%20background&width=300&height=200&seq=4&orientation=landscape",
                brand: "Volvo",
                model: "A30G",
                mfgYear: 2023,
                operatingWeight: "28 tons",
                features: [
                    "All-Wheel Drive",
                    "Automatic Traction Control",
                    "On-Board Weighing",
                ],
                price: 285000,
                originalPrice: 310000,
                specifications: [
                    {key: "Engine Power", value: "360 HP"},
                    {key: "Load Capacity", value: "30.9 tons"},
                ],
                maintenances: [],
                recentPayments: [],
                transports: [],
                is_sell: true,
                status: "Reserved",
                location: "Miami Distribution Hub",
            },
        },
        {
            id: "pay-005",
            amount: 5400,
            date: "2025-04-10T11:30:00",
            method: "Credit Card",
            status: "Completed",
            client: {
                id: "client-005",
                firstName: "Robert",
                lastName: "Williams",
                email: "r.williams@cityworks.org",
                phone: "+1 (555) 456-7890",
                address: "202 Municipal Dr, Chicago, IL 60601",
                company: "City Works Department",
                status: "Active",
                createdAt: "2023-09-22T13:15:00",
            },
            machine: {
                id: "machine-005",
                title: "Backhoe Loader",
                image:
                    "https://readdy.ai/api/search-image?query=Professional%20backhoe%20loader%20with%20front%20bucket%20and%20rear%20excavator%20arm%2C%20bright%20yellow%20color%20with%20black%20accents%2C%20shown%20on%20a%20clean%20construction%20site%2C%20photorealistic%2C%20high%20detail%2C%20natural%20lighting%20with%20neutral%20background%2C%20no%20people&width=300&height=200&seq=5&orientation=landscape",
                brand: "JCB",
                model: "3CX",
                mfgYear: 2024,
                operatingWeight: "8.5 tons",
                features: ["4x4 Capability", "Extendable Dipper", "Pilot Controls"],
                price: 95000,
                originalPrice: 102000,
                specifications: [
                    {key: "Engine Power", value: "74 HP"},
                    {key: "Max Dig Depth", value: "5.97m"},
                ],
                maintenances: [],
                recentPayments: [],
                transports: [],
                is_sell: false,
                status: "Maintenance",
                location: "Chicago Service Center",
            },
        },
    ];
    const router = useRouter();

    // Filter payments based on search and filter
    const filteredPayments = mockPayments.filter((payment) => {
        const matchesSearch =
            payment.client.firstName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            payment.client.lastName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            payment.machine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            payment.method.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter =
            filterMethod === "all" ||
            payment.method.toLowerCase() === filterMethod.toLowerCase();

        return matchesSearch && matchesFilter;
    });
    // Group payments by date
    const groupPaymentsByDate = (payments: RecentPayment[]) => {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        const groups = {
            today: payments.filter(
                (payment) => new Date(payment.date).toDateString() === today,
            ),
            yesterday: payments.filter(
                (payment) => new Date(payment.date).toDateString() === yesterday,
            ),
            earlier: payments.filter(
                (payment) =>
                    new Date(payment.date).toDateString() !== today &&
                    new Date(payment.date).toDateString() !== yesterday,
            ),
        };

        return groups;
    };

    // Calculate total payments
    const totalAmount = filteredPayments.reduce(
        (sum, payment) => sum + payment.amount,
        0,
    );
    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(amount);
    };

    // Get payment method icon
    const getPaymentMethodIcon = (method: string) => {
        switch (method.toLowerCase()) {
            case 'credit':
                return <CreditCard className="h-5 w-5" />;
            case 'debit':
                return <CreditCard className="h-5 w-5" />;
            case 'cash':
                return <DollarSign className="h-5 w-5" />;
            case 'paypal':
                return <Wallet className="h-5 w-5" />;
            default:
                return <CreditCard className="h-5 w-5" />;
        }
    };
    // Get status color
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


    const groupedPayments = groupPaymentsByDate(filteredPayments);


    const toggleExpand = (id: string) => {
        if (expandedPayment === id) {
            setExpandedPayment(null);
        } else {
            setExpandedPayment(id);
        }
    };
    return (
        <div>
            {/* Summary Cards */}
            <div className="container mx-auto px-2 py-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-medium text-gray-700">
                                Total Payments
                            </CardTitle>
                            <CardDescription>All time payment amount</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-gray-900">
                                {formatCurrency(totalAmount)}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-medium text-gray-700">
                                Payment Count
                            </CardTitle>
                            <CardDescription>Total number of transactions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-gray-900">
                                {filteredPayments.length}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-medium text-gray-700">
                                Average Payment
                            </CardTitle>
                            <CardDescription>Average transaction amount</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-gray-900">
                                {formatCurrency(
                                    filteredPayments.length
                                        ? totalAmount / filteredPayments.length
                                        : 0,
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-2 pb-16 max-w-7xl">
                {/* Today's Payments */}
                {groupedPayments.today.length > 0 && (
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today</h2>
                        <div className="space-y-4">
                            {groupedPayments.today.map((payment) => (
                                <Collapsible
                                    key={payment.id}
                                    open={expandedPayment === payment.id}
                                    onOpenChange={() => toggleExpand(payment.id)}
                                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                                >
                                    <CollapsibleTrigger asChild>
                                        <div className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <div
                                                        className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                                        {getPaymentMethodIcon(payment.method)}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-gray-900">
                                                            {payment.client.firstName} {payment.client.lastName}
                                                        </h3>
                                                        <p className="text-sm text-gray-500">
                                                            {format(new Date(payment.date), 'h:mm a')} · {payment.machine.title}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <div className="text-right">
                                                        <div className="font-semibold text-gray-900">
                                                            {formatCurrency(payment.amount)}
                                                        </div>
                                                        <Badge
                                                            className={`${getStatusColor(payment.status || 'completed')}`}>
                                                            {payment.status}
                                                        </Badge>
                                                    </div>
                                                    <div className="text-gray-400">
                                                        {expandedPayment === payment.id ? (
                                                            <ChevronUp className="h-5 w-5"/>
                                                        ) : (
                                                            <ChevronDown className="h-5 w-5"/>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        <div className="border-t border-gray-200 bg-gray-50">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                                                {/* Client Information */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3">Client
                                                        Information</h4>
                                                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                                                        <div className="flex items-start space-x-4">
                                                            <Avatar className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
                                                                <AvatarFallback className="leading-1 flex size-full items-center justify-center bg-gary-50 text-[15px] font-medium text-blue-600">
                                                                    {payment.client.firstName.charAt(0)}
                                                                    {payment.client.lastName.charAt(0)}
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1">
                                                                <h5 className="font-medium text-gray-900">
                                                                    {payment.client.firstName} {payment.client.lastName}
                                                                </h5>
                                                                {payment.client.company && (
                                                                    <p className="text-sm text-gray-600">{payment.client.company}</p>
                                                                )}
                                                                <div className="mt-2 space-y-1 text-sm">
                                                                    <p className="flex items-center text-gray-600">
                                                                        <Mail className="h-4 w-4 text-gray-400 mr-1"/>
                                                                        {payment.client.email}
                                                                    </p>
                                                                    <p className="flex items-center text-gray-600">
                                                                        <Phone className="h-4 w-4 text-gray-400 mr-1"/>
                                                                        {payment.client.phone}
                                                                    </p>
                                                                    <p className="flex items-center text-gray-600">
                                                                        <MapPin className="h-4 w-4 text-gray-400 mr-1"/>
                                                                        {payment.client.address}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Machine Information */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3">Machine
                                                        Information</h4>
                                                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                                                        <div className="flex space-x-4">
                                                            <div
                                                                className="w-24 h-16 flex-shrink-0 rounded-md overflow-hidden">
                                                                <img
                                                                    src={payment.machine.image}
                                                                    alt={payment.machine.title}
                                                                    className="w-full h-full object-cover object-top"
                                                                />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h5 className="font-medium text-gray-900">{payment.machine.title}</h5>
                                                                <p className="text-sm text-gray-600">
                                                                    {payment.machine.brand} {payment.machine.model}
                                                                </p>
                                                                <div
                                                                    className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                                                                    <p className="text-gray-600">
                                                                        Year: <span
                                                                        className="font-medium">{payment.machine.mfgYear}</span>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        Weight: <span
                                                                        className="font-medium">{payment.machine.operatingWeight}</span>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        Status: <span
                                                                        className="font-medium">{payment.machine.status}</span>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        Location: <span
                                                                        className="font-medium">{payment.machine.location}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Payment Details */}
                                            <div className="px-4 pb-4">
                                                <h4 className="font-medium text-gray-900 mb-3">Payment Details</h4>
                                                <div className="bg-white rounded-lg border border-gray-200 p-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                        <div>
                                                            <p className="text-sm text-gray-500">Amount</p>
                                                            <p className="font-semibold text-gray-900">{formatCurrency(payment.amount)}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-500">Payment Method</p>
                                                            <p className="font-medium text-gray-900 flex items-center">
                                                                {getPaymentMethodIcon(payment.method)}
                                                                <span className="ml-2">{payment.method}</span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-500">Date & Time</p>
                                                            <p className="font-medium text-gray-900">
                                                                {format(new Date(payment.date), 'MMM d, yyyy h:mm a')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="px-4 pb-4 flex justify-end space-x-3">
                                                <Button
                                                    onClick={()=>router.push('/dashboard/payments/' + payment.id)}
                                                    variant="outline" size="sm"
                                                        className="!rounded-button whitespace-nowrap">
                                                    <Info className="h-4 w-4 mr-2"/>
                                                    Details
                                                </Button>
                                                <Button
                                                    // onClick={()}
                                                    size="sm" className="!rounded-button whitespace-nowrap">
                                                    <FileText className="h-4 w-4 mr-2"/>
                                                    View Invoice
                                                </Button>
                                            </div>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            ))}
                        </div>
                    </div>
                )}

                {/* Yesterday's Payments */}
                {groupedPayments.yesterday.length > 0 && (
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Yesterday</h2>
                        <div className="space-y-4">
                            {groupedPayments.yesterday.map((payment) => (
                                <Collapsible
                                    key={payment.id}
                                    open={expandedPayment === payment.id}
                                    onOpenChange={() => toggleExpand(payment.id)}
                                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                                >
                                    <CollapsibleTrigger asChild>
                                        <div className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <div
                                                        className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                                        {getPaymentMethodIcon(payment.method)}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-gray-900">
                                                            {payment.client.firstName} {payment.client.lastName}
                                                        </h3>
                                                        <p className="text-sm text-gray-500">
                                                            {format(new Date(payment.date), 'h:mm a')} · {payment.machine.title}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <div className="text-right">
                                                        <div className="font-semibold text-gray-900">
                                                            {formatCurrency(payment.amount)}
                                                        </div>
                                                        <Badge
                                                            className={`${getStatusColor(payment.status || 'completed')}`}>
                                                            {payment.status}
                                                        </Badge>
                                                    </div>
                                                    <div className="text-gray-400">
                                                        {expandedPayment === payment.id ? (
                                                            <ChevronUp className="h-5 w-5"/>
                                                        ) : (
                                                            <ChevronDown className="h-5 w-5"/>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        {/* Same content as above */}
                                        <div className="border-t border-gray-200 bg-gray-50">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                                                {/* Client Information */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3">Client
                                                        Information</h4>
                                                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                                                        <div className="flex items-start space-x-4">
                                                            <Avatar className="h-12 w-12">
                                                                <AvatarFallback className="bg-blue-100 text-blue-600">
                                                                    {payment.client.firstName.charAt(0)}
                                                                    {payment.client.lastName.charAt(0)}
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1">
                                                                <h5 className="font-medium text-gray-900">
                                                                    {payment.client.firstName} {payment.client.lastName}
                                                                </h5>
                                                                {payment.client.company && (
                                                                    <p className="text-sm text-gray-600">{payment.client.company}</p>
                                                                )}
                                                                <div className="mt-2 space-y-1 text-sm">
                                                                    <p className="flex items-center text-gray-600">
                                                                        <Mail className="h-4 w-4 text-gray-400 mr-1"/>
                                                                        {payment.client.email}
                                                                    </p>
                                                                    <p className="flex items-center text-gray-600">
                                                                        <Phone className="h-4 w-4 text-gray-400 mr-1"/>
                                                                        {payment.client.phone}
                                                                    </p>
                                                                    <p className="flex items-center text-gray-600">
                                                                        <MapPin className="h-4 w-4 text-gray-400 mr-1"/>
                                                                        {payment.client.address}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Machine Information */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3">Machine
                                                        Information</h4>
                                                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                                                        <div className="flex space-x-4">
                                                            <div
                                                                className="w-24 h-16 flex-shrink-0 rounded-md overflow-hidden">
                                                                <img
                                                                    src={payment.machine.image}
                                                                    alt={payment.machine.title}
                                                                    className="w-full h-full object-cover object-top"
                                                                />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h5 className="font-medium text-gray-900">{payment.machine.title}</h5>
                                                                <p className="text-sm text-gray-600">
                                                                    {payment.machine.brand} {payment.machine.model}
                                                                </p>
                                                                <div
                                                                    className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                                                                    <p className="text-gray-600">
                                                                        Year: <span
                                                                        className="font-medium">{payment.machine.mfgYear}</span>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        Weight: <span
                                                                        className="font-medium">{payment.machine.operatingWeight}</span>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        Status: <span
                                                                        className="font-medium">{payment.machine.status}</span>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        Location: <span
                                                                        className="font-medium">{payment.machine.location}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Payment Details */}
                                            <div className="px-4 pb-4">
                                                <h4 className="font-medium text-gray-900 mb-3">Payment Details</h4>
                                                <div className="bg-white rounded-lg border border-gray-200 p-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                        <div>
                                                            <p className="text-sm text-gray-500">Amount</p>
                                                            <p className="font-semibold text-gray-900">{formatCurrency(payment.amount)}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-500">Payment Method</p>
                                                            <p className="font-medium text-gray-900 flex items-center">
                                                                {getPaymentMethodIcon(payment.method)}
                                                                <span className="ml-2">{payment.method}</span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-500">Date & Time</p>
                                                            <p className="font-medium text-gray-900">
                                                                {format(new Date(payment.date), 'MMM d, yyyy h:mm a')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="px-4 pb-4 flex justify-end space-x-3">
                                                <Button variant="outline" size="sm"
                                                        className="!rounded-button whitespace-nowrap">
                                                    <Printer className="h-4 w-4 mr-2"/>
                                                    Print Receipt
                                                </Button>
                                                <Button size="sm" className="!rounded-button whitespace-nowrap">
                                                    <FileText className="h-4 w-4 mr-2"/>
                                                    View Invoice
                                                </Button>
                                            </div>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            ))}
                        </div>
                    </div>
                )}

                {/* Earlier Payments */}
                {groupedPayments.earlier.length > 0 && (
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Earlier</h2>
                        <div className="space-y-4">
                            {groupedPayments.earlier.map((payment) => (
                                <Collapsible
                                    key={payment.id}
                                    open={expandedPayment === payment.id}
                                    onOpenChange={() => toggleExpand(payment.id)}
                                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                                >
                                    <CollapsibleTrigger asChild>
                                        <div className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <div
                                                        className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                                        {getPaymentMethodIcon(payment.method)}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-gray-900">
                                                            {payment.client.firstName} {payment.client.lastName}
                                                        </h3>
                                                        <p className="text-sm text-gray-500">
                                                            {format(new Date(payment.date), 'MMM d')} · {payment.machine.title}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <div className="text-right">
                                                        <div className="font-semibold text-gray-900">
                                                            {formatCurrency(payment.amount)}
                                                        </div>
                                                        <Badge
                                                            className={`${getStatusColor(payment.status || 'completed')}`}>
                                                            {payment.status}
                                                        </Badge>
                                                    </div>
                                                    <div className="text-gray-400">
                                                        {expandedPayment === payment.id ? (
                                                            <ChevronUp className="h-5 w-5"/>
                                                        ) : (
                                                            <ChevronDown className="h-5 w-5"/>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        {/* Same content as above */}
                                        <div className="border-t border-gray-200 bg-gray-50">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                                                {/* Client Information */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3">Client
                                                        Information</h4>
                                                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                                                        <div className="flex items-start space-x-4">
                                                            <Avatar className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
                                                                <AvatarFallback className="leading-1 flex size-full items-center justify-center bg-gray-50 text-[15px] font-medium text-blue-600">
                                                                    {payment.client.firstName.charAt(0)}
                                                                    {payment.client.lastName.charAt(0)}
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1">
                                                                <h5 className="font-medium text-gray-900">
                                                                    {payment.client.firstName} {payment.client.lastName}
                                                                </h5>
                                                                {payment.client.company && (
                                                                    <p className="text-sm text-gray-600">{payment.client.company}</p>
                                                                )}
                                                                <div className="mt-2 space-y-1 text-sm">
                                                                    <p className="flex items-center text-gray-600">
                                                                        <Mail className="h-4 w-4 text-gray-400 mr-1"/>
                                                                        {payment.client.email}
                                                                    </p>
                                                                    <p className="flex items-center text-gray-600">
                                                                        <Phone className="h-4 w-4 text-gray-400 mr-1"/>
                                                                        {payment.client.phone}
                                                                    </p>
                                                                    <p className="flex items-center text-gray-600">
                                                                        <MapPin className="h-4 w-4 text-gray-400 mr-1"/>
                                                                        {payment.client.address}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Machine Information */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3">Machine
                                                        Information</h4>
                                                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                                                        <div className="flex space-x-4">
                                                            <div
                                                                className="w-24 h-16 flex-shrink-0 rounded-md overflow-hidden">
                                                                <img
                                                                    src={payment.machine.image}
                                                                    alt={payment.machine.title}
                                                                    className="w-full h-full object-cover object-top"
                                                                />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h5 className="font-medium text-gray-900">{payment.machine.title}</h5>
                                                                <p className="text-sm text-gray-600">
                                                                    {payment.machine.brand} {payment.machine.model}
                                                                </p>
                                                                <div
                                                                    className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                                                                    <p className="text-gray-600">
                                                                        Year: <span
                                                                        className="font-medium">{payment.machine.mfgYear}</span>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        Weight: <span
                                                                        className="font-medium">{payment.machine.operatingWeight}</span>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        Status: <span
                                                                        className="font-medium">{payment.machine.status}</span>
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        Location: <span
                                                                        className="font-medium">{payment.machine.location}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Payment Details */}
                                            <div className="px-4 pb-4">
                                                <h4 className="font-medium text-gray-900 mb-3">Payment Details</h4>
                                                <div className="bg-white rounded-lg border border-gray-200 p-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                        <div>
                                                            <p className="text-sm text-gray-500">Amount</p>
                                                            <p className="font-semibold text-gray-900">{formatCurrency(payment.amount)}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-500">Payment Method</p>
                                                            <p className="font-medium text-gray-900 flex items-center">
                                                                {getPaymentMethodIcon(payment.method)}
                                                                <span className="ml-2">{payment.method}</span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-500">Date & Time</p>
                                                            <p className="font-medium text-gray-900">
                                                                {format(new Date(payment.date), 'MMM d, yyyy h:mm a')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="px-4 pb-4 flex justify-end space-x-3">
                                                <Button variant="outline" size="sm"
                                                        className="!rounded-button whitespace-nowrap">
                                                    <Printer className="h-4 w-4 mr-2"/>
                                                    Print Receipt
                                                </Button>
                                                <Button size="sm" className="!rounded-button whitespace-nowrap">
                                                    <FileText className="h-4 w-4 mr-2"/>
                                                    View Invoice
                                                </Button>
                                            </div>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            ))}
                        </div>
                    </div>
                )}

                {filteredPayments.length === 0 && (
                    <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                        <div
                            className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <Search className="h-5 w-5 text-gray-400"/>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No payments found</h3>
                        <p className="text-gray-500">
                            Try adjusting your search or filter to find what you&#39;re looking for.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Page