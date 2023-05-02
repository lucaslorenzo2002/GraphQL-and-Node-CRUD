const express = require('express');
const { graphqlHTTP } = require("express-graphql");
const schema = require('./graphql/schemas');
const {connection} = require('./db/index');
const {auth} = require('./middlewares/authentication');

connection()

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use(auth)
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.get('/home', (req,res) => {
    res.json('home')
})

const server = app.listen(process.env.PORT || PORT, () => {
    console.log(` server listening on PORT: ${PORT}`)
})

server.on('error', err => console.log(err))