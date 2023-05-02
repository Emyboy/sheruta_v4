import classNames from 'classnames';
import React from 'react'
import { HiEllipsisHorizontal } from 'react-icons/hi2'

type Props = {
    replay?: boolean;
}

export default function DiscussionBubble({ replay }: Props) {
    return (
        <div>
            <div className='flex gap-3'>
                <img src='/assets/img/user.jpg' alt='avatar' className='h-10 w-10 rounded-full' />
                <div className={classNames({ "bg-green-100": replay }, { "bg-gray-100": !replay }, ' rounded-md p-2')}>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h6>First name</h6>
                            <button className='text-dark_lighter'>
                                <HiEllipsisHorizontal size={25} />
                            </button>
                        </div>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque placeat qux alias hi.</p>
                        <div className="flex justify-between text-dark_lighter">
                            <small>20 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}