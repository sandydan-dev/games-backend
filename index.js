const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(express.json());

const games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-adventure",
    platform: "Nintendo Switch",
    releaseYear: 2017,
  },
  {
    id: 2,
    title: "God of War",
    genre: "Action-adventure",
    platform: "PlayStation 4",
    releaseYear: 2018,
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    genre: "Role-playing",
    platform: "PC",
    releaseYear: 2020,
  },
  {
    id: 4,
    title: "Hollow Knight",
    genre: "Metroidvania",
    platform: "PC",
    releaseYear: 2017,
  },
  {
    id: 5,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Multi-platform",
    releaseYear: 2011,
  },
];

// Exercise 2: Get all games
function getAllGames(){
    return { games };
}
app.get("/games", (req, res) => {
    let response = getAllGames();
    if(!response){
        res.status(404).json({ message: 'No games found' });
    }
    return res.status(200).json(response)
});


// Exercise 3: Get game by ID
function getGameById(id){
    let game = games.find(game => game.id === id);
    return { game };
}
app.get('/games/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let response = getGameById(id)
    if(!response){
        res.status(404).json({ message: 'Game id not found' });
    }
    return res.status(200).json(response)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
