import React from 'react'
import GuestRequestDetailsLayout from './GuestRequestDetails/GuestRequestDetailsLayout'
import RequestDetailsDescription from './components/RequestDetailsDescription'
import { SpaceRequestData } from './HostRequestDetails'
import GuestRequestDetailsRight from './GuestRequestDetails/GuestRequestDetailsRight'

type Props = {
    requestData: SpaceRequestData
}

export default function GuestRequestDetails({ requestData }: Props) {
    return (
        <div className='min-h-[100vh] max-h-[100vh] flex justify-center items-center'>
            <GuestRequestDetailsLayout leftComponent={<GuestRequestDetailsRight />}>
                <RequestDetailsDescription requestData={requestData} />
            </GuestRequestDetailsLayout>
        </div>
    )
}