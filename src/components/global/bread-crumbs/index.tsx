import { PencilDuoToneBlack } from '@/icons'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import ActiveAutomationButton from '../activate-automation-button'

type Props = {
  id: string
}

const AutomationsBreadCrumbs = ({ id }: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex   items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" className='flex-shrink-0' />
        <span className='flex gap-x-3 items-center min-w-0'>
          <p className="text-[#9B9CA0] truncate">This is the automation title</p>
          <span className="cursor-pointer flex-shrink-0 hover:opacity-75 duration-100 transition">
            <PencilDuoToneBlack />
          </span>
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All states are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p>
            Changes  saved
          </p>
          {/* <p className='text-text-secondary text-sm truncate min-w-0'>
            Undo | Redo
          </p> */}
        </div>
      </div>
      <ActiveAutomationButton />
    </div>
  )
}

export default AutomationsBreadCrumbs