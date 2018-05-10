const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql') // destructure the objects we need from graphql
const fetch = require('node-fetch')

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'This is my post type',
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    posts: {
      type: new GraphQLList(PostType),
      args: {},
      async resolve (parentValue, args) {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        return posts.json()
      }
    }
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery
}) // export the root query
