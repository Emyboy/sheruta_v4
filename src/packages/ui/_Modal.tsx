import { Modal, ModalProps } from 'flowbite-react'
import React from 'react'
import { HiOutlineXMark } from 'react-icons/hi2'

type Props = {
	children: any;
}

export default function _Modal(props: Props & ModalProps) {
	
	return (
		<Modal show={props.show} onClose={props.onClose} {...props} position="bottom">
			{/* <Modal.Header>Terms of Service</Modal.Header> */}
			<div className="p-5">
				{props.onClose && (
					<div className="flex justify-end text-dark_lighter">
						<button className="absolute" onClick={props.onClose}>
							<HiOutlineXMark size={30} />
						</button>
					</div>
				)}
				{props.children}
			</div>
			{/* <Modal.Body>{props.children}</Modal.Body> */}
			{/* <Modal.Footer></Modal.Footer> */}
		</Modal>
	)
}
