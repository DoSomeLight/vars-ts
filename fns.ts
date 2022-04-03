import { all_device_types, DEVICE_TYPES } from ".";
import _ from 'lodash-es/array'

type Tenum<K extends string, V extends string | number> = { [s in K]: V }

export const ConvertEnum = <K extends string, V extends string | number>(_enum: Tenum<K, V>) => ({
	toArray_Of_OBJECTS: () =>
		Object.entries<V>(_enum).map(([key, value]) => ({
			key,
			value
		}))
})

export const returnLiteralDeviceTypefromNum = (device_type: number) =>
	_.compact(
		all_device_types.map(
			({ key, value }: { key: keyof typeof DEVICE_TYPES; value: DEVICE_TYPES }) =>
				device_type === value && key
		)
	)[0]
