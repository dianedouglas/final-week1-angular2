import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="selectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="selectedTask.description">
      </div>
      <div>
        <label>Enter Task ID:</label>
        <input [(ngModel)]="selectedTask.id">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {

}