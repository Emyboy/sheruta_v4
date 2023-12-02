import React from 'react'
import DiscussionBubble from '../components/DiscussionBubble'
import _ChatInput from '@/packages/ui/SChatInput'
import { HiArrowPath } from 'react-icons/hi2'

type Props = {}

export default function GuestRequestDetailsRight({ }: Props) {
    return (
        <div className='min-h-[90vh] flex flex-col'>
            <div className='bg-white h-[8%] z-30 border-b shadow-sm flex items-center p-3'>
                <h3 className='text-lg font-medium text-dark_lighter'>Discussions</h3>
            </div>
            <div className='max-h-[84%] z-10 overflow-y-auto p-3'>
                
                <div className="flex flex-col gap-10 ">
                    <div className="flex flex-col gap-3">
                        <DiscussionBubble />
                        <div className="pl-14">
                            <DiscussionBubble replay />
                        </div>
                    </div>
                    <DiscussionBubble />
                    <DiscussionBubble />
                    <div className="flex flex-col gap-3">
                        <DiscussionBubble />
                        <div className="pl-14">
                            <DiscussionBubble replay />
                        </div>
                    </div>
                    <DiscussionBubble />
                    <DiscussionBubble />
                </div>
                <center className='my-[80px] '>
                    <button className='flex gap-2 items-center text-dark_lighter hover:text-theme'>
                        <HiArrowPath /> <p>Load More</p>
                    </button>
                </center>
            </div>
            <div className='bg-white h-[8%] z-30 border-t'>
                <_ChatInput />
            </div>
        </div>
    )
}