import { Request,Response } from "express";
import pool from "../database";
class AdminControllers{
    
    //Métodos Vehículo

    public async insertarVehiculo(req:Request, resp:Response){
        console.log(req.body);
        await pool.query('INSERT INTO vehiculo set?',[req.body]);
        resp.json({message: 'Vehiculo guardado'});
    }

    public async listarTipoVehiculo(req:Request,resp:Response){
        const tipoVehiculo=await pool.query('SELECT * FROM tipovehiculo');
        resp.json(tipoVehiculo)
    }

    public async modificarVehiculo(req:Request, resp:Response){
        const { id } = req.params;
        const { marca, modelo, color, cveUsuario, idTipoVehiculo } = req.body; // Ajusta estos campos según tu objeto req.body
        const sql = 'UPDATE vehiculo SET marca = ?, modelo = ?, color= ?, cveUsuario = ?, idTipoVehiculo = ? WHERE numPlacas = ?';
        const values = [marca, modelo, color, cveUsuario, idTipoVehiculo, id];
        await pool.query(sql, values);
        resp.json({ message: 'El vehículo ha sido actualizado' });
    }

    public async eliminarVehiculo(req:Request, resp:Response){
        const {id} = req.params;
        await pool.query('Delete From vehiculo Where numPlacas = ?',[id]);
        resp.json({message: "El vehiculo se ha eliminado"});
    }

    public async listarVehiculos(req: Request, resp: Response) {
        const vehiculos = await pool.query('SELECT * FROM vehiculo;');
        resp.json (vehiculos);
    }

    public async listarVehiculoPorID(req:Request,resp:Response){
        const {id}=req.params;
        const vehiculoData = await pool.query('SELECT * FROM vehiculo WHERE numPlacas = ?', [id])
        resp.json(vehiculoData);
    }

    public async listarOwnVehiculos(req:Request, resp:Response){
        const {id}=req.params;
        const vehiculosOwnData=await pool.query('SELECT * FROM vehiculo WHERE cveUsuario = ?',[id]);
        resp.json(vehiculosOwnData);
    }

    //Métodos Usuario

    public async listarUsuarios(req: Request, resp: Response) {
        const usuarios = await pool.query('SELECT * FROM usuario;');
        resp.json (usuarios);
    }
    public async listarUsuarioPorID(req: Request, resp: Response) {
        const {id}=req.params;
        const usuarios = await pool.query('SELECT nombre, apePat, apeMat, imgUsuario, telefono, correo, idTipoUsuario FROM usuario WHERE cveUsuario = ?;',[id]);
        resp.json (usuarios);
    }
    public async modificarUsuario(req: Request, resp: Response) {
        const { id } = req.params;
        const { nombre, apePat, apeMat, telefono, correo, idTipoUsuario } = req.body; // Ajusta estos campos según tu objeto req.body
        const sql = 'UPDATE usuario SET nombre = ?, apePat = ?, apeMat= ?, telefono = ?, correo = ?, idTipoUsuario = ? WHERE cveUsuario = ?';
        const values = [nombre, apePat, apeMat, telefono, correo, idTipoUsuario, id];
        await pool.query(sql, values);
        resp.json({ message: 'El usuario ha sido actualizado' });
      }
      public async eliminarUsuario(req:Request, resp:Response){
        const {id} = req.params;
        const a=await pool.query('Delete From usuario Where cveUsuario = ?',[id]);
        resp.json({message: "El usuario se ha eliminado"});
    }
    public async insertarUsuario(req:Request, resp:Response){
        await pool.query('INSERT INTO usuario set ?',[req.body]);
        resp.json({message: 'El usuario se ha insertado'});
    }

    public async getHistorialIngresos(req:Request,resp:Response){
        const {id}=req.params;
        const historial=await pool.query('SELECT * FROM acceso WHERE cveUsuario=?;',[id]);
        resp.json(historial);
    }

    //Métodos varios
    public async listarAsignaciones(req: Request, resp: Response) {
        const asignaciones = await pool.query('SELECT * FROM asignacion;');
        resp.json (asignaciones);
    }

    public async listarUserRoles(req: Request, resp: Response) {
        const userRoles = await pool.query('SELECT * FROM tipousuario;');
        resp.json (userRoles);
    }
      
}
const adminController = new AdminControllers();
export default adminController;