import SearchResultPage from '@/components/Pages/SearchResultPage/SearchResultPage'
import { backend_url } from '@/constants/app.constrant'
import SContainer from '@/packages/ui/SContainer'
import React from 'react'

type Props = {}

export default async function SearchPage({ }: Props) {

    const getRequest = await fetch(backend_url + '/room-request/recent')
    let requests = await getRequest.json()

    return (
        <SearchResultPage results={requests} />
    )
}