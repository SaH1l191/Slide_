import { cn } from '@/lib/utils'
import React from 'react'
import { Spinner } from './spinner'

type Props = {
    state: boolean
    children: React.ReactNode
    className?: string
    color?: string
}

const Loader = ({ state, children, className, color }: Props) => {

    return state ?
        (<div className={cn(className)}>
            <Spinner color={color} />
        </div>) :
        (children)

}

export default Loader