import { Habit, LocationKeyword, PayFrequency, State } from "./options.interface";

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    avatar_url: string | null;
    email: string;
    last_seen: string;
}

export interface PersonalInfo {
    id: number;
    seeking: boolean;
}

export interface EmailSettings {
    id: number;
}

export interface UserInfo {
	id: number
	seeking: boolean | null
	occupation: string | null
	bio: string | null
	habits: Habit[] | null
	state: State | null
	pay_frequency: PayFrequency | null
	location_keyword: LocationKeyword | null
	seeking_gender: string | null
	gender: string | null
	min_age_range: number | null
	max_age_range: number | null
	religion: string | null
	employment_status: string | null
	place_of_work: string | null
	date_of_birth: string | null
	budget: number | null
}
