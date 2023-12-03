import React from 'react'
import DiscussionBubble from '../../components/DiscussionBubble'

type Props = {
    isDisabled: boolean
}

export default function DiscussionTab({ isDisabled }: Props) {
    return (
        <div className="flex flex-col gap-10 min-h-screen">
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
    )
}