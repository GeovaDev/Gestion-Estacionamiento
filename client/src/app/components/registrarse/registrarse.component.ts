import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { registerUser } from 'src/app/models/registerUser';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  @ViewChild('userForm') userForm!: NgForm;
  constructor(private usuarioService:UserServiceService, private cookieService: CookieService, private router:Router){
  }
  usrRoles:any=[];
  mostrarAlertaInsert:boolean=false;
  hayError:boolean=false;
  usrData:registerUser={
    cveUsuario:'',
    nombre:'',
    apePat:'',
    apeMat:'',
    imgUsuario:'',
    telefono:null,
    correo:'',
    passwd:'',
    idTipoUsuario:0
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
      this.getUsrRoles();
    }
  }
  getUsrRoles(){
    this.usuarioService.listarUserRoles().subscribe(
      resp=>{this.usrRoles=resp},err=>console.log(err)
    );
  }

  redirectListarUsuarios(){
    this.router.navigate(['/listar-usuarios'])
  }

  registrarUsuario(){
    this.hayError=false;
    this.mostrarAlertaInsert=false;
    this.usuarioService.insertarUsuario(this.usrData).subscribe(
      resp=>{console.log(resp); this.mostrarAlertaInsert=true;},err=>{console.log(err); this.hayError=true;}
    );
  }
}
