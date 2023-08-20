import { Component,OnInit,HostBinding } from '@angular/core';
import { VehiculoServiceService } from 'src/app/services/vehiculo-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { vehiculoUpdate } from 'src/app/models/vehiculoUpdate';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent {
  @HostBinding ('class') classes = 'row';
  vehiculos:any=[];
  vehiculoSeleccionado:any=[];
  usuarios:any=[];
  tipoVehi:any=[];
  idSeleccionado: number | null = null;
  mostrarAlertaUpdate: boolean = false;
  mostrarAlertaDelete:boolean=false;
  hayError:boolean=false;
  vehiculoUpdate:vehiculoUpdate={
    marca:'',
    modelo:'',
    color:'',
    cveUsuario:'',
    idTipoUsuario:0
  }
  constructor(private vehiculoService:VehiculoServiceService, private userService:UserServiceService, private cookieService: CookieService, private router:Router){
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
      this.listarVehiculos();
    }
  }

  //Guarda el número de placas del vehículo en cuestión para realizar la modificación/eliminación
  guardarId(id: number) {
    this.idSeleccionado = id;
    console.log(`Número de placas seleccionado: ${this.idSeleccionado}`);
  }

  //Lista todos los vehículos registrados en la base de datos
  listarVehiculos(){
    this.vehiculoService.listarVehiculos().subscribe(
      resp=>
      {
        this.vehiculos=resp;
      },
      err=>console.log(err)
    );
  }

  //Elimina el vehículo seleccionado
  eliminarVehiculo(){
    this.vehiculoService.eliminarVehiculo(''+this.idSeleccionado).subscribe(
      resp=>{
        this.mostrarAlertaDelete=true;
        this.listarVehiculos();
      },
      err => {console.error(err); this.hayError=true;}
    )
  }

  //Obtiene los usuarios registrados para posteriormente listarlos en el <select> de HTML.

  listarUsuariosSelect(){
    this.userService.listarUsuarios().subscribe(
      resp=>{this.usuarios=resp},err=>console.log(err)
    )
  }

  //Obtiene los tipos de vehículo de la tabla tipovehiculo en la base de datos

  listarTipoVehiculo(){
    this.vehiculoService.listarTipoVehiculo().subscribe(
      resp=>{this.tipoVehi=resp;},err=>console.log(err)
    );
  }

  //Modifica el vehículo en cuestión
  actualizarVehiculo(){
    const vehiculoDataXD = {
      ...this.vehiculoUpdate,
      ...this.vehiculoSeleccionado[0]
    };
    this.vehiculoService.modificarVehiculo(''+this.idSeleccionado,vehiculoDataXD).subscribe(
      resp=>{this.mostrarAlertaUpdate=true; this.listarVehiculos();},err=>{console.log(err); this.hayError=true;}
    );
  }

  limpiarVariables(){
    this.mostrarAlertaUpdate=false;
    this.mostrarAlertaDelete=false;
    this.hayError=false;
  }

  //Obtiene los datos individuales del vehículo seleccionado
  getVehiculoPorIDModal(){
    this.vehiculoService.listarVehiculoPorID(''+this.idSeleccionado).subscribe(
      resp=>{this.vehiculoSeleccionado=resp;},
      err=>console.log(err)
    );
  }

}
