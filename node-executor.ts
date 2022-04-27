import { DEVICE_TOOGLE_STATUS, DEVICE_TYPES } from '.'

export interface ActionFeat {
	toggle?: keyof typeof DEVICE_TOOGLE_STATUS
	temp_limit?: { up?: string; down?: string }
}

export interface Action {
	device_type: keyof typeof DEVICE_TYPES
	feat: ActionFeat
}
