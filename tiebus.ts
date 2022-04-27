import { DeviceToggleState, DEVICE_TYPES } from '.'
import { Action } from './node-executor'
import { TaskEventsEnum, TaskManagerMethod, TaskProps } from './node-timetable'

export interface TieBus {
	timetable?: {
		onEvent?: (event: keyof typeof TaskEventsEnum, cb: TaskManagerMethod) => void
		emit?: (event: keyof typeof TaskEventsEnum, task_obj: TaskProps) => void
	}

	executor?: {
		onEvent?: (event: 'listen_exec', cb: (task: Action) => void) => void
		emit?: (event: 'listen_exec', task: Action) => void
	}

	perform?: {
		emitToDevice?: (device_id: string) => {
			toggle: (device_type: keyof typeof DEVICE_TYPES, detoggleState: DeviceToggleState) => void
			setLimitUp: (device_type: keyof typeof DEVICE_TYPES, limitUp: string) => void
			setLimitDown: (device_type: keyof typeof DEVICE_TYPES, limitDown: string) => void
		}
	}
}
