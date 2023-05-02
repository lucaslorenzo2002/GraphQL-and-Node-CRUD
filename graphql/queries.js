const { GraphQLList, GraphQLID } = require("graphql");
const User = require("../schemas/usuario");
const Post = require("../schemas/post");
const { UserType, PostType } = require("./typeDefs");

const usuarios = {
    type: new GraphQLList(UserType),
    description:'return all users',
    resolve: async()=> {
        const usuarios = User.find()
        return usuarios
    }
}

const usuario = {
    type: UserType,
    description:'return one user',
    args:{
        id: {type: GraphQLID}
    },
    resolve: async(_, args)=> {
        const usuario = User.findById({_id: args.id})
        return usuario
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description:'return all posts',
    resolve: async()=> {
        const posts = await Post.find()
        return posts
    }
}

const post = {
    type: PostType,
    description:'return one post',
    args:{
        id: {type: GraphQLID}
    },
    resolve: async(_, args)=> {
        const post = await Post.findById({_id: args.id})
        return post
    }
}

module.exports = { usuarios, usuario, posts, post }