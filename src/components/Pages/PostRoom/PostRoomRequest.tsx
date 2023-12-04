'use client'
import { max_request_content } from '@/constants/app.constrant'
import { AppStore } from '@/interface/index.interface'
import SInput from '@/packages/ui/SInput'
import SSelect, { SSelectData } from '@/packages/ui/SSelect'
import Link from 'next/link'
import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { HiOutlineArrowLeft } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import NextButtonContainer from './NextButtonContainer'
import classNames from 'classnames'
import LocationKeywordPopup from '@/components/Popups/LocationKeywordPopup'
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import dynamic from 'next/dynamic';

const GooglePlacesAutocomplete = dynamic(
    () => import('react-google-places-autocomplete'),
    { ssr: false } // Disable server-side rendering for this component
);

import { RequestTypeList } from '@/interface/options.interface'
import { slugify } from '@/packages/utils/text.utils'
import { usePostGuestRequestMutation } from '@/redux/services/request.service'

type Props = {
    roomRequestData?: any;
}

export default function PostRoomRequest({ roomRequestData }: Props) {
    const { user, user_info } = useSelector((state: AppStore) => state.app.auth)
    const [request_text, setRequestText] = useState(
        roomRequestData?.request_text || ''
    )
    const [private_room, setPrivateRoom] = useState<boolean | null>(null);
    const [category, setCategory] = useState<SSelectData | null>(
        roomRequestData?.category || null
    )
    const [service, setService] = useState<SSelectData | null>(
        roomRequestData?.service || null
    )
    const { services, categories, pay_frequencies } = useSelector(
        (state: AppStore) => state.app.option
    )
    const [pay_frequency, setPayFrequency] = useState<SSelectData | null>(
        roomRequestData?.pay_frequency || null
    );
    const [type, setType] = useState<SSelectData | null>(null);
    const [googleLocation, setGoogleLocation] = useState<any>(null)
    const progressPercentage = (request_text.length / max_request_content) * 100
    const colors =
        progressPercentage < 60
            ? 'red'
            : progressPercentage >= 60 && progressPercentage <= 100
                ? 'orange'
                : '#1eb21e';

    const [room_rent, setBudget] = useState(roomRequestData?.budget || 0)


    let disabled =
        !request_text ||
        !pay_frequency ||
        !category ||
        !service ||
        !room_rent ||
        !googleLocation ||
        !type ||
        private_room === null ||
        Math.floor(progressPercentage) < 100;

    const [uploadGuestRequest, {isLoading, data, isError}] = usePostGuestRequestMutation()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            let location_text = googleLocation?.label || user_info?.location_keyword?.name;
            let data = {
                service: service?.value,
                pay_frequency: pay_frequency?.value,
                category: category?.value,
                request_text,
                state: user_info?.state?.id,
                location_text,
                location_object: googleLocation,
                slug: slugify(`looking-a-${type?.value}-to-share-in-${location_text}`),
                location_keyword: user_info?.location_keyword?.id,
                type: type?.value,
                room_rent,
                private_room
            }
            console.log('SENDING --', data);
            uploadGuestRequest(data)
        } catch (error) {

        }
    };

    return (
        <>
            {!user_info?.state && !user_info?.location_keyword && <LocationKeywordPopup isOpen />}
            <header className='bg-white h-16 fixed left-0 right-0 top-0 border-b flex flex-col items-start justify-center lg:px-10 px-5 z-50'>
                <div className="flex gap-5 items-center">
                    <Link href={'/'}>
                        <HiOutlineArrowLeft size={25} />
                    </Link>
                    <div className="flex flex-col max-w-full flex-1">
                        <h1 className='font-semibold'>Request A Space</h1>
                        <small className='truncate text-gray-600'>Fill the form to post your request for a space.</small>
                    </div>
                </div>
            </header>
            <form className='bg-gray-100 min-h-screen flex flex-col items-center py-[150px]' onSubmit={handleSubmit}>
                <div className='p-5 bg-white w-full md:w-[700px] xl:w-[800px] rounded-lg flex flex-col gap-4'>
                    <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
                        <SSelect
                            id="services"
                            onChange={(e) => setService(e)}
                            label="Service"
                            placeholder="Select Service"
                            options={services.map((services) => ({
                                label: services.name,
                                value: services.id,
                            }))}
                            required
                            value={service}
                        />
                        <SSelect
                            id="categories"
                            onChange={(e) => setCategory(e)}
                            label="Category"
                            placeholder="Select Category"
                            options={categories.map((category) => ({
                                label: category.name,
                                value: category.id,
                            }))}
                            required
                            value={category}
                        />
                        <SSelect
                            id="pay_frequency"
                            onChange={(e) => setPayFrequency(e)}
                            label="Pay Frequency"
                            placeholder="Weekly, Monthly"
                            options={pay_frequencies.map((frequency) => ({
                                label: frequency.name,
                                value: frequency.id,
                            }))}
                            required
                            value={pay_frequency}
                        />
                        <SInput
                            label="You Budget"
                            id="budget"
                            required
                            type="currency"
                            onChange={(currency) => setBudget(currency)}
                            placeholder="Room Rent"
                            value={room_rent}
                        />
                        <SSelect
                            id="type"
                            onChange={(e) => setType(e)}
                            label="Request Type"
                            placeholder="Room or Flat?"
                            options={RequestTypeList}
                            required
                            value={type}
                        />
                        <SInput
                            label="Private Space?"
                            id="private_room"
                            required
                            type="boolean"
                            onChange={(isPrivate) => setPrivateRoom(isPrivate as boolean)}
                            value={private_room}
                        />
                        {/* <div className="flex flex-col gap-2 w-100 flex-1">
                            <label className="text-dark_light text-sm">
                                Private Space?
                            </label>
                            <div className='bg-gray-200 h-full w-full rounded-lg p-1 flex'>
                                <div className='h-full w-full bg-white border shadow cursor-pointer rounded-tl-md rounded-bl-md'>

                                </div>
                                <div className='h-full w-full bg-white border shadow cursor-pointer rounded-tr-md rounded-br-md'>

                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col gap-2 w-100 flex-1">
                            <label htmlFor={'location'} className="text-dark_light text-sm">
                                Location <span className="text-danger font-bold">*</span>
                            </label>
                            <GooglePlacesAutocomplete
                                apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
                                apiOptions={{ region: 'ng' }}
                                selectProps={{
                                    placeholder: 'Select Location',
                                    styles: {
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            height: '50px',
                                        }),
                                    },
                                    onChange: (e: any) => {
                                        console.log(e)
                                        setGoogleLocation(e)
                                    },
                                    value: googleLocation
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex gap-3 w-full md:flex-row flex-col">
                        <div className="flex flex-col gap-2 w-100 flex-1">
                            <div className="flex justify-between">
                                <label
                                    htmlFor={'request_text'}
                                    className="text-dark_light text-sm"
                                >
                                    {'Describe you ideal space.'}{' '}
                                    <span className="text-danger font-bold">*</span>
                                </label>
                                <div className="flex">
                                    <small style={{ color: colors }}>
                                        {progressPercentage < 60
                                            ? 'Too short 😭'
                                            : progressPercentage >= 60 && progressPercentage <= 100
                                                ? 'A bit better 🫥'
                                                : 'Good enough 👍🏽'}
                                    </small>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="h-1 bg-green-200 overflow-hidden">
                                    <div
                                        className={`h-full`}
                                        style={{
                                            width: `${progressPercentage > 100 ? 100 : progressPercentage
                                                }%`,
                                            backgroundColor: `${colors}`,
                                        }}
                                    ></div>
                                </div>
                                {/* @ts-ignore */}
                                {/* @ts-ignore */}
                                <DebounceInput
                                    // minLength={2}
                                    debounceTimeout={400}
                                    element="textarea"
                                    id={'request_text'}
                                    name={'request_text'}
                                    className="border-2 border-gray-200 action:border-green-400 rounded-bl-lg rounded-br-lg p-3 outline-none "
                                    placeholder={`Ex. I'm looking for a newly built xyz...`}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        setRequestText(e.target.value)
                                    }
                                    required={true}
                                    rows={6}
                                />
                            </div>
                            <br />
                            <NextButtonContainer>
                                <button
                                    type="submit"
                                    className={classNames(
                                        ' text-white  rounded-md font-bold w-full md:w-[400px] py-3',
                                        { 'bg-dark': !disabled },
                                        { 'bg-muted': disabled }
                                    )}
                                    disabled={disabled}
                                >
                                    Continue
                                </button>
                            </NextButtonContainer>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}