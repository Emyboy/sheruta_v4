import { Amenity, Category, Facility, Habit, LocationKeyword, PayFrequency, Service, State } from '@/interface/options.interface'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface OptionState {
	categories: Category[]
	services: Service[]
	location_keywords: LocationKeyword[]
	facilities: Facility[]
	amenities: Amenity[]
	habits: Habit[]
	pay_frequencies: PayFrequency[]
	states: State[]
}

const initialState: OptionState = {
	categories: [],
	facilities: [],
	habits: [], 
	location_keywords: [],
	pay_frequencies: [],
	services: [],
	states: [],
	amenities: []
}

export const optionSlice = createSlice({
	name: 'option',
	initialState,
	reducers: {
		setOptionState: (state: any, action: PayloadAction<any>): any => {
			return { ...state, ...action.payload }
		},
	},
})

export const { setOptionState } = optionSlice.actions

export default optionSlice.reducer
