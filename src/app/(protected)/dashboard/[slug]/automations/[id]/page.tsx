
import { getAutomationInfo } from '@/actions/automations'
import Trigger from '@/components/global/automations/trigger'
import AutomationsBreadCrumbs from '@/components/global/bread-crumbs'
import { Warning } from '@/icons'
import React from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { PrefetchUserAutomation } from '@/react-query/prefetch'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const info = await getAutomationInfo(params.id)
  return {
    title: info?.data?.name
  }
}


const page = async ({ params }: Props) => {

  console.log("logging prop id from automation id ",params.id)
  //ssr implementation 
  const query = new QueryClient() //server side component 
  await PrefetchUserAutomation(query, params.id)


  // The HydrationBoundary component is used to handle server-side rendered (SSR) data. It receives the dehydrated state from the query client (a cache) and provides it to the client-side.
  // dehydrate(query) takes the current state of the query cache and prepares it to be sent to the client
  return (
    //dehydrate(query) is used to prepare the query cache for hydration on the client side.
    // The HydrationBoundary component is used to handle server-side rendered (SSR) data. It receives the dehydrated state from the query client (a cache) and provides it to the client-side
    // in the form of a plain object .this saves to make the api call  .
    <HydrationBoundary state={dehydrate(query)}>
      <div className='flex flex-col items-center gap-y-20'>
        <AutomationsBreadCrumbs id={params.id} /><div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2">
            <Warning />
            When...
          </div>
          <Trigger id={params.id} />
        </div>
      </div>
    </HydrationBoundary>


//when clikcing on this automation/[id] the query(ie automation name) will be fetched with the default 
//html page returned from the server . saving the need to make  the additional API requests.
  )
}

export default page