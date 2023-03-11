const { ApolloServer,gql } = require('apollo-server-express');
const express= require('express')

const app=express()

let todos = [  
    {  
        _id:1,
        name: 'wake up at 5',  
        priority: 'low',  
    },  
    {  
        _id:2,
        name: 'morning walk at 6',  
        priority: 'low',  
    },  
    {  
        _id:3,
        name: 'Reliance Industries',  
        priority: 'Dhirubhai Ambani',  
    },  
    {   
        _id:4,
        name: 'Bajaj Auto',  
        priority: 'Jamnalal Bajaj',  
    },  
];  

const typeDefs = gql`  
    type Todo {  
        _id: ID!
        name: String!  
        priority: String!  
    }  
    type Query {  
        todos: [Todo!]! 
    }   
    type RootQuery{
        todos:Query!
    }
    input todoInputData{
        name:String!
        priority:String!
    }
    type Mutation{
        createTodo(todoInput:todoInputData):Todo!
        updateTodo(id:ID!,todoInput:todoInputData):Todo!
    }
    type Schema{
        query:RootQuery
        mutation:Mutation
    }   
`;  

const resolvers={
    Query:{
        todos:()=>{return todos}
    },
    Mutation:{
        createTodo:(_, {todoInput})=>{
            todos= [...todos,todoInput]
            return todoInput
        },
    }
}

const server = new ApolloServer({ typeDefs, resolvers }); 

async function startServer(){
    await server.start()
    server.applyMiddleware({app})

    app.listen(4000,()=>{
        console.log(`server start at http://localhost:4000${server.graphqlPath}`)
    })
}
startServer()