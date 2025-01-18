import React, { useState } from 'react'
import DashBoardLayout from '../layout/DashBoardLayout'
import CustomInput from '../components/UI/Inputs/CustomInput'
import Button from '../components/button/Button'
import CustomSelect from '../components/UI/Selects/CustomSelect'
import ImageUploader from '../components/UI/Inputs/ImageInput'

function EditDriversdetails() {
  const [selected, setselected] = useState("");
  const [selectedImages, setselectedImages] = useState([]);
  return (
    
      <DashBoardLayout >
        <div className='flex flex-col '>
      <h1 className="text-secondary text-2xl font-bold pb-16">Driver Details</h1>
      <form action="" className="flex flex-col gap-12 h-[50vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput label={"Name"} placeholder="Enter Name" />
          <CustomInput label={"Email"} placeholder="Email" />
          <CustomInput label={"Phone"} placeholder="Phone" />
        </div>
        <div className="flex justify-start gap-5">
        <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Country Code"}
            placeholder="Select Country Code"
          />
          <CustomInput label={"Services"} placeholder="Services" />
          <CustomInput label={"Zone"} placeholder="Zone" />
        </div>
        <div className="flex justify-start gap-5">
          <CustomInput label={"Longitude"} placeholder="Longitude" />
          <CustomInput label={"Latitude"} placeholder="Latitude" />
          <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            label={"Image"}
          />
        </div>

       
      </form>
      
      <h1 className="text-secondary text-2xl font-bold pb-12">Vehicle Details</h1>
      <form action="" className="flex flex-col gap-7 h-[30vh] ">
        <div className="flex justify-start gap-5 ">
          <CustomInput label={"Seats"} placeholder="Enter Name" />
          <CustomInput label={"Type"} placeholder="Enter Name" />
          <CustomInput label={"Vehicle color"} placeholder="Enter Name" />
        </div>
        <div className="w-96">
          <CustomInput label={"Vehicle no "} placeholder="Enter Name" />
          
        </div>

       
      </form>
     
      <h1 className="text-secondary text-2xl font-bold pb-12">Bank Details</h1>
      <form action="" className="flex flex-col gap-7 h-[50vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput label={"Bank Name"} placeholder="Data" />
          <CustomInput label={"Branch Name"} placeholder="Data" />
          <CustomInput label={"Holder Name"} placeholder="Data" />
        </div>
        <div className="flex justify-start gap-5 pr-[400px]">
          <CustomInput label={"Account number"} placeholder="Data" />
          <CustomInput label={"Other information"} placeholder="Data" />
          
        </div>
        <div className="flex gap-4 w-full h-full items-end justify-end">
    <Button title="Back" onclick={() => nav(-1)} outline />
    <Button title="Save" />
  </div>

       
      </form>
      </div>
      </DashBoardLayout>
   

   
  )
}

export default EditDriversdetails



const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];