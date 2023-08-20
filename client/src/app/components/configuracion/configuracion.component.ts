import { Component } from '@angular/core';
import { ownAccountModify } from 'src/app/models/ownAccountModify';
import { changePass } from 'src/app/models/changePass';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  constructor(private usuarioService:UserServiceService){}
  usuarioSeleccionado:any=[];
  usrData:ownAccountModify={
    nombre:'',
    apePat:'',
    apeMat:'',
    imgUsuario:'',
    telefono:0,
    correo:''
  }
  cambiarPass:changePass={
    anteriorPasswd:'',
    newPasswd:'',
    confirmaPasswd:''
  }

  ngOnInit(){
    this.listarUsuarioDatos();
  }
  listarUsuarioDatos(){
  }

  actualizarDatos(){

  }
  eliminarCuenta(){

  }
  cambiarContra(){

  }
}
