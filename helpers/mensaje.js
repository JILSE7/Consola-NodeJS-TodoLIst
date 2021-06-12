const { rejects } = require('assert');
const { resolve } = require('path');
const menuOpciones = require('./menu');

require('colors');


const mostrarMenu = () => {
    //Promesa
    return new Promise((resolve, reject) => {

        menuOpciones()
     
         //Pedir y mostrar informacion en la consola
         const readLine = require('readline').createInterface({
             input: process.stdin,
             output: process.stdout
         });
     
         readLine.question('Seleccione una opcion: ', (opt) => {
             resolve(opt);
             readLine.close();
         });
    })


};



const pausa = ()=> {

    return new Promise ((resolve, reject) => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPresione ${'ENTER'.cyan} para continuar: \n`, () => {
            readLine.close();
            resolve()
        })

    })

}


module.exports = {
    mostrarMenu,
    pausa
}