import React from 'react'
import { BiShower } from 'react-icons/bi'
import { SpaceRequestData } from '../HostRequestDetails'
import { Amenity } from '@/interface/options.interface'
import { HiOutlineCheckCircle } from 'react-icons/hi2'

type Props = {
    amenities: Amenity[]
}


export default function Amenities({ amenities }: Props) {
    return (
        <section className='flex flex-col gap-5'>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h6 className='mb-1'>Amenities</h6>
                    <hr />
                </div>
                <div className="flex flex-wrap gap-3">
                    {
                        amenities.map(val => {
                            return <EachAmenity key={`amenities-${val.id}`} data={val} />
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export const EachAmenity = ({ data }: { data: Amenity }) => {
    if(!data){
        return null
    }
    return <span className='text-dark_light text-lg p-0 px-2 rounded-lg flex gap-1 items-center'>
        <HiOutlineCheckCircle className='text-theme' /> <small>{data?.name}</small>
    </span>
}