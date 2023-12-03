'use client'
import React, { useState } from 'react'
import RequestDetailsLeft from './RequestDetailsLeft'
import RequestDetailsRight from './RequestDetailsRight/RequestDetailsRight'
import { UserInfo } from '@/interface/auth.interface'
import { MessageData } from '@/interface/message.interface'
import { RoomRequest } from '@/interface/request.interface'

export type SpaceRequestData = {
    room_request: RoomRequest;
    user_info: UserInfo;
    comments: MessageData[]
}

type Props = {
    requestData: SpaceRequestData
}

export default function HostRequestDetails(props: Props) {
    const [fullScreen, setFullScreen] = useState(false);
    const { requestData } = props;

    return (
        <>
            <div className='h-screen- flex-col lg:flex-row bg-black' style={{ display: 'flex' }}>
                <RequestDetailsLeft 
                    images={requestData.room_request.image_urls} 
                    onFullScreenToggle={() => setFullScreen(!fullScreen)} 
                    fullScreen={fullScreen} 
                />
                {!fullScreen && <RequestDetailsRight requestData={requestData} />}
            </div>
        </>
    )
}