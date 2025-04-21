import MachineCard from "@/app/components/machine/card";
import React from "react";

const Page = () => {
    const index = 0
    const machineData = [
        {
            id: index + 1,
            title: `${["Caterpillar", "Komatsu", "Volvo", "Hitachi"][index % 4]} ${["320", "350", "400", "500"][index % 4]} Excavator`,
            image: `https://readdy.ai/api/search-image?query=A%20professional%20photograph%20of%20a%20modern%20$%7B%5Byellow%2C%20orange%2C%20white%2C%20black%5D%5Bindex%20%25%204%5D%7D%20heavy%20duty%20excavator%20machine%20positioned%20on%20a%20clean%20construction%20site%20with%20neutral%20background%2C%20showing%20the%20machine%20from%20a%203%2F4%20angle%20with%20dramatic%20lighting&width=400&height=300&seq=${index + 1}&orientation=landscape`,
            brand: ["Caterpillar", "Komatsu", "Volvo", "Hitachi"][index % 4],
            model: `${["320", "350", "400", "500"][index % 4]} GX`,
            mfgYear: `${2022 + (index % 4)}`,
            operatingWeight: `${20 + index},700 kg`,
            price: `$${(150 + index * 5).toLocaleString()},000`,
            originalPrice: `$${(180 + index * 5).toLocaleString()},000`,
            status: ["Available", "In Use", "Maintenance", "Reserved"][index % 4],
            location: ["New York", "Los Angeles", "Chicago", "Houston"][index % 4],
            lastService: new Date(2025, 3, 19 - index).toLocaleDateString(),
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {machineData.map((machine) => (
                <MachineCard key={machine.id} machine={machine}/>
            ))}
        </div>
    );
}
export default Page