import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div *ngFor="let currentTask of childTaskList">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="showDetails(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
}