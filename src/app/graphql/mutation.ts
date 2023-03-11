
import gql from 'graphql-tag';

export const create_Todo=gql`
    mutation createTodo($input:InputTodoData!){
        createTodo(inputTodo:$input){
            _id
            name
            priority
        }
    }
`