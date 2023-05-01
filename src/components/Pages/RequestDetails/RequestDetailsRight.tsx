import React from 'react'
import { EachComment } from '../Feed/EachRequest'

type Props = {}

export default function RequestDetailsRight({ }: Props) {
    return (
        <>
            <div className="bg-background w-screen lg:w-1/3 lg:max-h-screen lg:overflow-auto">
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
                <div className="bg-white px-2 h-16 shadow-lg border-1 border-t lg:sticky fixed w-screen bottom-0 flex justify-between items-center">
                    <div className="flex flex-col">
                        <small className='text-dark_lighter'>Rent per room</small>
                        <figure className='font-bold'>N45,000,000</figure>
                    </div>
                    <button className='bg-dark text-white px-6 py-3 rounded-md'>Reserve Room</button>
                </div>
            </div>
        </>
    )
}