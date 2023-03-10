import { createReducer, on } from "@ngrx/store";
import { initialState } from '../state/state'
import { getTodo, addTodo, delTodo } from "../actions/action";

import { todo } from "../models/Todo";
import { filter } from "rxjs";
import { TodoListComponent } from "src/app/container/todo-list/todo-list.component";

export const fetchtodo = createReducer(initialState,
    on(getTodo, (state: todo[]) => { return state }),
    on(addTodo, (state: todo[], { addTodos }) => { return ([...state, addTodos]) }),
    on(delTodo, (state: todo[], { todoName }) => { console.log(state); return state.filter((todos: todo) => todos.name != todoName) }
    )
)



