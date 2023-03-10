const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/rickandmorty/character/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
        
        const data = response.data;
        const infoCharacter = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }

        res.status(200).json(infoCharacter);

    } catch (error) {
        res.status(404).send(error.message);
    }
})


app.get('/rickandmorty/detail/:detailId', async (req, res) => {
    try {
        const { detailId } = req.params;

        const { data } = await axios(`https://rickandmortyapi.com/api/character/${detailId}`);


        const infoCharacterDetail = {
            name: data.name,
            status: data.status,
            species: data.species,
            gender: data.gender,
            origin: data.origin,
            image: data.image
        }

        res.status(200).json(infoCharacterDetail);

    } catch (error) {
        res.status(404).send(error.message);
    }
})


let fav = [];

app.get('/rickandmorty/fav', (req, res) => {
    res.status(200).json(fav);
})



app.post('/rickandmorty/fav', (req, res) => {
    fav.push(req.body);

    res.status(200).send('Se guardaron correctamente los datos');
})


app.delete('/rickandmorty/fav/:id', (req, res) => {    
    const { id } = req.params;

    const favFiltered = fav.filter(char => char.id !== parseInt(id));
    fav = favFiltered;

    res.status(200).send('Se eliminĂ³ correctamente')
})








module.exports = app; 






