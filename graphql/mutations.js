const { GraphQLString, GraphQLID } = require("graphql");
const User = require("../schemas/usuario");
const generateToken = require("../utils/jwt");
const Post = require("../schemas/post");
const Comment = require("../schemas/comment");

const register = {
    type: GraphQLString,
    args: {
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString}
    },
    description:'register a new user and return a token',
    resolve: async(_, args)=> {
        const{username, password, email} = args;
        const newUser = await User.create({username, password, email});
        const token = generateToken({_id: newUser._id, username: newUser.username, email: newUser.email});
        return token
    }
}

const login = {
    type: GraphQLString,
    args: {
        password: {type: GraphQLString},
        email: {type: GraphQLString}
    },
    description:'sign in an user and return a token',
    resolve: async(_, args)=> {
        const{password, email} = args;
        const user = await User.findOne({email});
        
        if(!user || user.password !== password) throw new Error('user not found')

        return token
    }
}

const createPost = {
    type: GraphQLString,
    args: {
        title:{type: GraphQLString },
        body:{type: GraphQLString }
    },
    description:'creates a new post',
    resolve: async(_, args, {verifiedUser})=> {
        await Post.create({authorId: verifiedUser._id, title: args.title, body: args.body})
        return 'new post created'
    }
}

const updatePost = {
    type: GraphQLString,
    args: {
        id:{type: GraphQLID},
        title:{type: GraphQLString },
        body:{type: GraphQLString }
    },
    description:'updates a post',
    resolve: async(_, args, {verifiedUser})=> {
        if(!verifiedUser) throw new Error('unauthorized')

        await Post.findByIdAndUpdate({_id: args.id}, {title: args.title, body: args.body})
        return 'post succesfully updated'
    }
}

const deletePost = {
    type: GraphQLString,
    args: {
        id:{type: GraphQLID}
    },
    description:'deletes a post',
    resolve: async(_, args, {verifiedUser})=> {
        if(!verifiedUser) throw new Error('unauthorized')

        await Post.findByIdAndDelete({_id: args.id})
        return 'post succesfully deleted'
    }
}

const addComment = {
    type: GraphQLString,
    args: {
        id:{type: GraphQLID},
        comment:{type: GraphQLString},
    },
    description:'adds a comment',
    resolve: async(_, args, {verifiedUser})=> {
        if(!verifiedUser) throw new Error('unauthorized')

        await Comment.create({userId: verifiedUser._id, comment: args.comment, postId: args.id})
        return 'comment added'
    }
}

module.exports = {register, login, createPost, updatePost, deletePost, addComment}