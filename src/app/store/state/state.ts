import { todo } from "../models/Todo"

export interface AppState {
    Todo: todo[]
}
export const initialState: todo[] =
    [{
        "name": "Morning Walk",
        "priority": "high"
    }]





