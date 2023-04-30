import React from 'react'
import { SlOptions, SlLocationPin } from 'react-icons/sl'
import { HiOutlineBookmark, HiOutlineChat, HiOutlinePhone } from 'react-icons/hi'
import Link from 'next/link'

type Props = {}

let link = `/request/join-paddy/bungalow/lekki/234`;

export default function EachRequest({ }: Props) {
  return (
    <article className='bg-white p-4 border-b border-1 rounded-sm flex flex-col gap-4'>
      <div className="flex justify-between items-center">
        <div className='flex items-center gap-2'>
          <img src='/assets/img/user.jpg' alt='profile' className='h-12 w-12 rounded-full' />
          <div>
            <h6 className='font-medium'>The Person Name</h6>
            <small className='text-dark_lighter'>@TheUserName</small>
          </div>
        </div>
        <button className='text-dark_lighter'>
          <SlOptions />
        </button>
      </div>
      <div>
        <address className='text-theme flex gap-2 items-center'><SlLocationPin /> Lekki County Homes, Lekki</address>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nisi doloribus placeat officiis optio. Natus tempora at accusantium <Link href={link} className='text-theme'>Read More..</Link></p>
      </div>
      <div className='flex justify-between items-center'>
        <div className="flex items-center gap-2">
          <div className='bg-accent_light px-2 rounded-lg'>For Share</div>
          <div className='bg-theme_lighter px-2 rounded-lg'>Bungalow</div>
        </div>
        <div className='px-2 rounded-lg border-1 border'>Private Room</div>
      </div>
      <div className='flex items-center gap-1 h-52'>
        <div className="p-2 w-1/2 h-full rounded-lg bg-img" style={{ backgroundImage: `url("/assets/img/room-1.jpg")` }}></div>
        <div className="w-1/2 h-full gap-1 flex flex-col">
          <div className="h-1/2 bg-img rounded-lg" style={{ backgroundImage: `url("/assets/img/room-3.jpg")` }}></div>
          <div className="h-1/2 bg-img rounded-lg" style={{ backgroundImage: `url("/assets/img/room-2.jpg")` }}></div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className="flex items-center gap-3">
          <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlinePhone /><small>34.4k</small></button>
          <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlineChat /><small>22</small></button>
          <button className='text-dark_lighter flex gap-1 items-center hover:text-theme'><HiOutlineBookmark /><small>73</small></button>
        </div>
        <div className="flex">
          <b>N1,230,000</b>
          <small className='text-dark_lighter'>/monthly</small>
        </div>
      </div>
      <CommentSection />
    </article>
  )
}


const CommentSection = () => {
  return <div className='flex flex-col gap-2'>
    <form className='flex bg-background rounded-full p-1 justify-between gap-3'>
      <img src='/assets/img/user.jpg' className='w-9 h-9 rounded-full' />
      <input placeholder='Ask your question (Ex. is this available?)' className='bg-background w-full outline-none' />
      <button className='bg-dark text-white rounded-full px-3 py-1'>Send</button>
    </form>
    <div className='flex flex-col gap-5'>
      <EachComment />
    </div>
  </div>
}

export const EachComment = () => {
  return <>
    <hr className='my-2' />
    <div className='flex items-center'>
      <article className='flex gap-2'>
        <img src='/assets/img/user.jpg' alt='avatar' className='w-9 h-9 rounded-full' />
        <div>
          <div className="flex justify-between"><h6 className='font-medium'>The person name</h6>
            <button className='text-dark_lighter'>
              <SlOptions />
            </button></div>
          <p className='text-dark_lighter mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates quidem deleniti eaq ullam?</p>
          <article className='flex gap-2 ml-3'>
            <img src='/assets/img/user.jpg' alt='avatar' className='w-9 h-9 rounded-full' />
            <div>
              <div className="flex justify-between">
                <h6 className='font-medium'>The person name</h6>
                <button className='text-dark_lighter'>
                  <SlOptions />
                </button>
              </div>

              <p className='text-dark_lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates quidem deleniti eaq ullam?</p>
            </div>
          </article>
        </div>
      </article>
    </div>
    <Link href={'/'} className='text-theme text-center text-sm'>Show More</Link>
  </>
}
