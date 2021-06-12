const inquirer = require('inquirer');
require('colors')

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {value: '1', name: `${"1.-".cyan} Crear tarea`},
            {value: '2', name: `${"2.-".cyan} Mostrar tareas`},
            {value: '3', name: `${"3.-".cyan} Mostrar tareas completadas`},
            {value: '4', name: `${"4.-".cyan} Mostrar tareas pendientes`},
            {value: '5', name: `${"5.-".cyan} Completar tareas`},
            {value: '6', name: `${"6.-".cyan} Borrar tarea`},
            {value: '0', name: `${"0.-".cyan} Salir\n`}
        ]
    }
]


const inquirerMenu = async()=> {
    console.clear();
    console.log('========================'.cyan);
    console.log('Seleccione una opcion'.cyan);
    console.log('========================\n'.cyan);

    const {opcion} = await inquirer.prompt(questions);

    return opcion
};


const pausa = async() => {
    const question = [
        {type: 'input', name: 'enter', message:`${'Enter'.cyan} para continuar: `}
    ]

    console.log('\n');
    await inquirer.prompt(question)
};

const leerInput = async(message) => {
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate(value) { 
            //Error
            if(value.length === 0){
                return 'Por Favor Ingrese un valor'.cyan
            }
            //Good
            return true
        }
    };

    const {desc} = await inquirer.prompt(question);
    return desc
}



const listaBorrar = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${(i + 1).toString().cyan}`
        return {
            value : tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: "0",
        name: '0'.cyan + ' Cancelar'
    });

    const questions = [
        {
            type: 'list',
            name : 'id',
            message: 'Borrar',
            choices

        }
    ];

    const {id} = await inquirer.prompt(questions);
    
    return id;
};

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(question);

    return ok;
};

const mostrarCheckLIst = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${(i + 1).toString().cyan}`
        return {
            value : tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });



    const question = [
        {
            type: 'checkbox',
            name : 'ids',
            message: 'Seleccione',
            choices

        }
    ];

    const {ids} = await inquirer.prompt(question);
    
    return ids;
};



module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listaBorrar,
    confirmar,
    mostrarCheckLIst
}