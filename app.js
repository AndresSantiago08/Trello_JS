require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('No hay configuración con Api Key y con Token')
}
let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let Respuesta = trello.getCardsOnList("629010d723c8458f52ef649f");
Respuesta.then((cards) => {
    let Ids = cards.map((card) => {
        return card.id;
    });
    
    trello.deleteCard(Ids[Ids.length - 1], 
        function(error){
            if (error){
                console.log('Could not delete card:', error);
            }else{
                console.log("Card deleted successful");
            }
        }
    )


});
