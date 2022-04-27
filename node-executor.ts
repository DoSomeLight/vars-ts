import { DEVICE_TYPES, DeviceToggleState } from '.'

export enum ExecutorEventsEnum {
	toggle_device = 'toggle_device',
	set_limit_up = 'set_limit_up',
	set_limit_down = 'set_limit_down',
}

export interface ActionFeat {
	device_id: string
	toggle_state?: DeviceToggleState
	temp_limit?: {
		up?: string
		down?: string
	}
}

export interface Action {
	device_type: keyof typeof DEVICE_TYPES
	feat: ActionFeat
}

export interface PERFORM_EXECUTOR_OBJECT {
	device_id: string
	device_type: keyof typeof DEVICE_TYPES
	toggle_state?: DeviceToggleState
	limit_up?: string
	limit_down?: string
}
