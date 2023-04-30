import { EachComment } from '@/components/Pages/Feed/EachRequest'
import React from 'react'

type Props = {}

export default function DetailsPage({ }: Props) {
  return (
    <div className='bg-yellow-100 h-screen- flex-col md:flex-row' style={{ display: 'flex' }}>
      <div className="bg-black h-60 md:h-screen w-screen flex justify-center items-center md:w-3/5">
        <img src={'/assets/img/room-1.jpg'} className='w-full' />
      </div>
      <div className="bg-background w-screen md:w-1/2 max-h-screen overflow-auto">
        <div className="bg-white h-16 shadow-sm sticky top-0">

        </div>
        <div className="flex-1 p-5">
          <EachComment />
          <EachComment />
          <EachComment />
          <EachComment />
          <EachComment />
          <EachComment />
        </div>
        <div className="bg-white h-16 shadow-sm sticky bottom-0"></div>
      </div>
    </div>
  )
}