import EachInspection from '@/components/Pages/Inspections/EachInspection'
import React from 'react'

type Props = {}

export default function InspectionsPage({}: Props) {
  return (
    <div className='flex flex-col'>
        <div className='px-4 border-b h-14 flex flex-col justify-center'>
            <h5 className='font-medium'>My Inspections</h5>
        </div>
        <div className='flex-1'>
            <EachInspection />
            <EachInspection />
            <EachInspection />
            <EachInspection />
            <EachInspection />
        </div>
    </div>
  )
}