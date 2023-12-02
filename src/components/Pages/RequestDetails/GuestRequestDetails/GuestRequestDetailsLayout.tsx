import React from 'react'

type Props = {
    children: React.ReactNode
    leftComponent: React.ReactNode
}

export default function GuestRequestDetailsLayout({ children, leftComponent }: Props) {
    return (
        <div className='border md:rounded-xl min-h-[100vh] max-h-[100vh] md:min-h-[90vh] md:max-h-[90vh] w-full md:w-[90vw] lg:w-[1200px] flex overflow-hidden'>
            <div className='bg-white flex-1 min-h-[90vh] p-4'>
                {children}
            </div>
            <div className='overflow-x-hidden overflow-y-auto flex-1 min-h-[90vh] border-l flex flex-col'>
                {leftComponent}
            </div>
            
        </div>
    )
}