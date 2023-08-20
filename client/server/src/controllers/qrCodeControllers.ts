import qrcode  from "qrcode";
import { Request,Response } from "express";
import pool from "../database";

class QrCodeController{
    public async generarQR(req: Request, resp: Response) {
        const data = req.body; // Datos del formulario para generar el código QR
        const archivoNom=data.numPlacas;
        try {
            const ruta='../client/src/assets/qrImages/'+archivoNom+'.png';
            qrcode.toFile(ruta,archivoNom);
            resp.json('../../../assets/qrImages/'+archivoNom+'.png');
          } catch (error) {
            console.error('Error generando el código QR:', error);
            resp.status(500).json({ error: 'Error generando el código QR' });
          }
      }
}
const qrCodeControllers = new QrCodeController();
export default qrCodeControllers;