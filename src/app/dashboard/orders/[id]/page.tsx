'use client'
import React, {useState} from "react";
import {Card, CardContent,CardHeader, CardTitle} from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import {Button} from "@/app/components/ui/button";
import {Badge} from "@/app/components/ui/badge";
import {TabsList, TabsTrigger, Tabs, TabsContent} from "@/app/components/ui/tabs";
import {Table, TableCell, TableHead, TableBody, TableRow, TableHeader} from "@/app/components/ui/details/table";
interface Transports {
  cost: string;
  destination: string;
  origin: string;
}
interface RecentPayment {
  amount: string;
  date: string;
  method: string;
}
interface Maintenances {
  cost: string;
  date: string;
  description: string;
}
interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
}
interface Order {
  id: number;
  clientId: number;
  machineId: number;
  orderDate: string;
  totalAmount: string;
  status: string;
  transports: Transports[];
  recentPayments: RecentPayment[];
  maintenances: Maintenances[];
  client: Client;
  machine: Machine;
}
interface Machine {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  yearOfManufacture: number;
  serialNumber: string;
  status: string;
}

const Page = () => {
  const order: Order = {
    id: 1,
    clientId: 1001,
    machineId: 2001,
    orderDate: new Date(2025, 3, 20).toISOString(),
    totalAmount: "$175,000",
    status: "Processing",
    client: {
      id: 1001,
      name: "John Smith",
      email: "john.smith@constructioncorp.com",
      phone: "+1 (555) 234-5678",
      company: "Construction Corporation Ltd.",
      address: "789 Industry Park, Boston, MA 02108",
    },
    machine: {
      id: 2001,
      name: "Excavator X2000",
      model: "CAT 349",
      manufacturer: "Caterpillar",
      yearOfManufacture: 2024,
      serialNumber: "CAT349-2024-7890",
      status: "Available",
    },
    transports: [
      {
        cost: "$3,500",
        destination: "New York",
        origin: "Miami",
      },
      {
        cost: "$4,200",
        destination: "Chicago",
        origin: "Houston",
      },
    ],
    recentPayments: [
      {
        amount: "$60,000",
        date: new Date(2025, 3, 19).toISOString(),
        method: "Bank Transfer",
      },
      {
        amount: "$40,000",
        date: new Date(2025, 3, 15).toISOString(),
        method: "Wire Transfer",
      },
    ],
    maintenances: [
      {
        cost: "$2,300",
        date: new Date(2025, 3, 18).toISOString(),
        description: "Regular maintenance and inspection",
      },
      {
        cost: "$1,800",
        date: new Date(2025, 3, 10).toISOString(),
        description: "Oil change and filter replacement",
      },
    ],
  };
  const [selectedOrder,] = useState<Order | null>(order);
  const [activeTab, setActiveTab] = useState("overview");

  if (!selectedOrder) return null;

  return (
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-gray-500">
                Total Amount
              </CardTitle>
              <div className="text-2xl font-bold">
                {selectedOrder.totalAmount}
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-gray-500">Status</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge
                    variant="outline"
                    className={`
${
                        selectedOrder.status === "Completed"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : selectedOrder.status === "Processing"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : selectedOrder.status === "Pending"
                                    ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                    : "bg-red-50 text-red-700 border-red-200"
                    }
`}
                >
                  {selectedOrder.status}
                </Badge>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-gray-500">
                Order Date
              </CardTitle>
              <div className="text-lg font-semibold">
                {new Date(selectedOrder.orderDate).toLocaleDateString()}
              </div>
            </CardHeader>
          </Card>
        </div>
        <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-4"
        >
          <TabsList>
            <TabsTrigger
                value="overview"
                className="!rounded-button whitespace-nowrap"
            >
              <i className="fas fa-chart-line mr-2"></i>
              Overview
            </TabsTrigger>
            <TabsTrigger
                value="payments"
                className="!rounded-button whitespace-nowrap"
            >
              <i className="fas fa-credit-card mr-2"></i>
              Payments
            </TabsTrigger>
            <TabsTrigger
                value="transport"
                className="!rounded-button whitespace-nowrap"
            >
              <i className="fas fa-truck mr-2"></i>
              Transport
            </TabsTrigger>
            <TabsTrigger
                value="maintenance"
                className="!rounded-button whitespace-nowrap"
            >
              <i className="fas fa-tools mr-2"></i>
              Maintenance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Client Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Client Name</span>
                        <span className="font-medium">
                          {selectedOrder.client.name}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Company</span>
                        <span className="font-medium">
                          {selectedOrder.client.company}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Email</span>
                        <span className="font-medium">
                          {selectedOrder.client.email}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Phone</span>
                        <span className="font-medium">
                          {selectedOrder.client.phone}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Address</span>
                        <span className="font-medium text-right">
                          {selectedOrder.client.address}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Machine Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Machine Name</span>
                        <span className="font-medium">
                          {selectedOrder.machine.name}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Model</span>
                        <span className="font-medium">
                          {selectedOrder.machine.model}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Manufacturer</span>
                        <span className="font-medium">
                          {selectedOrder.machine.manufacturer}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Year</span>
                        <span className="font-medium">
                          {selectedOrder.machine.yearOfManufacture}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Serial Number</span>
                        <span className="font-medium">
                          {selectedOrder.machine.serialNumber}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Status</span>
                        <Badge
                            variant="outline"
                            className={`
              ${
                                selectedOrder.machine.status === "Available"
                                    ? "bg-green-50 text-green-700 border-green-200"
                                    : "bg-yellow-50 text-yellow-700 border-yellow-200"
                            }
            `}
                        >
                          {selectedOrder.machine.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/*<div ref={chartRef} style={{height: "300px"}}></div>*/}
                    <p>this is chart</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Order ID</span>
                        <span className="font-medium">#{selectedOrder.id}</span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Client ID</span>
                        <span className="font-medium">
                          #{selectedOrder.clientId}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Machine ID</span>
                        <span className="font-medium">
                          #{selectedOrder.machineId}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">
                          Total Transport Cost
                        </span>
                        <span className="font-medium">
                          $
                          {selectedOrder.transports
                              .reduce(
                                  (sum, transport) =>
                                      sum +
                                      parseFloat(
                                          transport.cost.replace(/[^0-9.-]+/g, ""),
                                      ),
                                  0,
                              )
                              .toLocaleString()}
                        </span>
                      </div>
                      <Separator/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">
                          Total Maintenance Cost
                        </span>
                        <span className="font-medium">
                          $
                          {selectedOrder.maintenances
                              .reduce(
                                  (sum, maintenance) =>
                                      sum +
                                      parseFloat(
                                          maintenance.cost.replace(/[^0-9.-]+/g, ""),
                                      ),
                                  0,
                              )
                              .toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="payments">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedOrder.recentPayments.map((payment, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          {new Date(payment.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="font-medium">
                          {payment.amount}
                        </TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell className="text-right">
                          <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 !rounded-button whitespace-nowrap"
                          >
                            <i className="fas fa-file-invoice text-gray-500"></i>
                          </Button>
                        </TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
          <TabsContent value="transport">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Origin</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedOrder.transports.map((transport, index) => (
                      <TableRow key={index}>
                        <TableCell>{transport.origin}</TableCell>
                        <TableCell>{transport.destination}</TableCell>
                        <TableCell className="font-medium">
                          {transport.cost}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 !rounded-button whitespace-nowrap"
                          >
                            <i className="fas fa-map-marker-alt text-gray-500"></i>
                          </Button>
                        </TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
          <TabsContent value="maintenance">
            <Card>
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
                  {selectedOrder.maintenances.map((maintenance, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          {new Date(maintenance.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{maintenance.description}</TableCell>
                        <TableCell className="font-medium">
                          {maintenance.cost}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 !rounded-button whitespace-nowrap"
                          >
                            <i className="fas fa-file-alt text-gray-500"></i>
                          </Button>
                        </TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
  )
}
export default Page