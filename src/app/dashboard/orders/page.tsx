'use client'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import {Button} from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {File,Eye} from  "lucide-react";
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()

    const orders = Array(10)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        clientId: 1000 + index,
        machineId: 2000 + index,
        orderDate: new Date(2025, 3, 20 - index).toISOString(),
        totalAmount: `$${(150000 + index * 25000).toLocaleString()}`,
        status: ["Processing", "Completed", "Pending", "Cancelled"][index % 4],
        transports: [
          {
            cost: `$${(3000 + index * 500).toLocaleString()}`,
            destination: ["New York", "Los Angeles", "Chicago", "Houston"][
            index % 4
                ],
            origin: ["Miami", "Seattle", "Boston", "Denver"][index % 4],
          },
        ],
        recentPayments: [
          {
            amount: `$${(50000 + index * 10000).toLocaleString()}`,
            date: new Date(2025, 3, 19 - index).toISOString(),
            method: ["Credit Card", "Bank Transfer", "Wire Transfer"][index % 3],
          },
        ],
        maintenances: [
          {
            cost: `$${(2000 + index * 300).toLocaleString()}`,
            date: new Date(2025, 3, 18 - index).toISOString(),
            description: "Regular maintenance and inspection",
          },
        ],
      }));
  return(
      <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orders.map((order) => (
                  <Card
                      key={order.id}
                      className="hover:shadow-lg transition-shadow"
                  >
                      <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                              <div>
                                  <CardTitle className="text-lg">
                                      Order #{order.id}
                                  </CardTitle>
                                  <CardDescription>
                                      {new Date(order.orderDate).toLocaleDateString()}
                                  </CardDescription>
                              </div>
                              <Badge
                                  variant="outline"
                                  className={`
                        ${
                                      order.status === "Completed"
                                          ? "bg-green-50 text-green-700 border-green-200"
                                          : order.status === "Processing"
                                              ? "bg-blue-50 text-blue-700 border-blue-200"
                                              : order.status === "Pending"
                                                  ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                                  : "bg-red-50 text-red-700 border-red-200"
                                  }
                      `}
                              >
                                  {order.status}
                              </Badge>
                          </div>
                      </CardHeader>
                      <CardContent>
                          <div className="space-y-4">
                              <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Total Amount
                      </span>
                                  <span className="font-semibold">{order.totalAmount}</span>
                              </div>
                              <Separator/>
                              <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Last Payment
                      </span>
                                  <span className="font-medium">
                        {order.recentPayments[0].amount}
                      </span>
                              </div>
                              <Separator/>
                              <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-500">Transport</span>
                                  <span className="font-medium">
                        {order.transports[0].cost}
                      </span>
                              </div>
                          </div>
                      </CardContent>
                      <CardFooter className="flex justify-between space-x-2">
                          <Button
                              variant="outline"
                              onClick={()=>router.push(`/dashboard/orders/${order.id}`)}
                              className="!rounded-button whitespace-nowrap w-full"
                          >
                              <Eye className={'mr-2'}/>
                              View Details
                          </Button>
                          <Button
                              variant="default"
                              className="!rounded-button whitespace-nowrap w-full"
                          >
                              <File className={'mr-2'}/>
                              Invoice
                          </Button>
                      </CardFooter>
                  </Card>
              ))}
          </div>
      </>
  )
}
export default Page