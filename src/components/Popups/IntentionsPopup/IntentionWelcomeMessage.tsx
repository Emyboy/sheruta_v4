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
                    className="flex items-center text-center flex-col my-5 gap-5"
                >
                    <div
                        style={{ backgroundImage: `url(${theTeam.avatar_url})` }}
                        className={classNames(
                            `h-[140px] w-[140px] relative bg-dark_transparent border-white hover:shadow-md hover:border-theme rounded-full border-4 bg-center bg-cover mb-1`,
                        )}
                    />
                    <div className="flex flex-col gap-1">
                        <h4 className="font-bold">{theTeam.name}</h4>
                        <small className="text-dark_lighter">{theTeam.role}</small>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde at non dolor quam neque minima nobis, aperiam velit libero rerum possimus error aut quas? Quia laborum ad ipsa quam labore!</p>
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