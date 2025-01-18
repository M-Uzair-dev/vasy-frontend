import React from 'react'
import { Table } from "flowbite-react";
import DashBoardLayout from '../../layout/DashBoardLayout';

function Orderdetailshero() {
  return (
    <>
    
    <DashBoardLayout heading={"Order details"}>
    <div className='bg-[#EDF2F7]  rounded-xl   '>
      <div className=' border-b-2 p-4'>
      <h1 className=' text-[18px] font-[700] text-[#1B3B5F]'>Orders Information</h1>
      <div className='pb-6'>
      <div className='flex items-center justify-start gap-36 text-sm font-medium pt-3 text-[#737373]'>
            <div>Order ID</div>
            <div>Category</div>
            <div>Status</div>
            <div>Amount</div>
            <div>Order Items</div>
            
          </div>
          <div className='flex items-center justify-start gap-36 text-sm font-medium pt-3 text-[#737373]'>
            <div>Order ID</div>
            <div>Category</div>
            <div>Status</div>
            <div>Amount</div>
            <div>Order Items</div>
            
          </div>
          </div>
        </div>
        <div className='p-4  '>
      <h1 className=' text-[18px] font-[700] text-[#1B3B5F]'>Rider Information</h1>
      <div className='pb-6'>
      <div className='flex items-center justify-start gap-36 text-sm font-medium pt-3 text-[#737373]'>
            <div>Name</div>
            <div>Email</div>
            <div>Phone No</div>
            <div>Pickup location</div>
            <div>Dropoff location</div>
            
          </div>
          <div className='flex items-center justify-start gap-36 text-sm font-medium pt-3 text-[#737373]'>
            <div>Name</div>
            <div>Email</div>
            <div>Phone No</div>
            <div>Pickup location</div>
            <div>Dropoff location</div>
            
          </div>
          </div>
        </div>
      </div>
      
     </DashBoardLayout>
  

  </>
   
 



  )
}

export default Orderdetailshero
