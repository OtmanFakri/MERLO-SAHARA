'use client'
import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Select,
    SelectTrigger,
    SelectValue,} from "@/app/components/ui/select";

interface Specification {
    key: string;
    value: string;
}

const defaultSpecifications: Specification[] = [
    { key: "Numéro de série", value: "" },
    { key: "Numéro d'immatriculation", value: "" },
    { key: "Puissance moteur (kW)", value: "" },
    { key: "Cylindrée moteur", value: "" },
    { key: "Type de transmission", value: "" },
    { key: "Capacité de charge (T)", value: "" },
    { key: "Capacité du godet", value: "" },
    { key: "Nombre d'heures", value: "" },
    { key: "Type de locomotion", value: "" },
    { key: "Vitesse maximale (km/h)", value: "" },
    { key: "État général", value: "Bon" },
    { key: "État mécanique", value: "Bon" },
    { key: "Dernier entretien", value: "" },
];

export default  function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [specifications, setSpecifications] = useState<Specification[]>(defaultSpecifications);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    const addSpecification = () => {
        setSpecifications([...specifications, { key: "", value: "" }]);
    };

    const updateSpecification = (index: number, field: "key" | "value", value: string) => {
        const newSpecifications = [...specifications];
        newSpecifications[index][field] = value;
        setSpecifications(newSpecifications);
    };
    return (
        <div className="flex flex-col items-center w-full py-16 bg-pro-themecomalabaster">
            <div className="container max-w-[1480px] px-4">
                <h1 className="font-['Barlow',Helvetica] font-bold text-[#222222] text-4xl mb-8">
                    Add New Machine
                </h1>

                <Card className="w-full">
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* General Information */}
                            <div>
                                <h2 className="font-['Barlow',Helvetica] font-semibold text-xl text-[#222222] mb-4">
                                    Informations générales
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-pro-themecomgray">
                                            Catégorie
                                        </label>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Sélectionner une catégorie"/>
                                            </SelectTrigger>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-pro-themecomgray">
                                            Marque
                                        </label>
                                        <Input
                                            required
                                            className="w-full"
                                            placeholder="Entrer la marque"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-pro-themecomgray">
                                            Modèle
                                        </label>
                                        <Input
                                            required
                                            className="w-full"
                                            placeholder="Entrer le modèle"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-pro-themecomgray">
                                            Année de fabrication
                                        </label>
                                        <Input
                                            required
                                            type="number"
                                            min="1900"
                                            max={new Date().getFullYear()}
                                            className="w-full"
                                            placeholder="YYYY"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-pro-themecomgray">
                                            Carburant
                                        </label>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Sélectionner le type"/>
                                            </SelectTrigger>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-pro-themecomgray">
                                            Poids à vide (kg)
                                        </label>
                                        <Input
                                            required
                                            type="number"
                                            className="w-full"
                                            placeholder="Entrer le poids"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Specifications */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="font-['Barlow',Helvetica] font-semibold text-xl text-[#222222]">
                                        Spécifications
                                    </h2>
                                    <Button
                                        type="button"
                                        onClick={addSpecification}
                                        className="bg-pro-themecomcorn hover:bg-pro-themecombuddha-gold text-bananistyle px-4 py-2 rounded-sm"
                                    >
                                        + Ajouter une spécification
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    {specifications.map((spec, index) => (
                                        <div key={index} className="flex gap-4">
                                            <Input
                                                value={spec.key}
                                                onChange={(e) => updateSpecification(index, "key", e.target.value)}
                                                placeholder="Nom de la spécification"
                                                className="flex-1"
                                            />
                                            <Input
                                                value={spec.value}
                                                onChange={(e) => updateSpecification(index, "value", e.target.value)}
                                                placeholder="Valeur"
                                                className="flex-1"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label className="text-sm text-pro-themecomgray">
                                    Description
                                </label>
                                <textarea
                                    className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background"
                                    placeholder="Description détaillée de la machine"
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-pro-themecomgray">
                                        Photos de la machine
                                    </label>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="w-full"
                                    />
                                </div>

                                {imagePreview && (
                                    <div className="mt-4">
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            className="max-w-[300px] rounded-lg shadow-md"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-6">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-pro-themecomcorn hover:bg-pro-themecombuddha-gold text-bananistyle px-8 py-3 rounded-sm"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center">
                                            <div
                                                className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"/>
                                            Enregistrement...
                                        </div>
                                    ) : (
                                        "Enregistrer"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}