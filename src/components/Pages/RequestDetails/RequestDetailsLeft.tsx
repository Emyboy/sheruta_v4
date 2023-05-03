import classNames from 'classnames';
import React, { useState } from 'react'

type Props = {
    images: string[]
}

export default function RequestDetailsLeft({ images }: Props) {

    const [currentPreview, setCurrentPreview] = useState<string>(images[0] || '');

    return (
        <>
            <div style={{ zIndex: '-1', position: 'absolute' }} className='bg-theme_transparent left-0 top-0 right-0 bottom-0'>
                <div style={{ position: 'absolute', backgroundColor: '#0000008f', zIndex: 1 }} className=' p-3 left-0 top-0 right-0 bottom-0'/>
                <img src={currentPreview} alt="bg" style={{ zIndex: '-1', filter: 'blur(5px)' }} className='w-full h-full' />
            </div>
            <div className="bg-black- h-80 lg:h-screen w-screen flex justify-center items-center lg:w-2/3 lg:px-5 flex-col z-40" >
                <div className=' p-2 flex flex-col items-center justify-center h-64 lg:h-5/6' >
                    <img src={currentPreview} className='h-full lg:rounded-lg shadow-lg rounded-md' />
                </div>
                <div className='p-2 w-full flex gap-3 justify-center- h-16 lg:h-1/6 overflow-x-auto bg-img'>
                    {/* <div className='cursor-pointer bg-img h-full rounded-md ' style={{ minWidth: '100px' }}  /> */}
                    {images.map(src => {
                        return <div className={classNames({ "outline outline-4 lg:outline-3 text-green-400": currentPreview === src }, ' cursor-pointer bg-img h-full rounded-md lg:w-36')} style={{ backgroundImage: `url(${src})`, minWidth: '70px' }} onClick={() => setCurrentPreview(src)} />
                    })}
                </div>
            </div>
        </>
    )
}