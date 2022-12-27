require('colors')

const mostrarMenu = () => {    
    console.log('================================='.bgYellow);
    console.log('     Seleccione una opción '.cyan);
    console.log('=================================\n'.bgYellow);
    console.log(`${'1'.green}. Crear Tarea`)
    console.log(`${'2'.green}. Listar Tareas`)
    console.log(`${'3'.green}. Listar Tareas completadas`)
    console.log(`${'4'.green}. Listar Tareas  pendientes`)
    console.log(`${'5'.green}. Completar Tareas(s)`)
    console.log(`${'6'.green}. Borrar Tarea`) 
    console.log(`${'0'.green}. Salir \n`) 

    const readline = require('readline').createInterface({
        input: process.stdin,
        output:process.stdout
    }) 
    
    readline.question('Selecciones una opción: ', (opt)=>{
        console.log({opt})
        readline.close();
    })
}

const pausa = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output:process.stdout
    }) 
    
    readline.question(`\nPresione ${'ENTER'.green} para continuar \n`, (opt) => {
        console.log({opt})
        readline.close();
    })

}


module.exports = {
    mostrarMenu, 
    pausa
}