
import React from 'react'

import MainNavbar from './MainNavbar'
import MainFooter from './MainFooter'

type Props = {
    leftComponent: React.ReactElement,
    centerComponent: React.ReactElement,
    rightComponent: React.ReactElement
}

export default function MainLayout({ centerComponent, leftComponent, rightComponent }: Props) {
    return (
        <div className=' '>
            <MainNavbar />

            <div className='bg-background- flex-1 overflow-y-auto flex justify-center pb-16'>
                <div className='flex h-full- justify-between w-screen lg:w-screen xl:w-2/3  px-0'>
                    <aside className='border-r border-1 w-1/3 hidden lg:visible justify-end lg:flex bg-purple-200- ' >
                        <div className='bg-green-100- fixed  h-96 w-56'>
                            
                            {leftComponent}
                        </div>
                    </aside>
                    <main className='lg:w-2/3 w-screen py-3'>
                        {centerComponent}
                    </main>
                    <div className='border-l border-1 w-1/3 hidden lg:visible justify-start lg:flex bg-purple-200- '>
                        <div className='bg-green-100- fixed  h-96 w-56'>
                            
                            {rightComponent}
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

