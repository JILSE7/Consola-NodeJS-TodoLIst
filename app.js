require('colors');
const Tarea = require('./models/tarea');
const Tareas = require('./models/Tareas');
//Helpers
const { inquirerMenu, pausa, leerInput, listaBorrar, confirmar, mostrarCheckLIst } = require('./helpers/inquirer');
const { guardarDB, leerDB } = require('./helpers/database');


console.clear();

//Funcion Principal
const main = async() => {
    let opcion = '';
    const tareas = new Tareas();

    const tareasArr = leerDB();
    if(tareasArr){
        tareas.cargarTareas(tareasArr)
    }
    do {
        opcion = await inquirerMenu()

        switch (opcion) {
            case "1":
                //Crear Tarea
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc)
                console.log(desc);
                break;
            case "2": 
                console.log("Listado de tareas".cyan);
                tareas.listadoCompleto();
            break;

            case "3": 
                tareas.listadoPc();
            break;

            case "4": 
                tareas.listadoPc(false);
            break;

            case "5": 
                const ids = await mostrarCheckLIst(tareas.listado)
                tareas.toggleCompletadas(ids);
            break;
            case "6":
                const id = await listaBorrar(tareas.listado);
                if(id !== '0'){
                    const confirm = await confirmar('Esta seguro que desea borrar esta tarea');
                    if(confirm){
                        tareas.borrarTarea(id);
                        console.log('Tarea Eliminada');
                    }else{
                        console.log('aun sigo');
                    }
                };
            default:
                break;
        }

        guardarDB(tareas.listado);


        await pausa() 
    } while (opcion != 0);
    
    
    
    
}

/*const tareas = new Tareas();
const tarea = new Tarea('Comprar Comida');
//{uuid : tarea}
tareas._listado[tarea.id] = tarea;
console.log(tareas);*/

//Ejecutando la funcion main
main();