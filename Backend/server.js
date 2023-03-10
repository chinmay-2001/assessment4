const {ApolloServer,gql} =require('apollo-server')
const typeDefs=`
type Todo{
    name:String,
    owner:String
}
type Query{
    todo:[Todo]
}
`


const resolver={
    Query:{
        todo:()=>todo
    }
}