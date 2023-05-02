const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const User = require("../schemas/usuario");

const UserType = new GraphQLObjectType({
    name: "UserType",
    description: 'the root for the user type',
    fields:{
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    }
})

const PostType = new GraphQLObjectType({
    name: "PostType",
    description: 'the root for the post type',
    fields:{
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        body: {type: GraphQLString},
        author: {type: UserType, resolve(parent){
            return User.findById({_id: parent.authorId})
        }}
    }
})

module.exports = {UserType, PostType}