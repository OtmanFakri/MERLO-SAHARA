'use client'

import {EquipmentListingSection} from "@/app/components/EquipmentListingSection/EquipmentListingSection";

export default function Home() {
  return (
      <div className="flex flex-col w-full min-w-80 max-w-[1920px] min-h-screen mx-auto bg-bananistyle">

        <EquipmentListingSection/>
      </div>);
}
