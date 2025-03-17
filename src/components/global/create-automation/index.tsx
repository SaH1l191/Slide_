'use client'

import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react' 
import { AutomationDuoToneWhite } from '@/icons' 
import { v4 } from 'uuid'
import Loader from '../loader/page'
import { useCreateAutomation } from '@/hooks/use-automation'

type Props = {}

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), [])

  console.log(mutationId)
  const { isPending, mutate } = useCreateAutomation(mutationId)

  return (
    <Button
      className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]"
      onClick={() =>
        mutate({
          name: 'Untitled11',
          id: mutationId,
          createdAt: new Date(),
          keywords: [],
        })
      }
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  )
}

export default CreateAutomation
