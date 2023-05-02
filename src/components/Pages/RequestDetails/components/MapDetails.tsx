import React from 'react'

type Props = {}

export default function MapDetails({ }: Props) {
    return (
        <section className='flex flex-col gap-5'>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h6 className='mb-1'>Apartment Location</h6>
                    <hr />
                </div>
                <div className="flex flex-wrap gap-3 justify-between">
                    <iframe className='rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.063477707583!2d7.40470659708252!3d9.107789603141883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75623fe2d863%3A0xb13df4127a71dbf6!2sCrush%20Cafe!5e0!3m2!1sen!2sng!4v1683062551262!5m2!1sen!2sng" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </section>
    )
}