import { DEVICE_TYPES, DeviceToggleState } from '.'

export interface ActionFeat {
	toggle?: keyof typeof DEVICE_TOOGLE_STATUS
	temp_limit?: { up?: string; down?: string }
}

export interface Action {
	device_type: keyof typeof DEVICE_TYPES
	feat: ActionFeat
}
