const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const {usuarios, usuario, posts, post} = require('./queries');
const {register, login, createPost, updatePost, deletePost} = require('./mutations');

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: 'the root for the query type',
    fields:{
        usuarios,
        usuario,
        posts,
        post
    }
})

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: 'the root mutation type',
    fields:{
        register,
        login,
        createPost,
        updatePost,
        deletePost
    }
})

const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});

module.exports = schema