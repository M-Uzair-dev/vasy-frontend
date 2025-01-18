import React from 'react'
import DashBoardLayout from '../layout/DashBoardLayout'
import Generaldetails from '../components/Driversdetails/Generaldetails'

function PendingDrivers() {
  return (
    <div>
      <DashBoardLayout heading={"Pending Drivers"} showSearch>
      <Generaldetails />
      <div className='mb-20'></div>
    </DashBoardLayout>
    </div>
  )
}

export default PendingDrivers
