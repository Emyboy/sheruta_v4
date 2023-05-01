import React from 'react'
import { EachComment } from '../Feed/EachRequest'

type Props = {}

export default function RequestDetails({ }: Props) {
    return (
        <>
            <div className='bg-yellow-100 h-screen- flex-col lg:flex-row' style={{ display: 'flex' }}>
                <div className="bg-black h-64 lg:h-screen w-screen flex justify-center items-center lg:w-3/5 lg:px-5">
                    <img src={'https://media.tenor.com/nR7090FSI7oAAAAC/apartment-renovation.gif'} className='w-full h-64 lg:rounded-lg' />
                </div>
                <div className="bg-background w-screen lg:w-1/2 lg:max-h-screen lg:overflow-auto">
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
            </div></>
    )
}