import React from 'react'
import { HiOutlineBookmark, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone, HiOutlineQuestionMarkCircle, HiOutlineShare, HiOutlineCheckCircle, HiEllipsisVertical } from 'react-icons/hi2'
import { SpaceRequestData } from '../HostRequestDetails'

type Props = {
    requestData: SpaceRequestData
}


export default function RequestDetailsDescription({ requestData }: Props) {

    let request = requestData['room_request'];
    let user_info = requestData['user_info'];

    return (
        <section className='flex-col gap-5 flex'>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center flex-1">
                    <img src={'/assets/img/user.jpg'} alt='avatar' className='h-10 w-10 rounded-full' />
                    <div className="flex flex-col justify-center flex-1">
                        <h6 className='capitalize truncate max-w-[90%]'>{user_info.user.first_name}</h6>
                        <small className='text-dark_lighter'>@{user_info.user.username}</small>
                    </div>
                </div>
                <button className='text-dark_lighter'>
                    <HiEllipsisVertical size={25} />
                </button>
            </div>
            <div className='flex flex-col gap-1'>
                <div className="flex items-center text-theme text-sm">
                    <HiOutlineMapPin /> <address className='max-w-[90%] truncate'>{request.location_text}</address>
                </div>
                <p className=' text-sm'>{request.request_text}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlinePhone size={20} /><small>34.4k</small></button>
                    <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlineChatBubbleOvalLeftEllipsis size={20} /><small>22</small></button>
                    <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlineShare size={20} /><small>73</small></button>
                </div>
                <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'>
                    <HiOutlineEnvelope size={25} />
                    <small>73</small>
                </button>
            </div>
            <hr />
            <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2">
                    <div className='bg-orange-100 text-orange-500 px-2 rounded-lg text-sm'>{request.service.name}</div>
                    <div className='bg-green-100 text-green-500 px-2 rounded-lg text-sm'>{request.category.name}</div>
                </div>
                {request.private_room && <div className='px-2 rounded-lg border-1 border text-sm text-dark_light'>Private Room</div>}
            </div>
            <div className="flex-col flex lg:flex-row gap-1">
                <div className="lg:w-1/2 p-3 bg-orange-100 rounded-sm flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                        <HiOutlineQuestionMarkCircle className='text-orange-400' size={20} />
                        <h6 className='text-sm font-semibold'>How It Works</h6>
                    </div>
                    <p className='text-xs'>Join Paddy allows apartment seekers find
                        and share apartments/room by splitting bills.</p>
                </div>
                <div className="lg:w-1/2 p-3 bg-theme_transparent rounded-sm flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                        <HiOutlineCheckCircle className='text-theme' size={20} />
                        <h6 className='text-sm font-semibold'>Available</h6>
                    </div>
                    <p className='text-xs'>View Payment Summary and what to do before making payments.
                        view Details</p>
                </div>
            </div>
        </section>
    )
}