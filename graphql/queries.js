const { GraphQLList, GraphQLID } = require("graphql");
const User = require("../schemas/usuario");
const Post = require("../schemas/post");
const { UserType, PostType, CommentType } = require("./typeDefs");
const Comment = require("../schemas/comment");

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
        return await Post.find()
    }
}

const post = {
    type: PostType,
    description:'return one post',
    args:{
        id: {type: GraphQLID}
    },
    resolve: async(_, args)=> {
        return await Post.findById({_id: args.id})
    }
}

const getComments = {
    type: CommentType,
    description:'return all comments from one post',
    resolve: async()=> {
        return await Comment.find()
    }
}

module.exports = { usuarios, usuario, posts, post, getComments }