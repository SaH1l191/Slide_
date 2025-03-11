'use client'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import Sheet from '../sheet/index'
import Image from 'next/image'
import Items from '../sidebar/items'
import { Separator } from '../../ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { HelpDuoToneWhite } from '@/icons'
import SubscriptionPlan from '../subscription-plan'
import UpgradeCard from '../sidebar/upgrade'
import Search from './search'
import CreateAutomation from '../create-automation'
import Notifications from './notifications'
import MainBreadCrumb from '../main-bread-crumb'

type Props = {
    slug: string
}

const Navbar = ({ slug }: Props) => {
    const pathname = usePathname()
    const path = pathname.split('/')
    let page = path[path.length - 1]
    // console.log(page, "paghe") 
    console.log("slug from sidebar", slug)

    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug

    return (
        currentPage && <div className='flex flex-col'>
            <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
                <span className='lg:hidden flex items-center flex-1 
                gap-x-2 '>

                    <Sheet trigger={<Menu />} side='left'
                        className='lg:hidden'>
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

                            <div className='px-16'>
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
                    </Sheet>
                </span>
                <Search/>
                <CreateAutomation/>
                <Notifications/>
            </div>
            <MainBreadCrumb page={page == slug ? 'Home' : page} slug={slug}/>
        </div>
    )
}

export default Navbar