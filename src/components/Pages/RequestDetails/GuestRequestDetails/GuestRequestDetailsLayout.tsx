'ues client'
import React from 'react'

type Props = {
    children: React.ReactNode
    leftComponent: React.ReactNode
}

export default function GuestRequestDetailsLayout({ children, leftComponent }: Props) {
    return (
        <div className='border md:rounded-xl min-h-[100vh] max-h-[100vh] md:min-h-[90vh] md:max-h-[90vh] w-full  lg:w-[1200px] flex overflow-hidden shadow-md'>
            <div className='bg-white flex-1 min-h-[90vh] p-4 overflow-y-auto'>
                {children}
            </div>
            <div className='overflow-x-hidden overflow-y-auto flex-1 min-h-[90vh] border-l lg:flex flex-col hidden'>
                {leftComponent}
            </div>
        </div>
    )
}