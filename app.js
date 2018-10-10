const argv = require('./config-yargs/yargs').argv;
const color = require('colors');
const tareas = require('./tareas/tareas');


let comando = argv._[0];


switch (comando) {
    case 'listar':
        let listado = tareas.getListado(argv.completado);
        if (listado.length === 0) {
            console.log('No Encontraron tareas.');
        } else {
            for (let tarea of listado) {
                console.log('======== Tareas ========'.green);
                console.log(tarea.descripcion);
                console.log(`Estado: ${tarea.status}`);
                console.log('========================='.green);
            }
        }
        break;

    case 'crear':
        let tarea = tareas.crearTarea(argv.descripcion);
        console.log('Tarea creada con éxito', tarea);
        break;

    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'eliminar':
        let eliminado = tareas.eliminar(argv.descripcion);
        console.log(eliminado);
        break;

    default:
        console.log(`El comando: ${comando} no es reconocido`);
        break;
}

