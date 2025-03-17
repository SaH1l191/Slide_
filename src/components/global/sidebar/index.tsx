"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import Items from './items'
import { Separator } from '../../ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { HelpDuoToneWhite } from '@/icons'
import SubscriptionPlan from '../subscription-plan'
import UpgradeCard from './upgrade'

type Props = {
  slug: string
}

const Sidebar = ({ slug }: Props) => {

  const pathname = usePathname()
  const path = pathname.split('/')
  let page = path[path.length - 1] 
  console.log(page, "paghe")  
  // console.log("slug from sidebar", slug)

  return (
    <div className='w-[250px] border-2  fixed left-0 
    border-[#545454] bg-gradient-to-b from-[#7688DD] via-[#171717]
    hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden lg:inline-block'>

      <div className='flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] 
      bg-opacity-90 bg-clip-padding backdrop:blur-3xl '>

        <div className='flex gap-x-2 items-center p-5 justify-center'>
          
          <Image src={'/log.jpg'} alt='image'
            className='bg-transparent rounded-full '
            width={80} height={100} />
        </div>

        <div className='flex flex-col py-3'>
          <Items page={page} slug={slug} />
        </div>

        <div className='px-8 '>
          <Separator orientation='horizontal' className='bg-[#3d3d3f]' />
        </div>

        <div className='px-3 flex flex-col gap-y-5'>
          <div className='flex gap-x-2'>
            <ClerkAuthState />
            <p className='text-[#9B9CA0]'>Profile</p>
          </div>
          <div className='flex gap-x-2'>
            <HelpDuoToneWhite />
            <p className='text-[#9B9CA0]'>Help</p>
          </div>
        </div>

        <SubscriptionPlan type='FREE' >
          <div className='flex flex-1 flex-col justify-end'>
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  )
}

export default Sidebar