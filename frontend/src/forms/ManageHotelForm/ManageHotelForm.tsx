import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypesSection";

export type HotelFormData = {
  name: string;
  city:string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFile: FileList;
  adultCount: number;
  childcount: number; 
}
const ManageHotelForm = ()=>{
  const formMethods = useForm<HotelFormData>();
  return (
    <FormProvider {...formMethods}>
      <form></form>
      <DetailsSection/>
      <TypeSection/>
    </FormProvider>
    )
}
export default ManageHotelForm;