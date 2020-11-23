import {Component, OnInit} from '@angular/core';
import {Todo} from "../interfaces/todo-interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title: string;
  text: string;
  tasks: Todo[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.addTask();
  }

  addTask() {
    this.tasks.push(new Todo(this.title, this.text));
  }
  public deleteTask(index) {
    this.tasks.splice(index, 1);
  }
}
