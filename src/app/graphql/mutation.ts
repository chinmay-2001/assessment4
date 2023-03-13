
import gql from 'graphql-tag';

export const create_Todo = gql`
    mutation createTodo($todoInput: todoInputData!){
        createTodo(todoInput: $todoInput) {
            _id
            name
            priority
        }
    }
`
export const del_todo = gql`
    mutation delTodo($IdInput:String){
        delTodo(IdInput:$IdInput){
            _id
            name
            priority
        }
    }
`