import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Vehiculos} from '../models/Vehiculos';
import { vehiculoUpdate } from '../models/vehiculoUpdate';
import { qrModel } from '../models/qrModel';

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {
  //API_URI='http://localhost:3000/src/data';//Para el front-end
  API_URI= 'http://localhost:50445/api'; //Backend
  constructor(private http:HttpClient) { }
  listarVehiculos() {
    return this.http.get(`${this.API_URI}/vehiculos/vehiculos`);
  }
  insertarVehiculo(vehiculos : Vehiculos){
    return this.http.post(`${this.API_URI}/vehiculos/vehiculos`,vehiculos);
  }
  eliminarVehiculo(numPlacas:string){
    return this.http.delete(`${this.API_URI}/vehiculos/vehiculos/${numPlacas}`);
  }
  modificarVehiculo(numPlacas:string, updateVehiculo : vehiculoUpdate){
    return this.http.put(`${this.API_URI}/vehiculos/vehiculos/${numPlacas}`,updateVehiculo);
  }
  listarAsignaciones() {
    return this.http.get(`${this.API_URI}/asignaciones/asignaciones`);
  }
  listarTipoVehiculo(){
    return this.http.get(`${this.API_URI}/vehiculos/tipovehiculo`);
  }
  listarVehiculoPorID(numPlacas:string){
    return this.http.get(`${this.API_URI}/vehiculos/vehiculos/${numPlacas}`);
  }
  listarVehiculosPropios(cveUsuario:string){
    return this.http.get(`${this.API_URI}/vehiculos/ownvehiculo/${cveUsuario}`);
  }
  generarQRVehiculo(numPlacas:qrModel){
    return this.http.post(`${this.API_URI}/generarqr/generarqr`,numPlacas);
  }
  //saveGame(game : Game){
	//return this.http.post(`${this.API_URI}/games`,game);
}

