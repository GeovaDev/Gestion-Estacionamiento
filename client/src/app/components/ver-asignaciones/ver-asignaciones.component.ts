import { Component,OnInit,HostBinding } from '@angular/core';
import { VehiculoServiceService } from 'src/app/services/vehiculo-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-asignaciones',
  templateUrl: './ver-asignaciones.component.html',
  styleUrls: ['./ver-asignaciones.component.css']
})
export class VerAsignacionesComponent {
  @HostBinding ('class') classes = 'row';
  asignaciones:any=[];
  constructor(private vehiculoService:VehiculoServiceService, private cookieService: CookieService, private router:Router){
  }
  ngOnInit(){
    const hashCookie=this.cookieService.get('session_id');
    if(hashCookie!='978bd5877610d24d6f17d259522429c55710f33c6629aea9c95cae39a82ed740541872907ba03d439269dec7d3b1b0ebcfef5831ea0f3f8acbb1daff1577de8d'){
      if(hashCookie=='e4b7b5b1162da37abeff1df9ad7590fdf2197ac7a00acfec38d78c666a4df1f60663675ee40df49dff7ae5f93993d72b75a4de998e6f0af063d6348a2c97a74c'){
        this.router.navigate(['/inicio']);
      }else{
        this.router.navigate(['/principal']);
      }
    }else{
      this.getAsignaciones();
    }
  }

  getAsignaciones(){
    this.vehiculoService.listarAsignaciones().subscribe(
      resp=>{this.asignaciones=resp},
      err=>console.log(err)
    );
  }
}
