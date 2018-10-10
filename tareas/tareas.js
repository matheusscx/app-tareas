
const fs = require('fs');

let tareasPorHacer = [];

const cargarTareas = () => {
    try {
        tareasPorHacer = require('../DB/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
};

const guardaTareas = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('DB/data.json', data, (err) => {
        if (err) {
            console.log(err);
        }
    });
};

const crearTarea = (descripcion) => {
    cargarTareas();
    let tarea = {
        descripcion,
        status: false
    }
    tareasPorHacer.push(tarea);
    guardaTareas();
    return tarea;
};

const getListado = (completado) => {
    cargarTareas();
    let tareasFiltradas;
    if(completado === true){
         tareasFiltradas = tareasPorHacer.filter(tarea =>{
            return tarea.status === true ;
        });
    }else {
         tareasFiltradas = tareasPorHacer.filter(tarea =>{
            return tarea.status === false;
        });
    }
    return tareasFiltradas;
};

const eliminar = (descripcion) => {
    cargarTareas();
    let index = tareasPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        tareasPorHacer.splice(index, 1);
        guardaTareas();
        return true;
    } else {
        return false;
    }
}

const actualizar = (descripcion, status = true) => {
    cargarTareas();
    let index = tareasPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        tareasPorHacer[index].status = status;
        guardaTareas();
        return true;
    } else {
        return false;
    }

};

module.exports = {
    crearTarea,
    getListado,
    actualizar,
    eliminar
};