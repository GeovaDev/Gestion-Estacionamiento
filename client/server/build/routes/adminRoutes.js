"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminControllers_1 = __importDefault(require("../controllers/adminControllers"));
const loginController_1 = __importDefault(require("../controllers/loginController"));
const qrCodeControllers_1 = __importDefault(require("../controllers/qrCodeControllers"));
class AdminRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Rutas Vehículo
        this.router.get('/vehiculos', adminControllers_1.default.listarVehiculos);
        this.router.get('/tipovehiculo', adminControllers_1.default.listarTipoVehiculo);
        this.router.get('/vehiculos/:id', adminControllers_1.default.listarVehiculoPorID);
        this.router.post('/vehiculos', adminControllers_1.default.insertarVehiculo);
        this.router.put('/vehiculos/:id', adminControllers_1.default.modificarVehiculo);
        this.router.delete('/vehiculos/:id', adminControllers_1.default.eliminarVehiculo);
        this.router.get('/ownvehiculo/:id', adminControllers_1.default.listarOwnVehiculos);
        //Rutas Usuario
        this.router.get('/usuarios', adminControllers_1.default.listarUsuarios);
        this.router.get('/usuarios/:id', adminControllers_1.default.listarUsuarioPorID);
        this.router.get('/historial/:id', adminControllers_1.default.getHistorialIngresos);
        this.router.delete('/usuarios/:id', adminControllers_1.default.eliminarUsuario);
        this.router.post('/usuarios', adminControllers_1.default.insertarUsuario);
        this.router.put('/usuarios/:id', adminControllers_1.default.modificarUsuario);
        //Rutas Login
        this.router.post('/login', loginController_1.default.userExists);
        this.router.get('/', loginController_1.default.userExists);
        //Rutas Roles
        this.router.get('/roles', adminControllers_1.default.listarUserRoles);
        //Rutas Asignaciones
        this.router.get('/asignaciones', adminControllers_1.default.listarAsignaciones);
        //Ruta Generador de QR
        this.router.post('/generarqr', qrCodeControllers_1.default.generarQR);
    }
}
const adminRoutes = new AdminRoutes();
exports.default = adminRoutes.router;
