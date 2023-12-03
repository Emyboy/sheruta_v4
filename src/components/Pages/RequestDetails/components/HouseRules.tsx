import React from 'react'
import { HiOutlineCheckCircle } from 'react-icons/hi2'

type Props = {
    rules: string[]
}

export default function HouseRules({ rules }: Props) {
    return (
        <section className='flex flex-col gap-5'>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h6 className='mb-1'>House Rules</h6>
                    <hr />
                </div>
                <div className="flex flex-col gap-3 justify-between">
                    {rules.map(rule => {
                        return <div className="flex gap-2 items-center" key={`house-rule-${rule}`}>
                            <div className="w-5 flex items-start">
                                <HiOutlineCheckCircle size={25} className='text-theme_light self-start ' />
                            </div>
                            <span>{rule}</span>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}