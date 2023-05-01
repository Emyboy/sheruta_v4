import React, { useState } from 'react'

type Props = {
    images: string[]
}

export default function RequestDetailsLeft({ images }: Props) {

    const [currentPreview, setCurrentPreview] = useState<string>(images[0] || '');

    return (
        <>
            <div className="bg-black h-80 lg:h-screen w-screen flex justify-center items-center lg:w-2/3 lg:px-5 flex-col">
                <div className=' p-2 flex flex-col items-center justify-center h-64 lg:h-5/6'>
                    <img src={currentPreview} className='h-full lg:rounded-lg' />
                </div>
                <div className='p-2 w-full flex gap-2 justify-center- h-16 lg:h-1/6 overflow-x-auto'>
                    {/* <div className='cursor-pointer bg-img h-full rounded-md ' style={{ minWidth: '100px' }}  /> */}
                    {images.map(src => {
                        return <div className='cursor-pointer bg-img h-full rounded-md lg:w-36' style={{ backgroundImage: `url(${src})`, minWidth: '70px' }} onClick={() => setCurrentPreview(src)} />
                    })}
                </div>
            </div>
        </>
    )
}