import React from 'react'
import { EachAmenity } from './Amenities'

type Props = {}

export default function Facilities({ }: Props) {
  return (
    <section className='flex flex-col gap-5'>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h6 className='mb-1'>Facilities</h6>
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