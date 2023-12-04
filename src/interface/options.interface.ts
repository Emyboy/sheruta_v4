
interface Option {
	id: number;
	name: string;
	slug: string
	description?: string;
}

export interface Habit extends Option {
}
export interface State extends Option {
	image_url: string;
}
export interface LocationKeyword extends Option {
	image_url: string;
	state: State
}

export interface PayFrequency extends Option {

}

export interface Service extends Option {

}
export interface Facility extends Option {

}
export interface Amenity extends Option {

}

export interface Category extends Option {

}


export const RequestTypeList = [
	{ label: "Entire Flat", value: 'flat' },
	{ label: "Just A Room", value: 'room' }
]
