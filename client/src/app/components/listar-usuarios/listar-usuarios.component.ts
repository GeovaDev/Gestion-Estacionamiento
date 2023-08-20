import { Component,OnInit,HostBinding, NgModule } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormsModule } from '@angular/forms';
import { Users } from 'src/app/models/Users';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent {
  @HostBinding ('class') classes = 'row';
  usuarios:any=[];
  usuarioSeleccionado:any=[];
  mostrarAlertaUpdate: boolean = false;
  mostrarAlertaDelete:boolean=false;
  hayError:boolean=false;
  usrDataUpdate:Users={
    nombre:'',
    apePat:'',
    apeMat:'',
    telefono:0,
    correo:'',
    idTipoUsuario:0
  };
  usrRoles:any=[];
  idSeleccionado: number | null = null;
  constructor(private usuarioService:UserServiceService, private cookieService: CookieService, private router:Router){
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
      this.getUsuarios();
    }
  }

  getUsuarios(){
    this.usuarioService.listarUsuarios().subscribe(
      resp=>{this.usuarios=resp;},
      err=>console.log(err)
    );
  }

  guardarId(id: number) {
    this.idSeleccionado = id;
    console.log(`Se ha guardado el ID seleccionado: ${this.idSeleccionado}`);
  }

  getUsuarioPorIDModal(){
    this.usuarioService.listarUsuarioPorID(''+this.idSeleccionado).subscribe(
      resp=>{this.usuarioSeleccionado=resp;},
      err=>console.log(err)
    );
  }

  getUsrRoles(){
    this.usuarioService.listarUserRoles().subscribe(
      resp=>{this.usrRoles=resp},err=>console.log(err)
    );
  }

  actualizarUsuario(){
    this.mostrarAlertaUpdate=false;
    this.hayError=false;
    const usrDataXD = {
      ...this.usrDataUpdate,
      ...this.usuarioSeleccionado[0]
    };
    this.usuarioService.actualizarUsuario(''+this.idSeleccionado,usrDataXD).subscribe(
      resp=>{this.mostrarAlertaUpdate=true; this.getUsuarios();},err=>{console.log(err); this.hayError=true;}
    );
  }

  limpiarVariables(){
    this.mostrarAlertaUpdate=false;
    this.mostrarAlertaDelete=false;
    this.hayError=false;
  }

  eliminarUsuario(){
    this.usuarioService.eliminarUsuario(''+this.idSeleccionado).subscribe(
      resp=>{this.mostrarAlertaDelete=true; this.getUsuarios(); },err=>{console.log(err);this.hayError=true;}
    )
  }
  
}
