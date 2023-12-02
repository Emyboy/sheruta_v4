'use client'
import React, { useState } from 'react'
import GuestRequestDetailsLayout from './GuestRequestDetails/GuestRequestDetailsLayout'
import RequestDetailsDescription from './components/RequestDetailsDescription'
import { SpaceRequestData } from './HostRequestDetails'
import GuestRequestDetailsRight from './GuestRequestDetails/GuestRequestDetailsRight'

type Props = {
    requestData: SpaceRequestData
}

export default function GuestRequestDetails({ requestData }: Props) {
    const [showDiscussion, setShowDiscussion] = useState(false)
    return (
        <div className='min-h-[100vh] max-h-[100vh] flex justify-center  md:p-[50px]'>
            <GuestRequestDetailsLayout leftComponent={<GuestRequestDetailsRight />}>
                {
                    showDiscussion ? <GuestRequestDetailsRight /> :
                        <RequestDetailsDescription requestData={requestData} seeking />
                }
            </GuestRequestDetailsLayout>
        </div>
    )
}