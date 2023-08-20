import { Request, Response, query } from "express";
import pool from "../database";

class LoginController {
  public async userExists(req: Request, resp: Response) {
    let idTipoUsuario=0;
    let claveUsuario='';
    const { cveUsuario, passwd } = req.body;
    try {
      const queryResult = await pool.query('SELECT cveUsuario,idTipoUsuario FROM usuario WHERE cveUsuario = ? AND passwd = ?', [cveUsuario, passwd]);
      if (queryResult.length > 0) {
        claveUsuario=queryResult[0].cveUsuario;
        idTipoUsuario=queryResult[0].idTipoUsuario;
        resp.json({ usuarioExiste: true, idTipoUsuario, cveUsuario});
      } else {
        resp.json({ usuarioExiste: false, idTipoUsuario });
      }
    } catch (error) {
      resp.json({ usuarioExiste: false, idTipoUsuario });
    }
  }
}
const loginController = new LoginController();
export default loginController;
