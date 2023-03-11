import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoServiceService } from 'src/app/service/todo-service.service';
import { addTodo, delTodo, updateTodo } from 'src/app/store/actions/action';
import { todo } from 'src/app/store/models/Todo';
import { selectTodos } from 'src/app/store/selectors/selector';


// import { AddTodo } from 'src/app/store/reducers/reducer';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: any;
  // todos$ = this.store.select(selectTodos)
  constructor(private store: Store, private service: TodoServiceService) {
  }
  ngOnInit(): void {
    console.log("here")
    this.todos$ = this.service.fetchTodo()
  }


  AddTodo(addTodos: todo) {
    // console.log("reached here")
    // this.store.dispatch(addTodo({ addTodos }))
    // this.service.createTodo(addTodo)
  }
  delTodo(todoName: string) {
    this.store.dispatch(delTodo({ todoName }))
  }
  oldtodo: todo = { name: "chinmay", priority: "low" };
  setOld(old: todo) {
    this.oldtodo = old
  }

  upTodo(upTodo: todo) {
    this.store.dispatch(updateTodo({ upTodo: upTodo, oldtodo: this.oldtodo }))
  }
}
