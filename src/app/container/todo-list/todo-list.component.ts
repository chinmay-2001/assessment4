import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { addTodo, delTodo } from 'src/app/store/actions/action';
import { todo } from 'src/app/store/models/Todo';
import { selectTodos } from 'src/app/store/selectors/selector';


// import { AddTodo } from 'src/app/store/reducers/reducer';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // todos$: any;
  todos$ = this.store.select(selectTodos)
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    // this.store.select(selectTodos).subscribe(ev => { console.log(ev); this.todos$ = ev })
  }

  AddTodo(addTodos: todo) {
    console.log("reached here")
    this.store.dispatch(addTodo({ addTodos }))
  }
  delTodo(todoName: string) {
    this.store.dispatch(delTodo({ todoName }))
  }
}
