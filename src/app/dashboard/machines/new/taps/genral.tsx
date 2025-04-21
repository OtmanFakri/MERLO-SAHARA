import React from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/app/components/ui/select";
import {Input} from "@/app/components/ui/input";
const categories = [
    "Chargeuse",
    "Pelle",
    "Bulldozer",
    "Grue",
    "Camion benne",
];
export default function General() {
    return (
        <section>
            <h2 className="font-['Barlow',Helvetica] font-semibold text-xl text-[#222222] mb-6">
                Informations générales
            </h2>
            <section>
                <h2 className="font-['Barlow',Helvetica] font-semibold text-xl text-[#222222] mb-6">
                    Photos
                </h2>
                <div className="space-y-4">
                    <Input
                        type="file"
                        accept="image/*"
                        multiple
                        // onChange={handleImageChange}
                        className="w-full"
                    />
                    {/*{imagePreview && (*/}
                    {/*    <div className="mt-4">*/}
                    {/*        <img*/}
                    {/*            src={imagePreview}*/}
                    {/*            alt="Preview"*/}
                    {/*            className="max-w-[300px] rounded-lg shadow-md"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Catégorie</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionner une catégorie"/>
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>{category}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Marque</label>
                    <Input placeholder="Entrer la marque"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Modèle</label>
                    <Input placeholder="Entrer le modèle"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Référence / Type</label>
                    <Input placeholder="Entrer la référence"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Année de fabrication</label>
                    <Input type="number" min="1900" max={new Date().getFullYear()} placeholder="YYYY"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Date de première mise en circulation</label>
                    <Input type="date"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Numéro de série / châssis</label>
                    <Input placeholder="Entrer le numéro de série"/>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-pro-themecomgray">Numéro matriculation</label>
                    <Input placeholder="Entrer le numéro d'immatriculation"/>
                </div>
            </div>
        </section>
    )
}