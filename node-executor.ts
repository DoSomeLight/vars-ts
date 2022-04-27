import { DEVICE_TYPES, DeviceToggleState } from '.'

export enum ExecutorEventsEnum {
	toggle_device = 'toggle_device',
	set_limit_up = 'set_limit_up',
	set_limit_down = 'set_limit_down',
}

export interface ActionFeat {
	toggle?: keyof typeof DEVICE_TOOGLE_STATUS
	temp_limit?: { up?: string; down?: string }
}

export interface Action {
	device_type: keyof typeof DEVICE_TYPES
	feat: ActionFeat
}
