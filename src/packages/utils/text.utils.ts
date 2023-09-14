export function capitalizeFirstName(name?: string): string {
	if(name){
		const words = name.split(' ')

		if (words.length > 0) {
			const firstName = words[0]
			const capitalizedFirstName =
				firstName.charAt(0).toUpperCase() + firstName.slice(1)

			words[0] = capitalizedFirstName
			return words.join(' ')
		}

		return name // Return the original name if no first name is found
	}else {
		return ''
	}
}

export function generateNumberFromRange(min:number, max:number):number {
	return Math.floor(Math.random() * (max - min) + min)
}
