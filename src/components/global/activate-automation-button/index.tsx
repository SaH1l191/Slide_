import { Button } from '@/components/ui/button' 
import React from 'react'
import Loader from '../loader/page'
import { ActiveAutomation } from '@/icons/active-automation'

type Props = {}

const ActiveAutomationButton = (props: Props) => {
  return (
    <div>
       <Button className="mx-2 lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]">
        <Loader state={false}>
                <ActiveAutomation/>
                <p className='lg:inline-block hidden'>Activate</p>
        </Loader>   
       </Button>
    </div>
  )
}

export default ActiveAutomationButton