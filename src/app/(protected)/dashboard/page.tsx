import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation'

type Props = {}

const page = async (props: Props) => {

  const user = await onBoardUser()


  //both checks for existing user or new user (check server actions for that ) 

  if(user.status == 201){
    console.log(user.data)
  }
  if (user.status === 200 || user.status === 201) {
    return redirect(`/dashboard/${user.data?.firstname}${user.data?.lastname}`)
  }

  return redirect(`/sign-in`)
}

export default page