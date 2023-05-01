/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		colors: {
			// theme colors
			theme: '#00BC73',
			theme_light: '#33C98F',
			theme_lighter: '#66D7AB',
			theme_transparent: '#00BC7333',

			// accent
			accent: '#E4FAA8',
			accent_light: '#E9FBB9',
			accent_lighter: `#F8FEE7`,

			// black colors
			dark: '#111717',
			dark_light: '#414545',
			dark_lighter: '#707474',
			dark_transparent: '#0d180f75',

			inactive: '#CFD1D1',

			// warning
			warning: '#FFA500',
			warning_light: '#FFF6E6',

			// danger
			danger: '#FF4949',
			danger_light: '#F2E1E1',

			background: '#F4F4F4',
		},
	},
	plugins: [require('flowbite/plugin')],
}
