
const games = require('./games')
const express = require('express');
const app = express();
const port = 3030; 



// Rota inicial 'Home Page'
app.get('/',(req,res) => {
    res.send('<h1>Games</h1>');
});

app.get('/antigos', (req,res) => {
    res.send(games.oldSchool);
})
app.get('/antigos/:id', (req,res) => {
    const id = req.params.id -1;
    const game = games.oldSchool[id]
    res.send(game);
})

app.get('/fps', (req,res) => {
    res.send(games.fps);
})
app.get('/fps/:id', (req,res) => {
    const id = req.params.id -1;
    const game = games.fps[id]
    res.send(game);
})



app.listen(port, ()=>{
    console.info(`App is running in http://localhost:${port}`)
});

