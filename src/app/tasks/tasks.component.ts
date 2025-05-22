import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  showNewTaskForm = false;


 constructor(private tasksService: TasksService) {
  
 }

  get userTasks() {

    console.log('userTasks got triggered');
    this.showNewTaskForm = false;
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(taskId: string) {
    console.log('Task completed:', taskId);
    // Implement the logic to mark the task as completed;
    this.tasksService.removeTask(taskId);
  }

  onAddTask(taskData: NewTaskData) {
    console.log('Add task clicked');
    // Implement the logic to add a new task
    this.tasksService.addTask(taskData, this.userId);

    this.showNewTaskForm = false;
  }

  onStartAddingTask() {
    console.log('Add task clicked');
    // Implement the logic to add a new task
    this.showNewTaskForm = true;
  }  

  onCloseNewTask() {
    console.log('Close new task clicked ');
    // Implement the logic to close the new task form
    this.showNewTaskForm = false;
  } 

}
