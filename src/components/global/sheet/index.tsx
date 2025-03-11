import React from 'react'
import { 
    Sheet as ShadCnSheet, SheetContent, SheetTrigger
}
    from '../../ui/sheet'

type Props = {
    trigger: React.ReactNode
    children: React.ReactNode,
    className?: string
    side :  'top' | 'bottom' | 'left' | 'right'
}

const Sheet = ({ trigger, children, className,side }: Props) => {
    return (
        <ShadCnSheet>
            <SheetTrigger className={className}>{trigger}</SheetTrigger>
            <SheetContent side={side} className='p-0'>{children}</SheetContent>
        </ShadCnSheet>
    )
}

export default Sheet