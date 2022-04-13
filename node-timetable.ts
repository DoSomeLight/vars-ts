export interface TaskPropsInterface {
	job_key: string
	cron_exp?: string
	task?: string
}

export enum TaskEventsEnum {
	ADD_TASK = 'ADD_TASK',
	START_TASK = 'START_TASK',
	STOP_TASK = 'STOP_TASK',
	UPDATE_TASK = 'UPDATE_TASK',
}

export type TimeTable = {
	[key in TaskEventsEnum]: (taskProps: TaskPropsInterface) => void
}
