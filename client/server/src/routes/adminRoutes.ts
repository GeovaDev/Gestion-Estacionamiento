import { Router } from "express";
import adminControllers from "../controllers/adminControllers";
import loginController from "../controllers/loginController";
import qrCodeControllers from "../controllers/qrCodeControllers";

class AdminRoutes{
    public router : Router = Router();
    constructor (){
        this.config();
    }
    config():void{
        //Rutas Vehículo
        this.router.get('/vehiculos', adminControllers.listarVehiculos);
        this.router.get('/tipovehiculo',adminControllers.listarTipoVehiculo);
        this.router.get('/vehiculos/:id', adminControllers.listarVehiculoPorID);
        this.router.post('/vehiculos',adminControllers.insertarVehiculo);
        this.router.put('/vehiculos/:id', adminControllers.modificarVehiculo);
        this.router.delete('/vehiculos/:id',adminControllers.eliminarVehiculo);
        this.router.get('/ownvehiculo/:id',adminControllers.listarOwnVehiculos);

        //Rutas Usuario
        this.router.get('/usuarios', adminControllers.listarUsuarios);
        this.router.get('/usuarios/:id', adminControllers.listarUsuarioPorID);
        this.router.get('/historial/:id',adminControllers.getHistorialIngresos);
        this.router.delete('/usuarios/:id',adminControllers.eliminarUsuario);
        this.router.post('/usuarios',adminControllers.insertarUsuario);
        this.router.put('/usuarios/:id', adminControllers.modificarUsuario);
        
        //Rutas Login
        this.router.post('/login',loginController.userExists);
        this.router.get('/',loginController.userExists);

        //Rutas Roles
        this.router.get('/roles',adminControllers.listarUserRoles);

        //Rutas Asignaciones
        this.router.get('/asignaciones', adminControllers.listarAsignaciones);

        //Ruta Generador de QR
        this.router.post('/generarqr',qrCodeControllers.generarQR);
    }

}

const adminRoutes = new AdminRoutes();
export default adminRoutes.router;
