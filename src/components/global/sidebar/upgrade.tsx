import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const UpgradeCard = (props: Props) => {
    return (
        <div className='bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3'>
            <span>Upgrade to {' '}
                <span className='bg-gradient-to-r from-[#CC3BD4] to-[#D054AC]
            font-bold bg-clip-text text-transparent'>
                    AI
                </span>
            </span>
            <p className='text-[#9B9CA0] font-light text-sm'>
                Unlock all features <br /> including AI and more
            </p>

            {/* payment button  */}
            <Button className='bg-gradient-to-br  from-[#766aa5] via-[#9434E6] to-[#804b83]  font-bold text-white rounded-full'>
                Upgrade
            </Button>
        </div>
    )
}

export default UpgradeCard