import { Spinner } from 'flowbite-react'
import React from 'react'

type Props = {}

export default function _Button({}: Props) {
  return (
		<button className="bg-theme text-white rounded-md px-2 py-3 w-full hover:bg-theme_light mt-">
			<Spinner color="pink" />
		</button>
	)
}