import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todo } from 'src/app/store/models/Todo';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent {

  constructor(private store: Store) { }

  @Input()
  todoList: todo[] = []

  @Output() add = new EventEmitter<todo>()
  todo_to_add: string = ""
  Priority_to_add: string = ""

  @Output() del = new EventEmitter<string>()

  setTodo() {
  }
}