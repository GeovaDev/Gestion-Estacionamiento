import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { VehiculoServiceService } from 'src/app/services/vehiculo-service.service';

@Component({
  selector: 'app-entrada-usuario',
  templateUrl: './entrada-usuario.component.html',
  styleUrls: ['./entrada-usuario.component.css']
})
export class EntradaUsuarioComponent {
  vehiculoData:any=[];
  vehiculoData2:any=[];
  ngOnInit(){
    this.getImageUser();
  }

  obtenerImgQR(numPlacas:string){
    this.vehiculoService.listarVehiculoPorID(numPlacas).subscribe(
      resp=>{this.vehiculoData2=resp;},err=>console.log(err)
    )
  }
  getImageUser(){
    const cveUsuario=this.cookieService.get('user_id');
    this.vehiculoService.listarVehiculosPropios(cveUsuario).subscribe(
      resp=>{this.vehiculoData=resp;},err=>console.log(err)
    );
  }
  constructor(private cookieService:CookieService, private vehiculoService:VehiculoServiceService){}
}
