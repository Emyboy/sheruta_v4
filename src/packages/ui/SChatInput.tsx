import React from 'react'
import { HiOutlinePaperAirplane } from 'react-icons/hi2'

type Props = {
    isDisabled?: boolean
}

export default function _ChatInput({ isDisabled }: Props) {
    return (
        <form className="flex items-center justify-between p-3 h-full gap-2">
            <input placeholder={isDisabled ? "This content is currently unavailable" : 'Start typing...'} className='h-full flex-1 pl-2 outline-none text-sm' disabled={isDisabled} />
            <button className='text-dark_lighter text-2xl rounded-full flex justify-center items-center ' disabled={isDisabled}>
                <HiOutlinePaperAirplane />
            </button>
        </form>
    )
}