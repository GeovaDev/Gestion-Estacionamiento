import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-historial-ingresos',
  templateUrl: './historial-ingresos.component.html',
  styleUrls: ['./historial-ingresos.component.css']
})
export class HistorialIngresosComponent {
  historialData:any=[];
  getHistorial(){
    const cveUsuario=this.cookieService.get('user_id');
    this.usuarioServices.verHistorial(cveUsuario).subscribe(
      resp=>{this.historialData=resp},err=>console.log(err)
    )
  }
  constructor(private usuarioServices:UserServiceService, private cookieService:CookieService){}
}
