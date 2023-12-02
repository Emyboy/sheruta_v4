import React from 'react'
import RequestDetailsDescription from '../../components/RequestDetailsDescription'
import Amenities from '../../components/Amenities'
import Facilities from '../../components/Facilities'
import HouseRules from '../../components/HouseRules'
import MapDetails from '../../components/MapDetails'
import { SpaceRequestData } from '../../HostRequestDetails'

type Props = {
    requestData: SpaceRequestData
}

export default function SummaryTab({ requestData }: Props) {
    return (
        <div className="flex flex-col gap-10 min-h-screen">
            <RequestDetailsDescription requestData={requestData} />
            <Amenities />
            <Facilities />
            <HouseRules />
            <MapDetails />
        </div>
    )
}