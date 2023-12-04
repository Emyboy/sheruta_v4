import { Team, teams } from '@/data/team.data'
import { generateNumberFromRange } from '@/packages/utils/text.utils'
import { Button } from '@chakra-ui/react'
import classNames from 'classnames'
import React from 'react'

type Props = {
    onClick: () => void
}

export default function IntentionWelcomeMessage({ onClick }: Props) {

    let theTeam: Team = teams[generateNumberFromRange(0, teams.length)]

    return (
        <div>
            <center>
                <div
                    className="flex items-center text-center flex-col my-5 gap-8"
                >
                    <div className="flex flex-col items-center gap-3">
                        <div
                            style={{ backgroundImage: `url(${theTeam.avatar_url})` }}
                            className={classNames(
                                `h-[140px] w-[140px] relative bg-dark_transparent border-white hover:shadow-md hover:border-theme rounded-full border-4 bg-center bg-cover mb-1 `,
                            )}
                        />
                        <div className="flex flex-col gap-1">
                            <h4 className="font-bold">{theTeam.name}</h4>
                            <small className="text-dark_lighter">{theTeam.role}</small>
                        </div>
                    </div>
                    <div>

                        <p className='mt-5'>
                            {`
                            Welcome to Sheruta,  I am delighted to have you here as a new member of our community..                           
                            `}
                        </p>
                        <p className='mt-5'>
                            The idea of Sheruta came from our observation of the deep need for a safe and transparent apartment hunting community where room seekers can connect directly to apartment providers and room subletters with the best room deals in a secured environment.
                        </p>
                        <p className='mt-5'>
                            Post your request, we will work towards making sure your request does meet the right prospects. Help us share the word to get more good room deals for community members.
                        </p>
                    </div>
                    <br />
                    <Button className='bg-dark text-white hover:bg-black w-full' onClick={onClick}>
                        Continue
                    </Button>
                </div>
            </center>


        </div>
    )
}