import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
import { registerUser } from '../models/registerUser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  //API_URI='http://localhost:3000/src/data';//Para el front-end
  API_URI= 'http://localhost:11387/api'; //Backend
  constructor(private http:HttpClient) { }
  listarUsuarios() {
    return this.http.get(`${this.API_URI}/usuarios/usuarios`)
  }
  listarUserRoles() {
    return this.http.get(`${this.API_URI}/usuarios/roles`)
  }
  listarUsuarioPorID(cveUsuario:string) {
    return this.http.get(`${this.API_URI}/usuarios/usuarios/${cveUsuario}`)
  }
  actualizarUsuario(cveUsuario:string, usrData:Users){
    return this.http.put(`${this.API_URI}/usuarios/usuarios/${cveUsuario}`,usrData)
  }
  eliminarUsuario(cveUsuario:string){
    return this.http.delete(`${this.API_URI}/usuarios/usuarios/${cveUsuario}`)
  }
  insertarUsuario(usrData:registerUser){
    return this.http.post(`${this.API_URI}/usuarios/usuarios/`,usrData)
  }
  verHistorial(cveUsuario:string){
    return this.http.get(`${this.API_URI}/usuarios/historial/${cveUsuario}`)
  }
}
