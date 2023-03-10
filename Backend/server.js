const { ApolloServer } = require('apollo-server');  
// const typeDefs = gql`  
//     type Todo {  
//     name: String  
//     priority: String  
//     }  
//     type Query {  
//     todos: [Todo]  
//     }   
// `;  

// const resolvers = {  
//     Query: {  
//     todos: () => todos,  
//     },  
//     mutation:{

//     }
// };  


const server = new ApolloServer({ typeDefs, resolvers });  
server.listen().then(({ url }) => {  
    console.log(`Server ready at ${url}`);  
});  
