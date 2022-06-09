const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Peticion get recibida')
    res.end();
});

app.post('/aboute/:id', (req, res) =>{
    res.send('post request received')
    console.log(req.body);
    console.log(req.params);
})

app.put('/contact', (req, res) =>{
    res.send('put request received')
})

app.delete('/test/:userId', (req, res) =>{
    res.send(`user ${req.params}`);
})

app.listen(3000, () =>{
    console.log('server on port 3000');
});