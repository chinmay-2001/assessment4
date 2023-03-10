const { gql } = require('apollo-server');  

export const typeDefs = gql`  
    type Todo {  
        name: String  
        priority: String  
    }  
    type Query {  
        todos: [Todo]  
    }   
    input todoInputData{
        name:String
        priority:String
    }
    types Mutation{
        createTodo(todoInput:todoInputData):Todo
    }
    schema{
        query:Query
        mutation:Mutation
    }
`;  