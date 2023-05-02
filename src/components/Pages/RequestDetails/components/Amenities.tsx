import React from 'react'
import { BiShower } from 'react-icons/bi'

type Props = {}

export default function Amenities({ }: Props) {
    return (
        <section className='flex flex-col gap-5'>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h6 className='mb-1'>Amenities</h6>
                    <hr />
                </div>
                <div className="flex flex-wrap gap-3 justify-between">
                    {
                        Array(8).fill(null).map(val => {
                            return <EachAmenity />
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export const EachAmenity = () => {
    return <span className='text-dark_light text-lg p-0 px-2 rounded-lg flex gap-1 items-center'>
        <BiShower /> <small>Air Condition</small>
    </span>
}