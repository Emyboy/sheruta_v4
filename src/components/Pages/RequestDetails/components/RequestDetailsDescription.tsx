import React from 'react'
import { HiOutlineBookmark, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone, HiOutlineShare } from 'react-icons/hi2'

type Props = {}

export default function RequestDetailsDescription({ }: Props) {
    return (
        <section className='flex-col gap-5 flex'>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <img src={'/assets/img/user.jpg'} alt='avatar' className='h-10 w-10 rounded-full' />
                    <div className="flex flex-col justify-center">
                        <h6>User first name</h6>
                        <small className='text-dark_lighter'>@somethingElse</small>
                    </div>
                </div>
                <button className='text-dark_lighter'>
                    <HiOutlineEnvelope size={25} />
                </button>
            </div>
            <div className='flex flex-col gap-1'>
                <div className="flex items-center text-theme text-sm">
                    <HiOutlineMapPin /> <address>Somewhere in the world</address>
                </div>
                <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, provident quas aut, ipsam inventore optio quaerat laboriosam facilis vitae recusandae neque! Recusandae corrupti quaerat eligendi voluptatibus id dolor facere. In.</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlinePhone size={20} /><small>34.4k</small></button>
                    <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlineChatBubbleOvalLeftEllipsis size={20} /><small>22</small></button>
                    <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlineShare size={20} /><small>73</small></button>
                </div>
                <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlineBookmark size={20} /><small>73</small></button>
            </div>
            <hr />
            <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2">
                    <div className='bg-orange-100 text-orange-500 px-2 rounded-lg text-sm'>For Share</div>
                    <div className='bg-green-100 text-green-500 px-2 rounded-lg text-sm'>Bungalow</div>
                </div>
                <div className='px-2 rounded-lg border-1 border text-sm text-dark_light'>Private Room</div>
            </div>
        </section>
    )
}