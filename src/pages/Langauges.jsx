import React, { useState } from "react";
import Button from "../components/button/Button";
import LanguageModal from "../components/UI/Modals/LanguageModal";


function Langauges() {
  const [open1, setopen1] = useState(false);
  console.log(open1)
  return (
    <>
    {open1 && <LanguageModal openModal={open1} setOpenModal={setopen1} />}

    <div className="p-8">

       <Button title="Change Language" className="px-14" onclick={()=> setopen1(true)}/>

      
     
    </div>
    </>
  );
}

export default Langauges;

