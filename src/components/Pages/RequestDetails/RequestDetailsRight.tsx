import React from 'react'
import RequestDetailsTab from './RequestDetailsTab'
import RequestDetailsDescription from './components/RequestDetailsDescription'
import Amenities from './components/Amenities'
import HouseRules from './components/HouseRules'
import Facilities from './components/Facilities'
import MapDetails from './components/MapDetails'

type Props = {}

export default function RequestDetailsRight({ }: Props) {
    return (
        <>
            <div className="bg-white w-screen lg:w-1/3 lg:max-h-screen lg:overflow-auto">
                <div className="bg-background shadow-sm h-12 border-b  sticky top-0">
                    <RequestDetailsTab />
                </div>
                <div className="flex-1 px-5 pt-5  h-full- pb-20">
                    <div className="flex flex-col gap-10 min-h-screen">
                        <RequestDetailsDescription />
                        <Amenities />
                        <Facilities />
                        <HouseRules />
                        <MapDetails />
                    </div>
                </div>
                <div className="bg-white px-2 h-16 shadow-lg border-1 border-t lg:sticky fixed w-screen lg:w-full bottom-0 flex justify-between items-center">
                    <div className="flex flex-col">
                        <small className='text-dark_lighter'>Rent per room</small>
                        <figure className='font-bold text-lg'>N45,000,000</figure>
                    </div>
                    <button className='bg-dark text-white px-6 py-3 rounded-md'>Reserve Room</button>
                </div>
            </div>
        </>
    )
}