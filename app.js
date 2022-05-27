require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('No hay configuración con Api Key y con Token')
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`

let Respuesta = [];

trello.getCardsOnList("629010d723c8458f52ef649f")
.then(function(response){
    console.log('response ', response);
    Respuesta = response;
}).catch(function(error){
    console.log('error ', error);
});

console.log(Respuesta.length);



