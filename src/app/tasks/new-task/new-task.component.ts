import { Component, EventEmitter, Output,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() closeNewTask = new EventEmitter<void>();
@Output() newTaskAdded = new EventEmitter<NewTaskData>();
// enteredTitle = signal('');
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
    this.newTaskAdded.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    });
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
