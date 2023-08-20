"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AdminControllers {
    //Métodos Vehículo
    insertarVehiculo(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO vehiculo set?', [req.body]);
            resp.json({ message: 'Vehiculo guardado' });
        });
    }
    listarTipoVehiculo(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoVehiculo = yield database_1.default.query('SELECT * FROM tipovehiculo');
            resp.json(tipoVehiculo);
        });
    }
    modificarVehiculo(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { marca, modelo, color, cveUsuario, idTipoVehiculo } = req.body; // Ajusta estos campos según tu objeto req.body
            const sql = 'UPDATE vehiculo SET marca = ?, modelo = ?, color= ?, cveUsuario = ?, idTipoVehiculo = ? WHERE numPlacas = ?';
            const values = [marca, modelo, color, cveUsuario, idTipoVehiculo, id];
            yield database_1.default.query(sql, values);
            resp.json({ message: 'El vehículo ha sido actualizado' });
        });
    }
    eliminarVehiculo(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('Delete From vehiculo Where numPlacas = ?', [id]);
            resp.json({ message: "El vehiculo se ha eliminado" });
        });
    }
    listarVehiculos(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehiculos = yield database_1.default.query('SELECT * FROM vehiculo;');
            resp.json(vehiculos);
        });
    }
    listarVehiculoPorID(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const vehiculoData = yield database_1.default.query('SELECT * FROM vehiculo WHERE numPlacas = ?', [id]);
            resp.json(vehiculoData);
        });
    }
    listarOwnVehiculos(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const vehiculosOwnData = yield database_1.default.query('SELECT * FROM vehiculo WHERE cveUsuario = ?', [id]);
            resp.json(vehiculosOwnData);
        });
    }
    //Métodos Usuario
    listarUsuarios(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuario;');
            resp.json(usuarios);
        });
    }
    listarUsuarioPorID(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuarios = yield database_1.default.query('SELECT nombre, apePat, apeMat, imgUsuario, telefono, correo, idTipoUsuario FROM usuario WHERE cveUsuario = ?;', [id]);
            resp.json(usuarios);
        });
    }
    modificarUsuario(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nombre, apePat, apeMat, telefono, correo, idTipoUsuario } = req.body; // Ajusta estos campos según tu objeto req.body
            const sql = 'UPDATE usuario SET nombre = ?, apePat = ?, apeMat= ?, telefono = ?, correo = ?, idTipoUsuario = ? WHERE cveUsuario = ?';
            const values = [nombre, apePat, apeMat, telefono, correo, idTipoUsuario, id];
            yield database_1.default.query(sql, values);
            resp.json({ message: 'El usuario ha sido actualizado' });
        });
    }
    eliminarUsuario(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const a = yield database_1.default.query('Delete From usuario Where cveUsuario = ?', [id]);
            resp.json({ message: "El usuario se ha eliminado" });
        });
    }
    insertarUsuario(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            resp.json({ message: 'El usuario se ha insertado' });
        });
    }
    getHistorialIngresos(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const historial = yield database_1.default.query('SELECT * FROM acceso WHERE cveUsuario=?;', [id]);
            resp.json(historial);
        });
    }
    //Métodos varios
    listarAsignaciones(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const asignaciones = yield database_1.default.query('SELECT * FROM asignacion;');
            resp.json(asignaciones);
        });
    }
    listarUserRoles(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRoles = yield database_1.default.query('SELECT * FROM tipousuario;');
            resp.json(userRoles);
        });
    }
}
const adminController = new AdminControllers();
exports.default = adminController;
