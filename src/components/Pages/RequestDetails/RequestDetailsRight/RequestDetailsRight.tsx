import React, { useState } from 'react'
import _Tab, { TabUIBaseProps } from '@/packages/ui/STab'
import _ChatInput from '@/packages/ui/SChatInput'
import SummaryTab from './Tabs/SummaryTab'
import DiscussionTab from './Tabs/DiscussionTab'
import { HiChevronRight } from 'react-icons/hi2'
import { SpaceRequestData } from '../HostRequestDetails'
import { renderPricingFull } from '@/packages/utils/pricing.utils'
import { Button } from '@chakra-ui/react'

type Props = {
    requestData: SpaceRequestData
}

export default function RequestDetailsRight({ requestData }: Props) {
    const tabs: TabUIBaseProps[] = [
        {
            id: 'summary',
            name: 'Summary',
        },
        {
            id: 'discussion',
            name: 'Discussion',
            count: 7
        },
        {
            id: 'payment',
            name: 'Breakdown',
        }
    ];
    const [activeTab, setActiveTab] = useState<number>(0);

    const disable = requestData.room_request.availability_status === 'unavailable';

    return (
        <>
            <div className="bg-white w-screen lg:w-1/3 lg:max-h-screen lg:overflow-auto">
                <div className="bg-gray-100 shadow-sm h-12 border-b  sticky top-0">
                    <_Tab tabs={tabs} activeTab={tabs[activeTab].id} onTabChange={tab => setActiveTab(tab)} />
                </div>
                <div className="flex-1 px-5 pt-5  h-full- pb-20">
                    {[
                        <SummaryTab requestData={requestData} />,
                        <DiscussionTab isDisabled={disable} />
                    ][activeTab]}
                </div>
                <div className="bg-white px-2 h-16 shadow-lg border-1 border-t lg:sticky fixed w-screen lg:w-full bottom-0 ">
                    {[
                        <>
                            <div className="flex justify-between items-center h-full">
                                <div className="flex flex-col">
                                    <small className='text-dark_lighter'>Rent per room</small>
                                    <figure className='font-bold text-lg'>{renderPricingFull(requestData.room_request?.room_rent)}</figure>
                                </div>
                                <Button isDisabled={disable} className='bg-dark text-white px-6 py-3 rounded-md' onClick={() => setActiveTab(tabs.length - 1)}>Reserve Room</Button>
                            </div>
                        </>,
                        <_ChatInput isDisabled={disable} />,
                        <div className="flex justify-between items-center h-full">
                            <div className="flex flex-col">
                                <small className='text-dark_lighter'>Total Payment is</small>
                                <figure className='font-bold text-lg'>N125,000,000</figure>
                            </div>
                            <button className='bg-dark text-white px-6 py-3 rounded-md flex gap-2 items-center' onClick={() => setActiveTab(tabs.length - 1)}>
                                Fund Wallet <HiChevronRight size={20} />
                            </button>
                        </div>
                    ][activeTab]}
                </div>
            </div>
        </>
    )
}