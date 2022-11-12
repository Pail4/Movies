import express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/', (req, res) => {
    res.send('Recieved POST ')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    console.log(`Example listening on port ${port}`)
})