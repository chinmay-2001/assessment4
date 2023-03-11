import { createAction, props } from "@ngrx/store";
import { todo } from "../models/Todo";

export const getTodo = createAction('myTodo', props<{ listTodo: todo[] }>())
export const addTodo = createAction("AddTodo", props<{ addTodos: todo }>())
export const delTodo = createAction("delTodo", props<{ todoName: string }>())
export const updateTodo = createAction("updateTodo", props<{ upTodo: todo, oldtodo: todo }>())
