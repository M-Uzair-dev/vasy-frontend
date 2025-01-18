import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DashBoardLayout from '../layout/DashBoardLayout';
import CustomInput from '../components/UI/Inputs/CustomInput';
import Button from '../components/button/Button';
import ImageUploader from '../components/UI/Inputs/ImageInput';
import CustomSelect from '../components/UI/Selects/CustomSelect';

function RestaurantCategoriesedit() {
  const [selected, setselected] = useState("");
  const [selectedImages, setselectedImages] = useState([]);
    const nav = useNavigate();
  return (
    <DashBoardLayout heading={"Edit Category Details"}>

    <form action="" className="flex flex-col gap-7 h-[60vh] ">
        <div className='w-[390px]'>
          <CustomInput label={"Category Name"} placeholder=" Category name"  />
          </div>
      <div className="flex justify-start gap-5 mr-96">
          <CustomInput label={"Dish01"} placeholder=" Name"  />
        <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            label={"Image"}
          />
      </div>
      <div className="flex justify-start gap-5 mr-96">
        <CustomInput label={"Dish02"} placeholder=" Name" />
        <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            label={"Image"}
          />
      </div>
      <div className="flex justify-start gap-5 mr-96">
        <CustomInput label={"Dish03"} placeholder=" Name" />
        <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            label={"Image"}
          />
      </div>
  
      <div className="flex justify-start gap-5 mr-96 ">
        <CustomInput label={"Dish04"} placeholder=" Name" />
        <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            label={"Image"}
          />
          
      </div>

         
           
     

      <div className="flex gap-4 w-full h-full items-end justify-end">
        <Button title="Back" onclick={() => nav(-1)} outline />
        <Button title="Save" />
      </div>
    </form>
    <div className='mb-44'>

    </div>
</DashBoardLayout>
  )
}

export default RestaurantCategoriesedit;


