const express = require('express');
const app = express();
var path = require("path")
let  heros = require('./data/heroes')

app.get('/', (req, res) => {
    res.send(`Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y
    hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir 
    tus objetivos. Recuerda: ¡nunca pares de creer en ti!.`);
});
app.get('/heroes', (req, res) => {
    let file = path.resolve('./data/heroes.json')
    res.sendFile(file);
});
app.get('/heroes/detalle/:id', (req, res) => {
    let ids = req.params.id - 1;
    if (ids >= 0 && ids <= heros.length - 1) {
        let resultado = `Hola, mi nombre es ${heros[ids].nombre} y soy ${heros[ids].profesion}`;
        res.send(resultado);
    } else {
        let resultado = `El heroe que usted busca, no existe`;
        res.send(resultado);
    }
});
app.get('/heroes/bio/:id/ok', (req, res) => {
    let ids = req.params.id - 1;
    if (ids >= 0 && ids <= heros.length - 1) {
        let resultado = `${heros[ids].nombre} </br> ${heros[ids].resenia}`;
        res.send(resultado);               
    } else {
        let resultado = `"No encontramos un héroe para mostrarte su biografía`;
        res.send(resultado);
    }
});
app.get('/heroes/bio/:id', (req, res) => {
    let ids = req.params.id - 1;
    if (ids >= 0 && ids <= heros.length - 1) {
        let resultado = `${heros[ids].nombre} </br> Lamento que no desees saber más de mi :(`
        res.send(resultado);         
    } else {
        let resultado = `"No encontramos un héroe para mostrarte su biografía`;           
        res.send(resultado);
        }
});
app.get('/creditos', (req, res) => {
    res.send(`We are the champion.`);
});

app.listen (3000, () => console.log('Server On!!! running in port 3000'));

