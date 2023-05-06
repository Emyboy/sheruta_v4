import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowRightOnRectangle, HiOutlineBanknotes, HiOutlinePlayCircle, HiOutlineRocketLaunch, HiOutlineVideoCamera, HiOutlineWallet, HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import classnames from 'classnames'
import { IconBaseProps } from 'react-icons'

type Props = {}

export default function MainLeftNav({ }: Props) {
  return (
    <div className='p-3'>
      <Link href={`/user/user13234`} className='flex gap-2'>
        <img
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt='avatar'
          className='w-12 h-12 rounded-full'
        />
        <div className='flex flex-col gap-0'>
          <p className='font-medium'>First Name</p>
          <small className='text-dark_lighter'>@theUserName</small>
        </div>
      </Link>
      <nav className="my-8">
        <ul>
          <EachNav Icon={(p: IconBaseProps) => <HiOutlineRocketLaunch {...p} />} active name='Get Started' />
          <EachNav Icon={(p: IconBaseProps) => <HiOutlineVideoCamera {...p} />} active={false} name='Inspections' />
          <EachNav Icon={(p: IconBaseProps) => <HiOutlineBanknotes {...p} />} active={false} name='Buy Tokens' />
          <EachNav Icon={(p: IconBaseProps) => <HiOutlineWallet {...p} />} active={false} name='Wallet' />
          <EachNav Icon={(p: IconBaseProps) => <HiOutlinePlayCircle {...p} />} active={false} name='How It Works' />
          <EachNav Icon={(p: IconBaseProps) => <HiOutlineWrenchScrewdriver {...p} />} active={false} name='Settings' />
          <hr className='mb-3' />
          <EachNav Icon={(p: IconBaseProps) => <HiOutlineArrowRightOnRectangle {...p} />} active={false} name='Logout' />
        </ul>
      </nav>
    </div>
  )
}

const EachNav = ({ name, active, Icon }: { name: string, active: boolean, Icon: any }) => {
  return <li>
    <Link href={`/`} className={classnames({ "font-medium border border-1 bg-theme_transparent border-theme_light": active }, { "text-dark_light": !active }, 'flex gap-2 items-center hover:bg-theme_transparent hover:font-medium  p-2 rounded-lg mb-3')}>
      <Icon size={25} /> <p>{name}</p>
    </Link>
  </li>
}
