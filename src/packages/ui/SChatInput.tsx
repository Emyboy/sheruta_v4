import React from 'react'
import { HiOutlinePaperAirplane } from 'react-icons/hi2'

type Props = {}

export default function _ChatInput({ }: Props) {
    return (
        <form className="flex items-center justify-between p-3 h-full gap-2">
            <input placeholder='Start typing...' className='h-full flex-1 pl-2 outline-none text-sm' />
            <button className='text-dark_lighter text-2xl rounded-full flex justify-center items-center '>
                <HiOutlinePaperAirplane />
            </button>
        </form>
    )
}