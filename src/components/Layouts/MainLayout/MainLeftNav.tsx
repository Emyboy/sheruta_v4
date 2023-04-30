import Link from 'next/link'
import React from 'react'
import { RxRocket } from 'react-icons/rx'
import classnames from 'classnames'

type Props = {}

export default function MainLeftNav({ }: Props) {
  return (
    <div className='p-3'>
      <div className='flex gap-2'>
        <img
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt='avatar'
          className='w-12 h-12 rounded-full'
        />
        <div>
          <p className='font-bold'>First Name</p>
          <small className='text-dark_lighter'>@theUserName</small>
        </div>
      </div>
      <nav className="my-10">
        <ul>
          <EachNav active name='Get Started' />
          <EachNav active={false} name='Buy Tokens' />
          <EachNav active={false} name='Wallet' />
          <EachNav active={false} name='Settings' />
          <EachNav active={false} name='Logout' />
        </ul>
      </nav>
    </div>
  )
}

const EachNav = ({ name, active }: {name:string, active: boolean}) => {
  return <li>
    <Link href={`/`} className={classnames({"font-semibold border border-1 bg-theme_transparent border-theme_light": active},'flex gap-2 items-center hover:bg-theme_transparent  p-2 rounded-lg mb-3')}>
      <RxRocket /> <p>{name}</p>
    </Link>
  </li>
}
