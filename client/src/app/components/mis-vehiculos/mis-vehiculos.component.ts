import { Component, OnInit } from '@angular/core';
import { VehiculoServiceService } from 'src/app/services/vehiculo-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-mis-vehiculos',
  templateUrl: './mis-vehiculos.component.html',
  styleUrls: ['./mis-vehiculos.component.css']
})
export class MisVehiculosComponent {
  constructor(private vehiculoService:VehiculoServiceService, private cookieService:CookieService){}
  vehiculosPropios:any=[];
  ngOnInit(){
    this.getVehiculosPropios();
  }
  getVehiculosPropios(){
    const cveUsuario=this.cookieService.get("user_id");
    this.vehiculoService.listarVehiculosPropios(cveUsuario).subscribe(
      resp=>{this.vehiculosPropios=resp;},err=>console.log(err)
    );
  }
}
