import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/app/components/ui/select";
import React from "react";
import {yesNoNAOptions, yesNoOptions} from "@/app/constents/constents";

export default function Documents() {
    return (
        <section>
            <h2 className="font-['Barlow',Helvetica] font-semibold text-xl text-[#222222] mb-6">
                Documents administratifs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Carte grise</label>
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
                    <label className="text-sm text-gray-500">Facture d&apos;achat</label>
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
                    <label className="text-sm text-pro-themecomgray">Certificat CE / conformité</label>
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
                    <label className="text-sm text-pro-themecomgray">Assurance valide</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner"/>
                        </SelectTrigger>
                        <SelectContent>
                            {yesNoNAOptions.map((option) => (
                                <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </section>

    );
}