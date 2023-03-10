import { createAction, props } from "@ngrx/store";
import { todo } from "../models/Todo";

export const getTodo = createAction('myTodo')
export const addTodo = createAction("AddTodo", props<{ addTodos: todo }>())
export const delTodo = createAction("AddTodo", props<{ todoName: string }>())
