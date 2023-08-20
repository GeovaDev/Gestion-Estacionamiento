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
const qrcode_1 = __importDefault(require("qrcode"));
class QrCodeController {
    generarQR(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body; // Datos del formulario para generar el código QR
            const archivoNom = data.numPlacas;
            try {
                const ruta = '../client/src/assets/qrImages/' + archivoNom + '.png';
                qrcode_1.default.toFile(ruta, archivoNom);
                resp.json('../../../assets/qrImages/' + archivoNom + '.png');
            }
            catch (error) {
                console.error('Error generando el código QR:', error);
                resp.status(500).json({ error: 'Error generando el código QR' });
            }
        });
    }
}
const qrCodeControllers = new QrCodeController();
exports.default = qrCodeControllers;
