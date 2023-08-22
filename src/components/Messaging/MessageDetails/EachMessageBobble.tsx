import { AppStore } from '@/interface/index.interface'
import SAvatar from '@/packages/ui/SAvatar'
import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Divider,
} from '@/components/ChakraUi'
import { SlOptions } from 'react-icons/sl'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'

type Props = {
	isOutgoing: boolean
}

export default function EachMessageBobble({ isOutgoing }: Props) {
	const { user } = useSelector((state: AppStore) => state.app.auth)
	return (
		<div className={classNames('py-5 px-2', { 'bg-white': !isOutgoing })}>
			<div className="flex gap-3">
				{user && <SAvatar userData={user} />}
				<div className="flex flex-col gap-2">
					<div className="flex justify-between items-center">
						<h6 className="text-sm font-semibold text-clip flex-1">
							{user?.first_name}
						</h6>
						<Menu>
							<MenuButton
								as={Button}
								variant={'ghost'}
								className="text-dark_lighter hover:bg-white h-1"
							>
								<SlOptions />
							</MenuButton>
							<MenuList>
								<MenuItem className="hover:bg-green-100 flex gap-3 items-center">
									<HiOutlinePencil /> <span>Edit</span>
								</MenuItem>

								<Divider />
								<MenuItem className="hover:bg-green-100 text-danger flex gap-3 items-center">
									<HiOutlineTrash /> <span>Delete</span>
								</MenuItem>
							</MenuList>
						</Menu>
					</div>
					<div className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						non mollitia et doloribus libero magni molestiae nihil quae aliquid
						dolorum, dolor odio, aliquam obcaecati, illo eveniet veniam
						reprehenderit dolorem numquam?
					</div>
					<small className="text-dark_lighter">30 mins ago</small>
				</div>
			</div>
		</div>
	)
}
