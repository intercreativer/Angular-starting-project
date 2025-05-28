import { Component, EventEmitter, inject, Input, Output,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
private taskService = inject(TasksService);
@Input() userId: string = '';
@Output() closeNewTask = new EventEmitter<void>();

enteredTitle = '';
enteredSummary = '';
enteredDueDate = '';

  OnCancel() {
    console.log('Cancel clicked');
    // Implement the logic to cancel the task creation
    this.closeNewTask.emit();
   
  }
  onSumbitNewTask(){
    console.log('create new task clicked');

    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.userId);
    this.closeNewTask.emit();
  }

  onSubmit() {
    // this.newTaskAdded.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDueDate
    // });
    console.log('submit happened');
  }
}
