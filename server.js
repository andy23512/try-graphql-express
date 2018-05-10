const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema')

// Create an express instance
const app = express()

// Connect with graphql and the graphiql panel
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

// Start server
app.listen(4000, () => {
  console.log('Server is running...')
})
