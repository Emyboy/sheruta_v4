
export interface EachPayFrequency {
	id?: number | string;
	name: string
	price: number
	frequency: string
}

export interface CreateRoomRequestDTO {
	bedrooms: number;
	bathrooms: number;
}
