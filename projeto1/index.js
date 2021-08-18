const express = require('express');
const app = express();
const port = 3000; 

const oldSchool = [
    'Pac-Man',
    'Super Mario Bros.',
    'Space invaders',
];
const moba = [
    'League of legends',
    'Dota II',
    'Smite'
];
const fps = [
    'Counter-Strike: Global Offensive',
    'Valorant',
    'Overwatch'
];
const rogueLikes = [
    'Dead Cells',
    'Hades',
    'Diablo'
];
const openWorld = [
    'Fallout 4',
    'The Elder Scrolls V: Skyrim',
    'Grand Theft Auto V'
];
const mmoRpg = [
    'World of Warcraft',
    'Tibia',
    'Lineage II'
]
const games = [oldSchool, fps, rogueLikes, openWorld, mmoRpg]
// GET / = HOME
app.get('/',(req,res) => {
    res.send("Bem-vindos ao Catálogo de Jogos");
});

app.get('/games', (req, res) => {
    res.send(games);
});
app.get('/games/:id', (req, res) => {
    const id = req.params.id -1;
    const game = games[id];
    if(game == undefined) {
        res.send('Games não existem')
    }else{
        res.send(game);
    };
    
});

app.get('/oldSchool', (req, res) => {
    res.send(oldSchool);
});
app.get('/oldSchool/:id', (req, res)=>{
    const id = req.params.id -1;
    const game = oldSchool[id];
    res.send(game);
});

app.get('/fps', (req, res) =>{
    res.send(fps);
});
app.get('/fps/:id', (req, res) =>{
    const id = req.params.id -1;
    const game = fps[id];
    res.send(game);
});

app.get('/moba', (req, res) =>{
    res.send(moba);
});
app.get('/moba/:id', (req, res) =>{
    const id = req.params.id -1;
    const game = moba[id];
    res.send(game);
});

app.get('/rogueLike', (req, res) =>{
    res.send(rogueLikes);
});
app.get('/rogueLike/:id', (req, res) =>{
    const id = req.params.id -1;
    const game = rogueLikes[id];
    res.send(game);
});

app.get('/openWorlds', (req, res) =>{
    res.send(openWorlds);
});
app.get('/openWorlds/:id', (req, res) =>{
    const id = req.params.id -1;
    const game = openWorlds[id];
    res.send(game);
});

app.get('/mmoRpg', (req, res) =>{
    res.send(mmoRpg);
});
app.get('/mmoRpg/:id', (req, res)=>{
    const id = req.params.id -1;
    const game = mmoRpg[id];
    res.send(game);
});


app.listen(port, ()=>{
    console.info(`App is running in http://localhost:${port}`)
});
// games.forEach(function(G, indices){
//     console.log(G, indices);
// });
function randomGame(min,max){
    return Math.floor(Math.random()*(max - min))
}
app.get('/randomGame', (req, res)=>{
    let random = games[randomGame(0,games.length)]
    res.send(`${random[randomGame(0,random.length)]}`)
})