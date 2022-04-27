import { Action } from './node-executor'
import { TaskEventsEnum, TaskProps, TaskManagerMethod } from './node-timetable'

export interface TieBus {
	timetable?: {
		onEvent?: (event: keyof typeof TaskEventsEnum, cb: TaskManagerMethod) => void
		emit?: (event: keyof typeof TaskEventsEnum, task_obj: TaskProps) => void
	}

	executor?: {
		onEvent?: (event: 'listen_exec', cb: (task: Action) => void) => void
		emit?: (event: 'listen_exec', task: Action) => void
	}
}
