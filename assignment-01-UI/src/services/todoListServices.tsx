import { CommonApiService } from "./commonAPIservice";
import { ITask } from "../types/task";

export class FollowUpTaskService extends CommonApiService {

    constructor() {
        super();
    }
    public getToDoList() {
         return this.get(`getToDoList`);
     }
     public AddTodoTask(task : ITask){ 
        const createTodoTask = {
            task: task.name,
            description: task.description
        }
        return this.save('createTodo',createTodoTask);
     }
     public deleteTask(taskId : number){
       return this.delete(`deleteTodo/${taskId}/`);
    }
}