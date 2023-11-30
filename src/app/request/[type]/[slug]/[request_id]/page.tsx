import React from 'react'
import SpaceRequestDetails from '@/components/Pages/RequestDetails/SpaceRequestDetails'
import { backend_url } from '@/constants/app.constrant';
import axios from 'axios';



export default async function DetailsPage(props: any) {
  console.log(props)
  const { request_id } = props.params;

  let url = backend_url + `/room-request/listing/${request_id}`
  console.log('THE URL --', url)
  const roomRequest = await axios(url)
  // const result = await roomRequest.json()

  return (
    <SpaceRequestDetails requestData={roomRequest.data} />
  )
} 