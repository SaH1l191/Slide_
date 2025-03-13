import Sidebar from '@/components/global/sidebar'
import React from 'react'
import Navbar from '@/components/global/navbar/index'

type Props = {
  children: React.ReactNode
  params: { slug: string }
}
//slug is automatically received
const Layout = ({ children, params }: Props) => {
  console.log("from layout=> slug=>", params.slug) //1

 
  return (
    <div className='p-3'>
      <Sidebar slug={params.slug} />
      <div className=' lg:ml-[250px] 
      lg:pl-10 
      lg:py-5 
      flex 
      flex-col 
      overflow-auto'>
        <Navbar slug={params.slug} />
        {children}
      </div>

    </div>
  )
}

export default Layout 