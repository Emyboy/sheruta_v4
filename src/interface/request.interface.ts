import { User, UserInfo } from "./auth.interface";
import { Amenity, Category, Facility, LocationKeyword, PayFrequency, Service, State } from "./options.interface";


export interface RoomRequest {
	user: User
	id: 70
	request_text: string
	bedrooms: number
	toilets: number
	bathrooms: number
	total_rent: number
	room_rent: number
	location_text: string
	location_object: any
	availability_status: 'available' | 'unavailable'
	number_of_flatmate: number
	private_room: boolean
	availability_update: string
	monthly_service_charge: number
	annual_service_charge: number
	service_charge_breakdown: ChargeBreakdown[] | null
	house_rules: string[]
	view_count: number
	call_count: number
	createdAt: string
	updatedAt: string
	publishedAt: string
	video_url: string | null
	biannual_service_charge: number
	image_urls: RequestImage[]
	slug: string
	type: 'room' | 'flat'
	service: Service
	facilities: Facility[]
	user_info: UserInfo
	state: State
	pay_frequency: PayFrequency
	amenities: Amenity[]
	category: Category
	location_keyword: LocationKeyword
	question_count: number
}

export interface RequestImage {
    url: string;
    description?: string;
}

export interface ChargeBreakdown {
	name: string
	price: number
	frequency: 'monthly' | 'annual' | 'bi-annually'
}
