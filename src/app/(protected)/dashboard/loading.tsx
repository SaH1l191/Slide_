import Loader from '@/components/global/loader/page'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Loader state={true} color=''>...Loading</Loader>
    </div>
  )
}

export default Loading