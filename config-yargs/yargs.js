
let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
let completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente la tarea'
};

const argv = require('yargs')
    .command('listar', 'Muestra las tareas completadas o por hacer',{completado})
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualizar una tarea por hacer', {
        descripcion,
        completado
    })
    .command('eliminar', 'Eliminar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = { argv };