

export interface NewMachine {
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
export interface Specification {
    key: string;
    value: string;
}
export interface Maintenances {
    cost: string;
    date: string;
    description: string;
}
export interface RecentPayment {
    amount: string;
    date: string;
    method: string;
}
export interface Transports {
    destination: string;
    origin: string;
    machine: NewMachine
    pyement: RecentPayment
}
export interface Order {
    id: number;
    clientId: number;
    machineId: number;
    orderDate: string;
    totalAmount: string;
    status: string;

    transports: Transports[];
    recentPayments: RecentPayment[];
    maintenances: Maintenances[];
}
export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    company?: string;
    orders?: Order[];
    status: string;
    createdAt: string;
    transports?: Transports[];
    recentPayments?: RecentPayment[];
    maintenances?: Maintenances[];
}