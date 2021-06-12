

const menuOpciones = () => {
    console.clear();
    console.log('========================'.cyan);
    console.log('Seleccione una opcion'.cyan);
    console.log('========================\n'.cyan);
    //Oopciones
    console.log(`${'1.'.cyan} Crear una tarer`);
    console.log(`${'2.'.cyan} Mostrar tareas`);
    console.log(`${'3.'.cyan} Mostrar tareas completadas`);
    console.log(`${'4.'.cyan} Mostrar tareas pendientes`);
    console.log(`${'5.'.cyan} Completar tarea(s)`);
    console.log(`${'6.'.cyan} Borrar tarea`);
    console.log(`${'0.'.cyan} Salir\n`);
}

module.exports = menuOpciones