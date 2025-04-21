import React from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/app/components/ui/select";
import {Input} from "@/app/components/ui/input";
import {locomotionTypes, transmissionTypes} from "@/app/constents/constents";

const fuelTypes = ["Diesel", "Essence", "Électrique"];
export default function Technique() {
    return (
        <section>
            <h2 className="font-['Barlow',Helvetica] font-semibold text-xl text-[#222222] mb-6">
                Caractéristiques techniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Carburant</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner le type"/>
                        </SelectTrigger>
                        <SelectContent>
                            {fuelTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Puissance moteur (kW)</label>
                    <Input type="number" placeholder="Entrer la puissance"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Cylindrée moteur</label>
                    <Input placeholder="Entrer la cylindrée"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Type de transmission</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner le type"/>
                        </SelectTrigger>
                        <SelectContent>
                            {transmissionTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Poids à vide (kg)</label>
                    <Input type="number" placeholder="Entrer le poids"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Capacité de charge (T)</label>
                    <Input type="number" placeholder="Entrer la capacité"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Capacité du godet</label>
                    <Input placeholder="Entrer la capacité"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Nombre d&#39;oeuvres de fonctionnement</label>
                    <Input type="number" placeholder="Entrer le nombre d'heures"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Type de locomotion</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner le type"/>
                        </SelectTrigger>
                        <SelectContent>
                            {locomotionTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Vitesse maximale (km/h)</label>
                    <Input type="number" placeholder="Entrer la vitesse"/>
                </div>
            </div>
        </section>
    );
}