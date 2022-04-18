import { TaskEventsEnum, TaskProps } from './node-timetable'

export interface TieBus<Socket> {
	onEvent: (event: TaskEventsEnum, cb: (task_obj: TaskProps) => void) => void
	emit: (event: TaskEventsEnum, task_obj: TaskProps) => void
	UNSAFE_socket: Socket
}
