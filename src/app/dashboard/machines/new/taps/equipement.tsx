import React from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/app/components/ui/select";
import {yesNoOptions} from "@/app/constents/constents";
export default function Equipement() {
    return (
        <section>
            <h2 className="font-['Barlow',Helvetica] font-semibold text-xl text-[#222222] mb-6">
                Équipements et options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Accessoires inclus</label>
                    <textarea
                        className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                        placeholder="Godet, fourche, marteau hydraulique, treuil, pince..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Type de cabine</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner le type"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fermée">Fermée</SelectItem>
                            <SelectItem value="ouverte">Ouverte</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Climatisation</label>
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

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Caméra de recul</label>
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

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Système GPS / Guidage</label>
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

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Autres options ou équipements spéciaux</label>
                    <textarea
                        className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                        placeholder="Décrire les autres options..."
                    />
                </div>
            </div>
        </section>

    );
}