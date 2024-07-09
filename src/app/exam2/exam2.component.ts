import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../todolist-model';
import { ToDoListService } from '../todolist.service';

@Component({
  selector: 'app-exam2',
  templateUrl: './exam2.component.html',
  styleUrls: ['./exam2.component.css']
})
export class Exam2Component implements OnInit {
  toDoList: ToDoItem[] = [];
  completedItems: ToDoItem[] = [];

  constructor(private toDoListService: ToDoListService) {}

  ngOnInit(): void {
    this.toDoList = this.toDoListService.getToDoList();
    this.completedItems = this.toDoListService.getCompletedItems();
  }

  markAsDone(index: number): void {
    const item = this.toDoList[index];
    this.toDoListService.addCompletedItem(item);
    this.toDoListService.deleteToDoItem(index);
    this.completedItems = this.toDoListService.getCompletedItems();
  }

  deleteTask(index: number): void {
    this.toDoListService.deleteToDoItem(index);
    this.toDoList = this.toDoListService.getToDoList();
  }

  incrementPriority(index: number): void {
    this.toDoListService.incrementPriority(index);
  }

  sortTasks(): void {
    this.toDoListService.sortToDoList();
  }

  toggleBookmark(event: Event): void {
    const element = event.target as HTMLElement;
    element.classList.toggle('fa-solid');
  }
}
