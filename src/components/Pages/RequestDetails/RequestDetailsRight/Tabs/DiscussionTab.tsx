import React from 'react'
import DiscussionBubble from '../../components/DiscussionBubble'

type Props = {}

export default function DiscussionTab({ }: Props) {
    return (
        <div className="flex flex-col gap-10 min-h-screen">
            <div className="flex flex-col gap-3">
                <DiscussionBubble />
                <div className="pl-16">
                    <DiscussionBubble />
                </div>
            </div>
            <DiscussionBubble />
            <DiscussionBubble />
            <div className="flex flex-col gap-3">
                <DiscussionBubble />
                <div className="pl-16">
                    <DiscussionBubble />
                </div>
            </div>
            <DiscussionBubble />
            <DiscussionBubble />
        </div>
    )
}