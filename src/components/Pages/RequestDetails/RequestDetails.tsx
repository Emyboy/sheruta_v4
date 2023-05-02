import React from 'react'
import RequestDetailsLeft from './RequestDetailsLeft'
import RequestDetailsRight from './RequestDetailsRight/RequestDetailsRight'

type Props = {}

export default function RequestDetails({ }: Props) {
    return (
        <>
            <div className='h-screen- flex-col lg:flex-row' style={{ display: 'flex' }}>
                <RequestDetailsLeft images={[
                    'https://media.tenor.com/nR7090FSI7oAAAAC/apartment-renovation.gif',
                    'https://genhq.com/wp-content/uploads/2018/01/MillenialsvsBBR.gif',
                    'https://sf-tk-sg.ibytedtos.com/obj/tiktok-web-sg/tt-sg-article-cover-7dc2e3edac2936fab0a719fbc223a2a1.gif',
                    'https://sf-tk-sg.ibytedtos.com/obj/tiktok-web-sg/tt-sg-article-cover-37328f60531b63e2693c8a6d62af12ee.gif',
                    'https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg',
                    'https://www.movavi.io/wp-content/uploads/2020/09/1-2.gif',
                    'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/398747325.jpg?k=67da28cbb8cae8a0744ecce72ab52478744d6c28818fecca8bdefa14fa027efa&o=',
                    'https://storage.googleapis.com/rent-board-ca/listings/512/1676580223180_1_InletStation-PortMoody-KitchenDining.jpg',
                    'https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/03/slower.gif?auto=format&q=60&fit=max&w=930',
                    'https://i.pinimg.com/originals/cd/59/d6/cd59d626dc86397fe45080e6e9c7027d.gif'
                ]} />
                <RequestDetailsRight />
            </div>
        </>
    )
}