import React from 'react'
import HostRequestDetails, { SpaceRequestData } from '@/components/Pages/RequestDetails/HostRequestDetails'
import { backend_url } from '@/constants/app.constrant';
import GuestRequestDetails from '@/components/Pages/RequestDetails/GuestRequestDetails';


export default async function DetailsPage(props: any) {
  const { request_id } = props.params;

  let url = backend_url + `/room-request/listing/${request_id}`
  const roomRequest = await fetch(url, {
    next: {
      revalidate: 15,
    },
  })
  const result: SpaceRequestData = await roomRequest.json();

  const { room_request } = result;

  console.log('THE RESULT::', result);

  if (room_request && room_request?.image_urls && room_request?.image_urls?.length > 0) {
    return (
      <HostRequestDetails requestData={result} />
    )
  } else {
    return <GuestRequestDetails requestData={result} />
  }


} 