import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'


export interface TabUIBaseProps {
    id: string;
    name: string;
    count?: number
}

type Props = {
    tabs: TabUIBaseProps[];
    activeTab: string;
    onTabChange: (tab: number) => void;
}

export default function _Tab({ tabs, activeTab, onTabChange }: Props) {
    return (
        <div className='h-full'>
            <ul className='h-full flex gap-0 overflow-x-auto'>
                {
                    tabs.map(tab => {
                        return <EachTab key={tab.id} title={tab.name} active={activeTab === tab.id} onTabChange={() => onTabChange(tabs.indexOf(tab))} />
                    })
                }
            </ul>
        </div>
    )
}

const EachTab = ({ title, active, onTabChange }: { title: string, active?: boolean, onTabChange: () => void }) => {
    return <li className='h-full flex flex-col' onClick={onTabChange}>
        <span
            className={classNames({ "bg-white font-semibold": active }, { "border-background  text-dark_lighter bg-background": !active }, ' h-full py-2 px-4 flex flex-col justify-center items-center w-fit text-sm hover:border-theme hover:bg-white hover:font-semibold cursor-pointer')}
        >
            <span>{title}</span>
        </span>
        {active && <span className="h-1 bg-green-400"></span>}
    </li>
}