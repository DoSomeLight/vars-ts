import { TaskEventsEnum, TaskProps } from './node-timetable'

export interface TieBus {
	onEvent: (event: keyof typeof TaskEventsEnum, cb: (task_obj: TaskProps) => void) => void
	emit: (event: keyof typeof TaskEventsEnum, task_obj: TaskProps) => void
}
