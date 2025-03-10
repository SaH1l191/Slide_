import React from 'react'

type Props = {
  children: React.ReactNode
  params: { slug: string }
}
//slug is automatically received
const Layout = ({ children, params }: Props) => {
  console.log(children, params)


  return (
    <div> 
      {/* <Sidebar /> */}

      {children}
    </div>
  )
}

export default Layout