import React from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/app/components/ui/select";
import {Input} from "@/app/components/ui/input";
import {conditions, yesNoOptions} from "@/app/constents/constents";
export default function Etat(){
    return (
        <section>
            <h2 className="font-['Barlow',Helvetica] font-semibold text-xl text-[#222222] mb-6">
                État et entretien
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">État général</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner l'état"/>
                        </SelectTrigger>
                        <SelectContent>
                            {conditions.map((condition) => (
                                <SelectItem key={condition} value={condition.toLowerCase()}>{condition}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">État de la carrosserie</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner l'état"/>
                        </SelectTrigger>
                        <SelectContent>
                            {conditions.map((condition) => (
                                <SelectItem key={condition} value={condition.toLowerCase()}>{condition}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">État mécanique</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner l'état"/>
                        </SelectTrigger>
                        <SelectContent>
                            {conditions.map((condition) => (
                                <SelectItem key={condition} value={condition.toLowerCase()}>{condition}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Dernier entretien effectué le</label>
                    <Input type="date"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Disponibilité du carnet retirement</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner"/>
                        </SelectTrigger>
                        <SelectContent>
                            {yesNoOptions.map((option) => (
                                <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </section>
    )
}