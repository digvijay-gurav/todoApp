import { IUser } from "./user";

export enum TaskStatus {
  PROGRESS = "PROGRESS",
  DONE = "DONE",
}
export interface ITask {
  id: number;
  name: string;
  completed: string;
  description: string;
}
