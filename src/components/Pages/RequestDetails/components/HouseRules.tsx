import React from 'react'
import { HiOutlineCheckCircle } from 'react-icons/hi2'

type Props = {}

export default function HouseRules({ }: Props) {
    return (
        <section className='flex flex-col gap-5'>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h6 className='mb-1'>House Rules</h6>
                    <hr />
                </div>
                <div className="flex flex-col gap-3 justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="w-5 flex items-start">
                            <HiOutlineCheckCircle size={25} className='text-theme_light self-start ' />
                        </div>
                        <span>No pets allowed in or outside your apartment</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-5 flex items-start">
                            <HiOutlineCheckCircle size={25} className='text-theme_light self-start ' />
                        </div>
                        <span>No loud parties or overnight parties</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-5 flex items-start">
                            <HiOutlineCheckCircle size={25} className='text-theme_light self-start ' />
                        </div>
                        <span>No Smoking in the premises</span>
                    </div>
                </div>
            </div>
        </section>
    )
}