import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { RiHome7Line } from 'react-icons/ri'


type Props = {}

export default function MainNavbar({ }: Props) {
    return (
        <>

            <header className='bg-dark h-16 flex items-center justify-center fixed w-screen z-50'>
                <div className='h-20 flex items-center justify-between w-full xl:w-2/3 md:w-full px-5 md:px-5 xl:px-0'>
                    <Link href={`/`} className='flex items-center gap-2'>
                        <img alt='brand' src={`/icon_green.png`} className='w-7 sm:w-10' />
                        <img alt='brand' src={`/logo_text_white.png`} className='w-20 sm:w-32' />
                    </Link>
                    <nav className='hidden lg:visible lg:flex items-center gap-2'>
                        <EachNav active />
                        <EachNav active={false} />
                        <EachNav active={false} />
                        <EachNav active={false} />
                    </nav>

                    <nav className='flex items-center gap-2'>
                        <Link onClick={() => alert('hi')} href='/' className='hidden sm:visible md:flex outline-1 outline px-5 py-2 rounded-lg text-theme_light text-md hover:bg-theme hover:text-white hover:outline-none'>
                            Post Request
                        </Link>
                        <Link href='/login' className='bg-theme  text-white px-6 py-2 text-md rounded-lg hover:bg-theme_light'>
                            Login
                        </Link>
                    </nav>
                </div>
            </header>
            <div className='h-16' />
        </>
    )
}

const EachNav = ({ active }: { active: boolean }) => {
    return <Link className={classNames({ "text-accent bg-theme_transparent": active }, { "text-white": !active }, 'hover:bg-theme_transparent hover:text-accent_light h-12 w-12 rounded-lg flex justify-center items-center ')} href={`/`}>
        <RiHome7Line size={30} />
    </Link>
}

