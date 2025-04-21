'use client'
import Link from "next/link";
import {LayoutDashboard, Settings, Users, Truck, PenTool as Tool, DollarSign, Archive,} from "lucide-react";
import {usePathname} from "next/navigation";

const sidebarItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Machines",
        href: "/dashboard/machines",
        icon: Tool
    },
    {
        title: "Orders",
        href: "/dashboard/orders",
        icon: Archive
    },
    {
        title: "Payments",
        href: "/dashboard/payments",
        icon: DollarSign
    },
    {
        title: "Clients",
        href: "/dashboard/clients",
        icon: Users
    },
    {
        title: "Transports",
        href: "/dashboard/transports",
        icon: Truck
    },
    {
        title: "Users",
        href: "/dashboard/users",
        icon: Users
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings
    }
];

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const activeItem = sidebarItems.find(item => pathname === item.href);
    const pageTitle = activeItem ? activeItem.title : "Dashboard";
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
                {/* Logo */}
                <div className="h-16 flex items-center justify-center border-b">
                    <h1 className="text-xl font-bold text-gray-800">TracPay</h1>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={`flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${pathname === item.href ? 'bg-gray-200' : ''}`}
                        >
                            <item.icon className="w-5 h-5"/>
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 min-h-screen">
                {/* Header */}
                <header className="h-16 bg-white shadow-sm flex items-center px-6">
                    <h2 className="text-lg font-semibold text-gray-800">{pageTitle}</h2>
                </header>

                {/* Content */}
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}