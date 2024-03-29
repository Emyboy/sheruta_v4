'use client'
import SContainer from '@/packages/ui/SContainer'
import React from 'react'
import SearchResultFilter from './SearchResultFilter'
import MainNavbar from '@/components/Layouts/MainLayout/MainNavbar'
import { RoomRequest } from '@/interface/request.interface'
import EachRequest from '@/components/EachRequest/EachRequest'

type Props = {
    results: RoomRequest[]
}

export default function SearchResultPage({ results }: Props) {
    return (
        <>
            <MainNavbar activePage={'search'} />
            <SContainer>
                <div className="flex w-full pt-16 gap-2">
                    <div className='w-[300px]  mt-5  '>
                        <div className=' fixed w-[300px] max-h-[90vh] overflow-y-auto flex flex-col px-1'>
                            <SearchResultFilter />
                        </div>
                    </div>
                    <div className='flex-1 mt-5 flex flex-col gap-3 mb-[10rem] max-w-[700px]'>
                        {
                            results.map(request => {
                                return <EachRequest request={request} key={`result-${request.id}`} />
                            })
                        }
                    </div>
                    
                </div>
            </SContainer>
        </>
    )
}
