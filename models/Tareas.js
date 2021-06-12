const Tarea = require("./tarea");


class Tareas {

    _listado = {};

    //Getter
    get listado(){

        const listado = [];
        //object.keys retorna un arreglo de las llaves de los objetos
        //Inmediatamente despues se recorre y se identifica la tarea
        //y se agrega al arreglo listado
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado
    }

    constructor(){
        this._listado = {}
    };

    crearTarea (desc = ''){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    };

    cargarTareas (tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
    }

    listadoCompleto(){
        const tareas = this.listado;
        return tareas.forEach((tarea, i) => {
            const idx = `${i + 1}`.cyan;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) ?  'Completada'.cyan : 'Pendiente'.red

            console.log(`${idx} ${desc} :: ${estado}`);
        })
    };

    listadoPc (completada = true){
        let contador = 0;
        const tareas = this.listado;
        return tareas.forEach((tarea, i) => {
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) ?  'Completada'.cyan : 'Pendiente'.red

            if(completada){
                if(completadoEn){
                    contador =+ 1;
                    console.log(`${(contador + "-").cyan} ${desc} :: ${estado}`);
                }
            }else{
                if(!completadoEn){
                    contador =+ 1;
                    console.log(`${(contador + "-").red} ${desc} :: ${estado}`);
                }
            }
        })
    };

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id]
        }
    };

    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            //Ubicando la tarea
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        });


        this.listado.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }

};


module.exports = Tareas;