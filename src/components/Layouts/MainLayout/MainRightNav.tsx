import Link from 'next/link'
import React from 'react'
import { HiOutlineChatBubbleBottomCenterText, HiOutlineUsers } from 'react-icons/hi2'

type Props = {}

export default function ffMainRightNav({ }: Props) {
    return (
			<div>
				<div className="mt-[64px]">
					<div className="border-b border-1 px-4 h-14 flex flex-col justify-center">
						<div className="text-dark_light flex items-center gap-2 font-medium">
							<HiOutlineChatBubbleBottomCenterText
								className="text-theme"
								size={25}
							/>{' '}
							<h6>
								Unread Message <span className="text-theme">3</span>
							</h6>
						</div>
					</div>
					<ul>
						<EachConversation />
						<EachConversation />
						<EachConversation />
						<EachConversation />
					</ul>
					<p className="cursor-pointer text-xs text-theme text-center py-4">
						See More
					</p>
				</div>
				<div className="">
					<div className="border-b border-1 p-4 ">
						<div className="text-dark_light flex items-center gap-2 font-medium">
							<HiOutlineUsers className="text-theme" size={25} />{' '}
							<h6>
								Matches <span className="text-theme">82</span>
							</h6>
						</div>
					</div>
					<ul>
						<EachConversation />
						<EachConversation />
					</ul>
					<p className="cursor-pointer text-xs text-theme text-center py-4">
						See More
					</p>
				</div>
			</div>
		)
}

const EachConversation = () => {
    return <li className='p-3 border-b border-1  hover:bg-green-50'>
        <Link href={`/`}>
            <article>
                <div className="flex gap-2">
                    <img src="/assets/img/user.jpg" alt='avatar' className='h-10 w-10 rounded-full' />
                    <div className="flex flex-col">
                        <h6 className='text-sm font-medium'>The first name</h6>
                        <small className='text-dark_lighter text-xs'>How va, you free ??</small>
                    </div>
                </div>
            </article></Link>
    </li>
}