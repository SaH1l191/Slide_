import Sidebar from '@/components/global/sidebar'
import React from 'react' 
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import {  PrefetchUserAutomations,PrefetchUserProfile } from '../../../../react-query/prefetch';
import InfoBar from '@/components/global/infobar/index';
 
type Props = {
  children: React.ReactNode
  params: { slug: string }
}
//slug is automatically received
const Layout = async ({ children, params }: Props) => {
  console.log("from layout=> slug=>", params.slug) //1

  const query = new QueryClient()

  await PrefetchUserProfile(query)
  await PrefetchUserAutomations(query) 

  {/* used to set the cache data accessible for the server  */ }
  return (


    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        <Sidebar slug={params.slug} />
        <div
          className="
           lg:ml-[250px] 
           lg:pl-10 
           lg:py-5 
           flex 
           flex-col 
           overflow-auto
           "
        >
          <InfoBar slug={params.slug} />
          {children}
        </div>
      </div>
    
    </HydrationBoundary>
  )
}

export default Layout 