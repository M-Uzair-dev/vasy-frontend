import React from "react";
import { Table } from "flowbite-react";
import DashBoardLayout from "../layout/DashBoardLayout";

function RideOrderview() {
  return (
    <>
      <DashBoardLayout heading={"Ride details"}>
        <div className="bg-[#EDF2F7] m-4 rounded-xl ">
        <div className=' p-6 border-b-2 '>
                <h1 className='text-[18px] font-[700] text-[#1B3B5F] '>General Details</h1>
              <div className='flex items-center justify-start gap-32 text-sm font-medium pt-3 text-[#737373] '>
                <div>Ride ID </div>
                <div>Date Created </div>
                <div>Payment status</div>
                <div>Payment Method</div>
                <div>Ride status</div>
              </div>
                


              <div className='flex items-center justify-start gap-32 text-sm font-medium pt-3 text-[#737373] '>
                <div>53453</div>
                <div>Dec,20,2024 </div>
                <div className="ml-7">Not paid </div>
                <div className="ml-7">Paystack</div>
                <div className="ml-12">Placed</div>
              </div>
              <div  className=" text-sm font-medium pt-6 text-[#737373] ">Ride Distance</div>
              <div className=" text-sm font-medium pt-3 text-[#737373]">8.64km</div>


        </div>
        
         
        <div className=' p-6 border-b-2 '>
                <h1 className='text-[18px] font-[700] text-[#1B3B5F] '>Driver Details</h1>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] '>
                <div>Name</div>
                <div>Email</div>
                <div className="ml-20">Phone No</div>
              </div>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]'>
                <div>Name</div>
                <div>Email@gmail.com</div>
                <div>32432424</div>
                
            
          </div>
        </div>
        <div className=' p-6 border-b-2 '>
                <h1 className='text-[18px] font-[700] text-[#1B3B5F] '>Customer Details</h1>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] '>
                <div>Name</div>
                <div>Email</div>
                <div className="ml-20">Phone No</div>
              </div>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]'>
                <div>Name</div>
                <div>Email@gmail.com</div>
                <div>32432424</div>
                
            
          </div>
        </div>
        <div className=' p-6 border-b-2 '>
                <h1 className='text-[18px] font-[700] text-[#1B3B5F] '>Billing Details</h1>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] '>
                <div>Name</div>
                <div>Email</div>
                <div className="ml-20">Phone No</div>
              </div>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]'>
                <div>Name</div>
                <div>Email@gmail.com</div>
                <div>32432424</div>
                
            
          </div>
        </div>
        <div className=' p-6 border-b-2 '>
                <h1 className='text-[18px] font-[700] text-[#1B3B5F] '>Location Details</h1>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] '>
                <div>Pick Up Location</div>
                <div>Drop Off Location</div>
               
              </div>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]'>
                <div>Pick Up Location</div>
                <div>Drop Off Location</div>
          </div>
        </div>
        <div className=' p-6 border-b-2 '>
                <h1 className='text-[18px] font-[700] text-[#1B3B5F] '>Reviews</h1>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] '>
                <div>Customer Review</div>
                <div>Driver Review</div>
               
              </div>
              <div className='flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]'>
                <div>Customer Review</div>
                <div>Driver Review</div>
          </div>
        </div>
        </div>
      </DashBoardLayout>
    </>
  );
}

export default RideOrderview;
