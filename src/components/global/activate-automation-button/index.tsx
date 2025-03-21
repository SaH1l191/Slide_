import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader/page'
import { ActiveAutomation } from '@/icons/active-automation'
import { useQueryAutomation } from '@/hooks/user-queries'
import { useMutationData } from '@/hooks/use-mutation-data'
import { activateAutomation } from '@/actions/automations'
import { Loader2 } from 'lucide-react'

type Props = { id: string }

const ActiveAutomationButton = ({ id }: Props) => {


//   const queryResult = useQueryAutomation(id);
// const data = queryResult.data;
  const { data } = useQueryAutomation(id)
  console.log("logging data from usequeryautomtion",data)

  const { mutate, isPending } = useMutationData(['activate'],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    'automation-info')

  return (
    <div>
      <Button className="mx-2 lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]"
      onClick={() => mutate({ state: !data?.data?.active })}>
        <Loader state={false}>
        {isPending ? <Loader2 className="animate-spin" /> : <ActiveAutomation />}
          {data?.data?.active ? 'Disable' : 'Activate'}
        </Loader>
      </Button>
    </div>
  )
}

export default ActiveAutomationButton