/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DEVICE_TYPES, EnumType } from '.'
import _ from 'lodash'

export const ConvertEnum = <K extends string, V extends string | number>(_enum: EnumType<K, V>) => ({
	toObjectArray: () =>
		Object.entries<V>(_enum).map(([key, value]) => ({
			['key']: key,
			['value']: value,
		})),
})

export const returnLiteralDeviceTypefromNum = (device_type: number) =>
	_.compact(
		ConvertEnum(DEVICE_TYPES)
			.toObjectArray()
			.map(
				({ key, value }: { key: keyof typeof DEVICE_TYPES; value: DEVICE_TYPES }) => device_type === value && key,
			),
	)[0]
