import React, { useEffect, useState } from 'react'
import MobileModal from './MobileModal';
import { TbMapPinSearch } from 'react-icons/tb';
import { Button } from '@chakra-ui/react';
import SSelect, { SSelectData } from '@/packages/ui/SSelect';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/interface/index.interface';
import _Button from '@/packages/ui/SButton';
import Link from 'next/link';
import { useUpdateUserInfoMutation } from '@/redux/services/user-info.service';
import toast from 'react-hot-toast';
import { setAuthState } from '@/redux/features/auth.slice';

type Props = {
    isOpen: boolean
}

export default function LocationKeywordPopup({ isOpen }: Props) {
    const { location_keywords, states } = useSelector(
        (state: AppStore) => state.app.option
    );
    const [state, setState] = useState<SSelectData | null>(null);
    const [area, setArea] = useState<SSelectData | null>(null);
        const dispatch = useDispatch();
    const [updateUserInfo, { isLoading, data, isError }] = useUpdateUserInfoMutation()

    const handleSubmit = () => {
        updateUserInfo({
            location_keyword: area?.value,
            state: state?.value
        } as any)
    };

    useEffect(() => {
        if(data){
            console.log('THE DATA::', data)
            dispatch(setAuthState({
                user_info: data
            }))
        }
        if(isError) {
            toast.error("Error, please try again")
        }
    },[data, isError])

    return (
        <MobileModal isOpen={isOpen} onClose={() => { }} size='lg'>
            <div className="py-5">
                <center>
                    <h1 className='text-3xl font-bold'>Select Location</h1>
                    <TbMapPinSearch size={100} className='my-[50px] text-dark_light' />
                </center>
                <div className="flex flex-col gap-5">
                    <SSelect
                        id="state"
                        onChange={(e) => {
                            setState(e);
                            setArea(null);
                        }}
                        label="State"
                        placeholder="Select State"
                        options={states.map((state) => ({
                            label: state.name,
                            value: state.id,
                        }))}
                        required
                        value={state}
                    />
                    {state && <SSelect
                        id="location_keywords"
                        onChange={(e) => setArea(e)}
                        label="Area"
                        placeholder="Select Area"
                        options={location_keywords.filter(x => x.state.id === state.value).map((keyword) => ({
                            label: keyword.name,
                            value: keyword.id,
                        }))}
                        required
                        value={area}
                    />}
                    <_Button disabled={!state || !area} variant='dark' onClick={handleSubmit} isLoading={isLoading}>Update</_Button>
                    <center className='mt-2'>
                        <Link href={`/`}>Cancel</Link>
                    </center>
                </div>
            </div>
        </MobileModal>
    )
}