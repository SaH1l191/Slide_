import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="flex lg:flex overflow-hidden gap-x-2 border-[1px]
     border-[#3352CC] rounded-full px-4 py-1 items-center flex-1 group focus-within:border-[#3352CC]">

      <Input
        placeholder="Search by name, email or status"
        className="  border-none focus:outline-none  
         flex-1"
      />
      <SearchIcon className='hover:cursor-pointer' color="#3352CC" />
    </div>
  )
}

export default Search
