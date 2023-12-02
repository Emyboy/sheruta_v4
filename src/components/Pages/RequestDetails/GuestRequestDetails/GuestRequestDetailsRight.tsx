import React from 'react'
import DiscussionBubble from '../components/DiscussionBubble'

type Props = {}

export default function GuestRequestDetailsRight({ }: Props) {
    return (
        <div className='min-h-[90vh] flex flex-col'>
            <div className='bg-white h-[10%] z-30 border-b'></div>
            <div className='max-h-[80%] z-10 overflow-y-auto p-4'>
                {new Array(10).fill(null).map(_ => {
                    return <div className="flex flex-col gap-10 min-h-screen" key={Math.random()}>
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
                })}
            </div>
            <div className='bg-white h-[10%] z-30 border-b'></div>
        </div>
    )
}