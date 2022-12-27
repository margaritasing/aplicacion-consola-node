require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');




const main = async () => {
    mostrarMenu();
    pausa();
}

main()