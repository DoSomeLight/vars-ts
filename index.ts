import _ from 'lodash-es/array'
import { ConvertEnum } from './fns'

export enum MAIN_PATH {
	'/',
	'/auth',
	'/register'
}

export enum DEVICE_TYPES {
	relay = 0,
	termo = 1,
	lumen = 2
}

export enum DEVICE_TOOGLE_STATUS {
	'onn',
	'off'
}

export type DEVICE_ONOFFLINE_STATUS = 'online' | 'offline'

export type EACH_DEVICE_PROPS = {
	device_literal_type: keyof typeof DEVICE_TYPES
	device_type: number
	device_id: string
	toogle_status: keyof typeof DEVICE_TOOGLE_STATUS
	onoffline: DEVICE_ONOFFLINE_STATUS
	device_cr_id: string
	dname: string
}

export type DEVICES_DATA = EACH_DEVICE_PROPS[]

export type ACCOUNT_DATA = {
	user_device_system: 'mobile' | 'pc'
	user_email: string
	user_name: string
	user_hash: string
	user_phone: string
}

export type COOKIES_DATA = {
	account_data: ACCOUNT_DATA
	devices_data: DEVICES_DATA
}

export type _unknown = 'UNKNOWN' | undefined | null

export const all_device_types = ConvertEnum(DEVICE_TYPES).toArray_Of_OBJECTS()
