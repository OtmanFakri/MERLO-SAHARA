import {HeaderSection} from "@/app/components/HeaderSection/HeaderSection";
import {EquipmentListingSection} from "@/app/components/EquipmentListingSection/EquipmentListingSection";
import {SearchFilterSection} from "@/app/components/SearchFilterSection";
import {FooterSection} from "@/app/components/FooterSection/FooterSection";

export default function Home() {
  return (
      <div className="flex flex-col w-full min-w-80 max-w-[1920px] min-h-screen mx-auto bg-bananistyle">
        <HeaderSection/>
        <EquipmentListingSection/>
        <SearchFilterSection/>
        <FooterSection/>
      </div>);
}
