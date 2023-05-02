import React from 'react'
import RequestDetailsDescription from '../../components/RequestDetailsDescription'
import Amenities from '../../components/Amenities'
import Facilities from '../../components/Facilities'
import HouseRules from '../../components/HouseRules'
import MapDetails from '../../components/MapDetails'

type Props = {}

export default function SummaryTab({ }: Props) {
    return (
        <div className="flex flex-col gap-10 min-h-screen">
            <RequestDetailsDescription />
            <Amenities />
            <Facilities />
            <HouseRules />
            <MapDetails />
        </div>
    )
}