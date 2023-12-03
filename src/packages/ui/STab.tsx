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
                        return <EachTab
                            count={tab.count}
                            key={tab.id}
                            title={tab.name}
                            active={activeTab === tab.id}
                            onTabChange={() => onTabChange(tabs.indexOf(tab))}
                        />
                    })
                }
            </ul>
        </div>
    )
}

const EachTab = ({ title, active, onTabChange, count }: { title: string, active?: boolean, onTabChange: () => void, count: number | undefined }) => {
    return <li className='h-full flex flex-col' onClick={onTabChange}>
        <span
            className={classNames({ "bg-white font-semibold": active }, { "border-background  text-dark_lighter bg-background": !active }, ' h-full py-2 px-4 flex flex-col justify-center items-center w-fit text-sm hover:border-theme hover:bg-white hover:font-semibold cursor-pointer')}
        >
            <div className="flex items-center gap-2">
                <span>{title}</span>
                {count && count > 0 ? <span className="bg-red-400 text-xs font-medium rounded-full text-white px-2">{count}</span> : null}
            </div>
        </span>
        {active && <span className="h-1 bg-theme"></span>}
    </li>
}