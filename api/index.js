const express = require('express');
const app = express();
const knex = require("knex")(
    require("./knexfile")[process.env.NODE_ENV || "development"]
);
const cors = require('cors');
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/authors', (req, res) => {
    knex('authors').select('*')
        .then(data => res.send(data))
})

app.post('/authors', (req, res) => {
    knex('authors').insert(req.body)
        .then(data => res.send({ message: 'you here now' }))
})

app.patch('/authors/:id', (req, res) => {
    const { id } = req.params;
    knex('authors')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'author profile upated' }))
        .catch(err =>
            res.status(404).json({
                message: 'The author you are looking for could not be found'
            }))
})

app.delete('/authors/:id', (req, res) => {
    knex('authors')
        .where({ id: req.body.id })
        .delete(req.body)
        .then(data => res.send({ message: 'Author deleted' }))
        .catch(err =>
            res.status(404).json({
                message: 'author not found, data not deleted'
            }))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

