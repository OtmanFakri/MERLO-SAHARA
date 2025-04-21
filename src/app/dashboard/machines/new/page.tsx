'use client'
import React, {useEffect} from "react";
import {Button} from "@/app/components/ui/button";
import {Card, CardContent} from "@/app/components/ui/card";
import {Input} from "@/app/components/ui/input";
import {useForm, useFieldArray} from "react-hook-form";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/app/components/ui/tabs";
import {firebaseConfig} from "@/app/config";
import {firebaseCRUD} from "@/app/lib/firebaseUtils";
import {NewMachine} from "@/app/dashboard/machines/new/interfaces";


// interface Specification {
//     key: string;
//     value: string;
// }

export default function Page() {
    const {register, control, handleSubmit, formState: {}} = useForm<NewMachine>({
        defaultValues: {
            specifications: [{key: "", value: ""}],
            maintences: [{cost: "", date: "", description: ""}],
            recentPayment: [{amount: "", date: "", method: ""}],
            // transports: [{cost: "", destination: "", origin: ""}]
        }
    });

    const {
        fields: specificationFields,
        append: appendSpecification,
        remove: removeSpecification
    } = useFieldArray({
        control,
        name: "specifications"
    });

    const {
        fields: maintenanceFields,
        append: appendMaintenance,
        remove: removeMaintenance
    } = useFieldArray({
        control,
        name: "maintences"
    });

    const {
        fields: paymentFields,
        append: appendPayment,
        remove: removePayment
    } = useFieldArray({
        control,
        name: "recentPayment"
    });

    const {
        fields: transportFields,
        // append: appendTransport,
        remove: removeTransport
    } = useFieldArray({
        control,
        name: "transports"
    });

    const onSubmit = (data: NewMachine) => {
        console.log(data);
    };

    useEffect(() => {
        console.log(firebaseConfig)
        async function getAllUsers() {
            const users = await firebaseCRUD('getAll', 'clients');
            console.log('Tous les utilisateurs:', users);
        }

        getAllUsers()
    }, []);
    return (
        <div className="flex flex-col items-center w-full py-16 bg-pro-themecomalabaster">
            <div className="container max-w-[1480px] px-4">
                <h1 className="font-['Barlow',Helvetica] font-bold text-[#222222] text-4xl mb-8">
                    Ajouter une nouvelle machine
                </h1>

                <form onSubmit={handleSubmit(()=>onSubmit)}>
                    <Card className="w-full">
                        <CardContent className="p-8">
                            <Tabs orientation={'vertical'} defaultValue="basic" className="w-full">
                                <TabsList className="w-full justify-start mb-4">
                                    <TabsTrigger
                                        className="flex-1 rounded-t-md border-b-2 border-transparent px-4 py-2 text-center font-pro-theme-com-barlow-bold text-pro-themecomdove-gray-50 transition-all hover:bg-pro-themecommercury data-[state=active]:border-pro-themecombuddha-gold data-[state=active]:bg-pro-themecomalabaster data-[state=active]:text-pro-themecombuddha-gold"
                                        value="basic">Informations de base</TabsTrigger>
                                    <TabsTrigger
                                        className="flex-1 rounded-t-md border-b-2 border-transparent px-4 py-2 text-center font-pro-theme-com-barlow-bold text-pro-themecomdove-gray-50 transition-all hover:bg-pro-themecommercury data-[state=active]:border-pro-themecombuddha-gold data-[state=active]:bg-pro-themecomalabaster data-[state=active]:text-pro-themecombuddha-gold"
                                        value="specifications">Spécifications</TabsTrigger>
                                    <TabsTrigger
                                        className="flex-1 rounded-t-md border-b-2 border-transparent px-4 py-2 text-center font-pro-theme-com-barlow-bold text-pro-themecomdove-gray-50 transition-all hover:bg-pro-themecommercury data-[state=active]:border-pro-themecombuddha-gold data-[state=active]:bg-pro-themecomalabaster data-[state=active]:text-pro-themecombuddha-gold"
                                        value="maintenance">Maintenance</TabsTrigger>
                                    <TabsTrigger
                                        className="flex-1 rounded-t-md border-b-2 border-transparent px-4 py-2 text-center font-pro-theme-com-barlow-bold text-pro-themecomdove-gray-50 transition-all hover:bg-pro-themecommercury data-[state=active]:border-pro-themecombuddha-gold data-[state=active]:bg-pro-themecomalabaster data-[state=active]:text-pro-themecombuddha-gold"
                                        value="payments">Paiements</TabsTrigger>
                                    <TabsTrigger
                                        className="flex-1 rounded-t-md border-b-2 border-transparent px-4 py-2 text-center font-pro-theme-com-barlow-bold text-pro-themecomdove-gray-50 transition-all hover:bg-pro-themecommercury data-[state=active]:border-pro-themecombuddha-gold data-[state=active]:bg-pro-themecomalabaster data-[state=active]:text-pro-themecombuddha-gold"
                                        value="transport">Transport</TabsTrigger>
                                </TabsList>

                                <TabsContent value="basic" className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm text-pro-themecomgray">Titre</label>
                                            <Input {...register("title")} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-pro-themecomgray">Marque</label>
                                            <Input {...register("brand")} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-pro-themecomgray">Modèle</label>
                                            <Input {...register("model")} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-pro-themecomgray">Année de
                                                fabrication</label>
                                            <Input {...register("mfgYear")} type="number"/>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-pro-themecomgray">Poids opérationnel</label>
                                            <Input {...register("operatingWeight")} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-pro-themecomgray">Prix</label>
                                            <Input {...register("price")} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-pro-themecomgray">Prix original</label>
                                            <Input {...register("originalPrice")} />
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="specifications" className="space-y-4">
                                    {specificationFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-4">
                                            <Input
                                                placeholder="Clé"
                                                {...register(`specifications.${index}.key`)}
                                            />
                                            <Input
                                                placeholder="Valeur"
                                                {...register(`specifications.${index}.value`)}
                                            />
                                            <Button
                                                type="button"
                                                onClick={() => removeSpecification(index)}
                                                variant="destructive"
                                            >
                                                Supprimer
                                            </Button>
                                        </div>
                                    ))}
                                    <Button
                                        type="button"
                                        onClick={() => appendSpecification({key: "", value: ""})}
                                    >
                                        Ajouter une spécification
                                    </Button>
                                </TabsContent>

                                <TabsContent value="maintenance" className="space-y-4">
                                    {maintenanceFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-4">
                                            <Input
                                                placeholder="Coût"
                                                {...register(`maintences.${index}.cost`)}
                                            />
                                            <Input
                                                type="date"
                                                {...register(`maintences.${index}.date`)}
                                            />
                                            <Input
                                                placeholder="Description"
                                                {...register(`maintences.${index}.description`)}
                                            />
                                            <Button
                                                type="button"
                                                onClick={() => removeMaintenance(index)}
                                                variant="destructive"
                                            >
                                                Supprimer
                                            </Button>
                                        </div>
                                    ))}
                                    <Button
                                        type="button"
                                        onClick={() => appendMaintenance({cost: "", date: "", description: ""})}
                                    >
                                        Ajouter une maintenance
                                    </Button>
                                </TabsContent>

                                <TabsContent value="payments" className="space-y-4">
                                    {paymentFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-4">
                                            <Input
                                                placeholder="Montant"
                                                {...register(`recentPayment.${index}.amount`)}
                                            />
                                            <Input
                                                type="date"
                                                {...register(`recentPayment.${index}.date`)}
                                            />
                                            <Input
                                                placeholder="Méthode de paiement"
                                                {...register(`recentPayment.${index}.method`)}
                                            />
                                            <Button
                                                type="button"
                                                onClick={() => removePayment(index)}
                                                variant="destructive"
                                            >
                                                Supprimer
                                            </Button>
                                        </div>
                                    ))}
                                    <Button
                                        type="button"
                                        onClick={() => appendPayment({amount: "", date: "", method: ""})}
                                    >
                                        Ajouter un paiement
                                    </Button>
                                </TabsContent>

                                <TabsContent value="transport" className="space-y-4">
                                    {transportFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-4">
                                            <Input
                                                placeholder="Coût"

                                            />
                                            <Input
                                                placeholder="Destination"
                                                {...register(`transports.${index}.destination`)}
                                            />
                                            <Input
                                                placeholder="Origine"
                                                {...register(`transports.${index}.origin`)}
                                            />
                                            <Button
                                                type="button"
                                                onClick={() => removeTransport(index)}
                                                variant="destructive"
                                            >
                                                Supprimer
                                            </Button>
                                        </div>
                                    ))}
                                    <Button
                                        type="button"
                                        // onClick={() => appendTransport({cost: "", destination: "", origin: ""})}
                                    >
                                        Ajouter un transport
                                    </Button>
                                </TabsContent>
                            </Tabs>

                            <div className="flex justify-end mt-8">
                                <Button
                                    type="submit"
                                    className="bg-pro-themecomcorn hover:bg-pro-themecombuddha-gold text-bananistyle px-8 py-3 rounded-sm"
                                >
                                    Enregistrer
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </div>
    );
}