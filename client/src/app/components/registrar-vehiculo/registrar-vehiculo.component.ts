import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Vehiculos } from 'src/app/models/Vehiculos';
import { VehiculoServiceService } from 'src/app/services/vehiculo-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NgForm } from '@angular/forms';
import { qrModel } from 'src/app/models/qrModel';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.css']
})
export class RegistrarVehiculoComponent {
  @HostBinding ('class') classes = 'row';
  @ViewChild('userForm') userForm!: NgForm;
  ngOnInit(){
    const hashCookie=this.cookieService.get('session_id');
    if(hashCookie!='978bd5877610d24d6f17d259522429c55710f33c6629aea9c95cae39a82ed740541872907ba03d439269dec7d3b1b0ebcfef5831ea0f3f8acbb1daff1577de8d'){
      if(hashCookie=='e4b7b5b1162da37abeff1df9ad7590fdf2197ac7a00acfec38d78c666a4df1f60663675ee40df49dff7ae5f93993d72b75a4de998e6f0af063d6348a2c97a74c'){
        this.router.navigate(['/inicio']);
      }else{
        this.router.navigate(['/principal']);
      }
    }else{
      this.listarUsuariosSelect();
      this.listarTipoVehiculo();
    }
  }
  qrModel:qrModel={
    numPlacas:''
  }
  usuarios:any=[];
  tipoVehi:any=[];
  urlQR:any;
  mostrarAlertaInsert:boolean=false;
  hayError:boolean=false;
  vehInst:Vehiculos = {
    numPlacas : '',
    marca : '',
    modelo: '',
    color : '',
    qrCode : '',
    cveUsuario : 0,
    idTipoVehiculo : 0,
  };

  constructor(private vehiculoService:VehiculoServiceService, private userService:UserServiceService, private router : Router, private activedRoute : ActivatedRoute, private cookieService:CookieService){}

  registrarVehiculo(){
    this.hayError=false;
    this.mostrarAlertaInsert=false;
    this.qrModel.numPlacas=this.vehInst.numPlacas;
    this.vehiculoService.generarQRVehiculo(this.qrModel).subscribe(
      resp=>{ this.urlQR=resp; this.vehInst.qrCode=this.urlQR;
        this.vehiculoService.insertarVehiculo(this.vehInst).subscribe(
          resp=>{this.mostrarAlertaInsert=true;
          },
          err=>{console.log(err); this.hayError=true;}
        );
      },err=>console.log(err)
    )
  }

  redirectListarVehiculos(){
    this.router.navigate(['/listar-vehiculos'])
  }

  listarUsuariosSelect(){
    this.userService.listarUsuarios().subscribe(
      resp=>{this.usuarios=resp},err=>console.log(err)
    )
  }

  listarTipoVehiculo(){
    this.vehiculoService.listarTipoVehiculo().subscribe(
      resp=>{this.tipoVehi=resp;},err=>console.log(err)
    );
  }

}
