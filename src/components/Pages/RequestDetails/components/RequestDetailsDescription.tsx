'use client'
import React from 'react'
import { HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineMapPin, HiOutlinePhone, HiOutlineQuestionMarkCircle, HiOutlineShare, HiOutlineCheckCircle, HiEllipsisVertical, HiOutlineEye } from 'react-icons/hi2'
import { SpaceRequestData } from '../HostRequestDetails'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
    requestData: SpaceRequestData
    seeking: boolean
}


export default function RequestDetailsDescription({ requestData, seeking }: Props) {

    let request = requestData['room_request'];
    let user_info = requestData['user_info'];
    let disable = request.availability_status === 'unavailable';

    return (
        <section className='flex-col gap-5 flex'>
            <div className="flex justify-between">
                <Link href={`/user/${user_info.user.username}`} className="flex gap-2 items-center flex-1">
                    <img src={'/assets/img/user.jpg'} alt='avatar' className='h-10 w-10 rounded-full' />
                    <div className="flex flex-col justify-center flex-1">
                        <h6 className='capitalize truncate max-w-[90%]'>{user_info.user.first_name}</h6>
                        <small className='text-dark_lighter'>@{user_info.user.username}</small>
                    </div>
                </Link>
                <button className='text-dark_lighter'>
                    <HiEllipsisVertical size={25} />
                </button>
            </div>
            <div className='flex flex-col gap-1'>
                <div className="flex items-center text-theme text-sm">
                    <HiOutlineMapPin /> <address className='max-w-[90%] truncate'>{request.location_text}</address>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm]} className='markdown'>
                    {request.request_text}
                </ReactMarkdown>
                {/* <p className=' text-sm'>{request.request_text}</p> */}
            </div>
            {!disable && <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlinePhone size={20} /><small>
                        {request.call_count || 0}
                    </small></button>
                    <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlineChatBubbleOvalLeftEllipsis size={20} /><small>
                        {request.question_count || 0}
                    </small></button>
                    <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlineEye size={20} /><small>
                        {request.view_count || 0}
                    </small></button>
                </div>
                <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'>
                    <HiOutlineShare size={25} />
                </button>
            </div>}
            <hr />
            <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2">
                    <div className='bg-purple-100 text-purple-500 px-2 rounded-lg text-sm'>{request.service.name}</div>
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
                    <p className='text-xs'>
                        {request.service?.description}
                    </p>
                </div>
                {!seeking && <div className={classNames("lg:w-1/2 p-3  rounded-sm flex gap-2 flex-col", {
                    "bg-theme_transparent": request.availability_status === "available",
                    "bg-red-100": request.availability_status === "unavailable",
                })}>
                    <div className="flex gap-2 items-center">
                        <HiOutlineCheckCircle className={classNames({
                            'text-theme': request.availability_status === 'available',
                            'text-danger': request.availability_status === 'unavailable'
                        })}
                            size={20}
                        />
                        <h6 className='text-sm font-semibold capitalize'>{request.availability_status}</h6>
                    </div>
                    <p className='text-xs'>View Payment Summary and what to do before making payments.
                        view Details</p>
                </div>}
            </div>
        </section>
    )
}