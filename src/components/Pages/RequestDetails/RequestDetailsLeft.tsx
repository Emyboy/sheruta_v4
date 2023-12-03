'use client'
import { RequestImage } from '@/interface/request.interface';
import classNames from 'classnames';
import React, { useState } from 'react'
import { HiOutlineArrowsPointingOut, HiArrowsPointingIn } from 'react-icons/hi2';


type Props = {
    images: RequestImage[];
    onFullScreenToggle: () => void;
    fullScreen: boolean
}

export default function RequestDetailsLeft({ images, onFullScreenToggle, fullScreen }: Props) {

    const [currentPreview, setCurrentPreview] = useState<RequestImage>(images[0] || '');

    return (
        <>
            <div style={{ zIndex: '-1', position: 'absolute' }} className='bg-theme_transparent left-0 top-0 right-0 bottom-0'>
                <div style={{ position: 'absolute', backgroundColor: '#000000b8', zIndex: 1 }} className=' p-3 left-0 top-0 right-0 bottom-0' />
                <img src={currentPreview.url} alt="bg" style={{ zIndex: '-1', filter: 'blur(2px)' }} className='w-full h-full' />
            </div>
            <div className={classNames("bg-black- lg:h-screen w-screen flex justify-center items-center lg:w-2/3 lg:px-5 flex-col z-40",
                {
                    "h-[100vh]": fullScreen,
                    "h-[362px] min-w-[100vw] max-w-[100vw]": !fullScreen,
                }
            )} >
                <div className='bg-dark shadow h-10 w-10 rounded-full absolute right-2 top-2 text-white flex md:hidden justify-center items-center' onClick={onFullScreenToggle}>
                    {
                        fullScreen ?
                            <HiArrowsPointingIn />
                            :
                            <HiOutlineArrowsPointingOut />
                    }
                </div>
                <div className='p-2 flex flex-col items-center justify-center h-64 lg:h-5/6 flex-1 w-full' >
                    <img src={currentPreview.url} className='max-h-full lg:rounded-lg shadow-lg rounded-md' />
                </div>
                <div className='p-2 w-full flex gap-3 h-[90px] lg:h-1/6 overflow-x-auto bg-img'>
                    {/* <div className='cursor-pointer bg-img h-full rounded-md ' style={{ minWidth: '100px' }}  /> */}
                    {images.map(src => {
                        return <div className={classNames({
                            "outline outline-4 lg:outline-3 text-green-400": currentPreview.url === src.url
                        },
                            ' cursor-pointer min-w-[90px] md:min-w-[200px] bg-img h-full rounded-md'
                        )}
                            style={{ backgroundImage: `url(${src.url})` }}
                            onClick={() => setCurrentPreview(src)}
                        />
                    })}
                </div>
            </div>
        </>
    )
}