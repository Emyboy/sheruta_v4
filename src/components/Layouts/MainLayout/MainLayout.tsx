
import React from 'react'

import MainNavbar from './MainNavbar'
import MainLeftNav from './MainLeftNav'
import MainFooter from './MainFooter'
import MainRightNav from './MainRightNav'

type Props = { children: React.ReactElement[] | React.ReactElement }

export default function MainLayout({ children }: Props) {
    return (
        <div className=' '>
            <MainNavbar />

            <div className='bg-background- flex-1 overflow-y-auto flex justify-center pb-16'>
                <div className='flex h-full- justify-between w-screen lg:w-screen xl:w-2/3  px-0'>
                    <aside className='border-r border-1 w-1/3 hidden lg:visible justify-end lg:flex bg-purple-200- ' >
                        <div className='bg-green-100- fixed  h-96 w-56'>
                            <MainLeftNav />
                        </div>
                    </aside>
                    <main className='lg:w-2/3 w-screen py-3'>
                        {children}
                    </main>
                    <div className='border-l border-1 w-1/3 hidden lg:visible justify-start lg:flex bg-purple-200- '>
                        <div className='bg-green-100- fixed  h-96 w-56'>
                            <MainRightNav />
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

