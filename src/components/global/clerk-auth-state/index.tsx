
import {
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
} from '@clerk/nextjs'
import React from 'react'
import Loader from '../loader/page'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'




type Props = {}

const ClerkAuthState = (props: Props) => {
    return (
        <>

            {/* loading state  */}
            <ClerkLoading>
                <Loader state>
                    <></>
                </Loader>
            </ClerkLoading>


            {/* sided out state */}
            <SignedOut>
                <SignInButton>
                    <Button className='rounded-xl bg-[#252525] hover:bg-[#252525]/70
                        text-white'>
                        <User /> Sign In
                    </Button>
                </SignInButton>
            </SignedOut>

            {/* signed in state  */}
            <SignedIn>
                <UserButton>
                    <UserButton.UserProfileLink label='Dashboard' url={`/dashboard`}
                        labelIcon={<User size={16} />} />
                </UserButton>
            </SignedIn>


        </>
    )
}

export default ClerkAuthState