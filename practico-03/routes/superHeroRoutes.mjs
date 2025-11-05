import express from 'express';

import { 
    ObtenerSuperHeroePorIdController,
    buscarSuperHeroesPorAtributoController, 
    obtenerSuperHeroesMayoresDe30Controller, 
    crearSuperHeroeController, 
    actualizarSuperHeroeController, 
    eliminarSuperPorIdController, 
    eliminarSuperPorNombreController, 
    mostrarFormularioAgregarController, 
    mostrarFormularioEditarController,
    mostrarMenu
    
} from '../controllers/superheroesController.mjs';

import { 
    validarCrearSuperHeroe, 
    validarActualizarSuperHeroe, 
    validarId, 
    validarNombre 
} from '../validation/validationRules.js';
import { handleValidationErrors } from '../validation/errorMiddleware.js';
const router = express.Router();

// ====================
// RUTAS DE VISTAS
// ====================
router.get('/heroes/nuevo', mostrarFormularioAgregarController);
router.get('/heroes/editar/:id', mostrarFormularioEditarController);
router.get('/menu', mostrarMenu);


// ====================
// RUTAS DE API
// ====================
router.get('/heroes/:id', ObtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperHeroesPorAtributoController);
router.get('/heroes/mayor/mayores-30', obtenerSuperHeroesMayoresDe30Controller);

// Rutas POST
router.post('/crearSuperHeroe', validarCrearSuperHeroe, handleValidationErrors, crearSuperHeroeController);

// Rutas PUT
router.put('/actualizarHeroe/:id', validarActualizarSuperHeroe, handleValidationErrors, actualizarSuperHeroeController);

// Rutas DELETE
router.delete('/eliminarSuperID/:id', validarId, handleValidationErrors, eliminarSuperPorIdController);
router.delete('/eliminarSuperNombre/:nombreSuperHeroe', validarNombre, handleValidationErrors, eliminarSuperPorNombreController);

export default router;