import { ImageSelectorData } from "@/components/Pages/PostRoom/Steps/PostRoomImageSelector/ImageSelector";

export interface EachPayFrequency {
	id?: number | string;
	name: string
	price: number
	frequency: string
}

export interface CreateRoomRequestDTO {
	bedrooms: number
	bathrooms: number
	type: 'private-room' | 'shared-room' | 'entire-space' | null
	image_urls: ImageSelectorData[]
}
