import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function RequestDetailsTab({ }: Props) {
    return (
        <div className='h-full'>
            <ul className='h-full flex gap-0'>
                <EachTab title='Summary' active />
                <EachTab title='Discussions' />
                <EachTab title='Inspection' />
                <EachTab title='Map' />
            </ul>
        </div>
    )
}

const EachTab = ({ title, active }: { title: string, active?: boolean }) => {
    return <li className='h-full'>
        <Link href={`/`} className={classNames({ "border-theme font-semibold bg-white": active }, { "border-background font-normal text-dark_lighter bg-background": !active }, 'border-b-4  h-full py-2 px-4 flex flex-col justify-center items-center w-fit ')}>
            <span>{title}</span>
        </Link>
    </li>
}