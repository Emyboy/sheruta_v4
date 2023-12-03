import React from 'react'
import { EachAmenity } from './Amenities'
import { Facility } from '@/interface/options.interface'

type Props = {
  facilities: Facility[]
}

export default function Facilities({ facilities }: Props) {
  return (
    <section className='flex flex-col gap-5'>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h6 className='mb-1'>Facilities</h6>
          <hr />
        </div>
        <div className="flex flex-wrap gap-3 ">
          {
            facilities.map(val => {
              return <EachAmenity key={`facility-${val.id}`} data={val} />
            })
          }
        </div>
      </div>

    </section>
  )
}