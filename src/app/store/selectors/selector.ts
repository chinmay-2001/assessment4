import { createFeatureSelector, createSelector } from "@ngrx/store"
import { todo } from "../models/Todo"
// import { AppState } from "../state/state";

export const selectTodoState = createFeatureSelector<todo[]>('todos');

export const selectTodos = createSelector(selectTodoState, (todo: todo[]) => { return todo })
