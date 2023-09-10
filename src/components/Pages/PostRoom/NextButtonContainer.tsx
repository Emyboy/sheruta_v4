import React from 'react'

export default function NextButtonContainer({ children }: any) {
	return (
		<center className="bg-white p-3 fixed bottom-0 left-0 right-0 flex justify-end md:relative md:bg-transparent md:block md:p-0 border md:shadow-none md:border-none shadow-lg z-50">
			{children}
		</center>
	)
}
