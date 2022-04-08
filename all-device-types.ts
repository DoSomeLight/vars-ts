import { DEVICE_TYPES } from '.'
import { ConvertEnum } from './fns'

export const all_device_types = ConvertEnum(DEVICE_TYPES).toArray_Of_OBJECTS()
