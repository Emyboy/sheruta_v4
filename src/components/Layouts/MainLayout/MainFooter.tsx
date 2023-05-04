import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IconBaseProps } from 'react-icons'
import { HiBellAlert, HiHome, HiOutlineBell, HiOutlineHome, HiOutlineUser, HiOutlineWallet, HiPlus, HiUser, HiWallet } from 'react-icons/hi2'

type Props = {
  activePage?: string
}

export default function MainFooter({ }: Props) {
  const [activePage, setActivePage] = useState<string>('home')
  const router = useRouter();

  return (
    <footer className="bg-dark h-16 items-center fixed bottom-0 py-3 px-2 z-50 w-full visible lg:hidden text-gray-300 text-3xl flex justify-between">
      {/* <HiOutlineHome />
      <HiPlus />
      <HiOutlineUser /> */}
      <EachNav
        title='Home'
        onClick={() => {
          setActivePage('home')
          router.push('/')
        }}
        active={activePage === 'home'}
        ActiveIcon={(p: IconBaseProps) => <HiHome {...p} />}
        Icon={(p: IconBaseProps) => <HiOutlineHome {...p} />}
      />
      <EachNav
        title='Wallet'
        onClick={() => setActivePage('wallet')}
        active={activePage === 'wallet'}
        ActiveIcon={(p: IconBaseProps) => <HiWallet {...p} />}
        Icon={(p: IconBaseProps) => <HiOutlineWallet {...p} />}
      />
      <EachNav
        title='Upload'
        onClick={() => setActivePage('upload')}
        active={activePage === 'upload'}
        ActiveIcon={(p: IconBaseProps) => <HiPlus {...p} />}
        Icon={(p: IconBaseProps) => <HiPlus {...p} />}
      />
      <EachNav
        title='Activities'
        onClick={() => setActivePage('notifications')}
        active={activePage === 'notifications'}
        ActiveIcon={(p: IconBaseProps) => <HiBellAlert {...p} />}
        Icon={(p: IconBaseProps) => <HiOutlineBell {...p} />}
      />
      <EachNav
        title='Profile'
        onClick={() => {
          setActivePage('profile')
          router.push('/user/johnDoe')
        }}
        active={activePage === 'profile'}
        ActiveIcon={(p: IconBaseProps) => <HiUser {...p} />}
        Icon={(p: IconBaseProps) => <HiOutlineUser {...p} />}
      />
    </footer>
  )
}

const EachNav = ({
  active,
  ActiveIcon,
  Icon,
  onClick,
  title
}: {
  active: boolean
  ActiveIcon: (p: any) => React.ReactElement
  Icon: (p: any) => React.ReactElement
  onClick: () => void,
  title: string
}) => {
  return <div className={classNames({ "text-theme_light": active }, "flex flex-col items-center gap-1")}>
    <button onClick={onClick} className={''}>{active ? <ActiveIcon size={27} /> : <Icon size={27} />}</button>
    <small className='text-xs font-light'>{title}</small>
  </div>
}
