'use client'
import React from "react";
import {Separator} from "@/app/components/ui/separator";
import {ClipboardCheck, Info} from "lucide-react";
import Link from "next/link";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const MachineCard = ({machine}:any) => {
    return (
        <div
            key={machine.id}
            className="overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white"
        >
            <div className="relative h-48">
                <img
                    src={machine.image}
                    alt={machine.title}
                    className="w-full h-full object-cover"
                />
                <span
                    className={`absolute top-2 right-2 inline-flex items-center px-2 py-1 text-xs font-medium rounded-md border ${
                        machine.status === "Available"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : machine.status === "In Use"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : machine.status === "Maintenance"
                                    ? "bg-orange-50 text-orange-700 border-orange-200"
                                    : "bg-purple-50 text-purple-700 border-purple-200"
                    }`}
                >
          {machine.status}
        </span>
            </div>
            <div className="p-4">
                <div className="pb-2">
                    <h3 className="text-lg font-semibold">{machine.title}</h3>
                    <p className="text-sm text-gray-500">
                        {machine.brand} • {machine.model}
                    </p>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Year</span>
                        <span className="font-medium">{machine.mfgYear}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Weight</span>
                        <span className="font-medium">{machine.operatingWeight}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Location</span>
                        <span className="font-medium">{machine.location}</span>
                    </div>
                    <Separator className="h-px bg-gray-200 my-2"/>
                    <div className="flex justify-between items-center">
                        <div>
              <span className="text-lg font-bold text-blue-600">
                {machine.price}
              </span>
                            <span className="text-sm text-gray-500 line-through ml-2">
                {machine.originalPrice}
              </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 flex justify-between space-x-4">
                <Link
                    href="/dashboard/machines/1"
                    className="inline-flex w-full items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <span className="flex items-center">
                      <Info className="w-4 h-4 mr-2"/>
                      Details
                    </span>
                </Link>
                <Link
                    href="#"
                    className="inline-flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <span className="flex items-center">
                      <ClipboardCheck className="w-4 h-4 mr-2"/>
                      Reserve
                    </span>
                </Link>
            </div>
        </div>
    )
}
export default MachineCard