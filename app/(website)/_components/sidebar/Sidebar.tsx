import React from 'react'

const Sidebar = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className=''>
        <main className='lg:pl-20 h-full bg-red-200'>
            {children}
        </main>
    </div>
  )
}

export default Sidebar