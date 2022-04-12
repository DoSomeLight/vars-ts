import { TaskEventsEnum, TaskPropsInterface } from './cron-task-manager'

export interface TieBus<Socket> {
	onEvent: (event: TaskEventsEnum, cb: (task_obj: TaskPropsInterface) => void) => void
	emit: (event: TaskEventsEnum, task_obj: TaskPropsInterface) => void
	UNSAFE_socket: Socket
}
