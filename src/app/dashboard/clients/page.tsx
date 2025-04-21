'use client'
import React, {useEffect, useState} from "react";
import {Button} from '@/app/components/ui/button';
import {Card,CardContent} from '@/app/components/ui/card';

import {Table,TableCell,TableHead,TableBody,TableRow,TableHeader} from "@/app/components/ui/table";
import {Badge} from "@/app/components/ui/badge";
interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  company?: string;
  status: string;
  createdAt: string;
}
import { Eye, Edit, Trash2 } from 'lucide-react';
import { ArrowUp, ArrowDown, Search } from 'lucide-react';
import {useRouter} from "next/navigation";
const Page = () => {
  const [clients, setClients] = useState<Client[]>([]);
  // Generate mock data
  useEffect(() => {
    const mockClients: Client[] = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      firstName: `John${i}`,
      lastName: `Doe${i}`,
      email: `john.doe${i}@example.com`,
      phone: `+1 (555) ${100 + i}-${1000 + i}`,
      address: `${100 + i} Main Street, City ${i}`,
      company: i % 3 === 0 ? `Company ${i}` : undefined,
      status: i % 4 === 0 ? "Inactive" : "Active",
      createdAt: new Date(2023, i % 12, (i % 28) + 1)
          .toISOString()
          .split("T")[0],
    }));

    setClients(mockClients);
  }, []);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Client;
    direction: "ascending" | "descending";
  } | null>(null);
  // Sorting function
  const requestSort = (key: keyof Client) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  const router = useRouter();
  return(
      <div>
        <Card className="shadow-sm border-gray-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("id")}>
                      ID{" "}
                      {sortConfig?.key === "id" && (
                          sortConfig.direction === "ascending" ?
                              <ArrowUp className="inline ml-1 h-3 w-3" /> :
                              <ArrowDown className="inline ml-1 h-3 w-3" />
                      )}
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("firstName")}>
                      Full Name{" "}
                      {sortConfig?.key === "firstName" && (
                          sortConfig.direction === "ascending" ?
                              <ArrowUp className="inline ml-1 h-3 w-3" /> :
                              <ArrowDown className="inline ml-1 h-3 w-3" />
                      )}
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("email")}>
                      Email{" "}
                      {sortConfig?.key === "email" && (
                          sortConfig.direction === "ascending" ?
                              <ArrowUp className="inline ml-1 h-3 w-3" /> :
                              <ArrowDown className="inline ml-1 h-3 w-3" />
                      )}
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("phone")}>
                      Phone{" "}
                      {sortConfig?.key === "phone" && (
                          sortConfig.direction === "ascending" ?
                              <ArrowUp className="inline ml-1 h-3 w-3" /> :
                              <ArrowDown className="inline ml-1 h-3 w-3" />
                      )}
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("status")}>
                      Status{" "}
                      {sortConfig?.key === "status" && (
                          sortConfig.direction === "ascending" ?
                              <ArrowUp className="inline ml-1 h-3 w-3" /> :
                              <ArrowDown className="inline ml-1 h-3 w-3" />
                      )}
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => requestSort("createdAt")}>
                      Created At{" "}
                      {sortConfig?.key === "createdAt" && (
                          sortConfig.direction === "ascending" ?
                              <ArrowUp className="inline ml-1 h-3 w-3" /> :
                              <ArrowDown className="inline ml-1 h-3 w-3" />
                      )}
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.length > 0 ? (
                      clients.map((client, index) => (
                          <TableRow
                              key={client.id}
                              className={`cursor-pointer ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                          >
                            <TableCell className="font-medium">{client.id}</TableCell>
                            <TableCell>{`${client.firstName} ${client.lastName}`}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>{client.phone}</TableCell>
                            <TableCell>
                              <Badge
                                  className={`${client.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"} rounded-full px-3 py-1 text-xs font-medium`}
                              >
              <span
                  className={`inline-block w-2 h-2 rounded-full mr-2 ${client.status === "Active" ? "bg-green-500" : "bg-gray-500"}`}
              ></span>
                                {client.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{client.createdAt}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 !rounded-button cursor-pointer"
                                    title="View"
                                    onClick={()=>router.push(`/dashboard/clients/${client.id}`)}
                                >
                                  <Eye className="h-4 w-4 text-blue-600" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 !rounded-button cursor-pointer"
                                    title="Edit"
                                >
                                  <Edit className="h-4 w-4 text-amber-600" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 !rounded-button cursor-pointer"
                                    title="Delete"
                                >
                                  <Trash2 className="h-4 w-4 text-red-600" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                      ))
                  ) : (
                      <TableRow>
                        <TableCell className="text-center py-8">
                          <div className="flex flex-col items-center justify-center text-gray-500">
                            <Search className="h-10 w-10 mb-3" />
                            <p className="text-lg font-medium">No clients found</p>
                            <p className="text-sm">
                              Try adjusting your search or filter to find what you&#39;re looking for.
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
  )
}
export default Page