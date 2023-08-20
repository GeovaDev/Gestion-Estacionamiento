import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {
  constructor(private userService:UserServiceService, private cookieService:CookieService, private router:Router){}
  usrData:any={}
  usrData2:any={}
  usrData3:any={}
  idUsuario:string='';
  ngOnInit(){
    const hashCookie=this.cookieService.get('session_id');
    if(hashCookie!='978bd5877610d24d6f17d259522429c55710f33c6629aea9c95cae39a82ed740541872907ba03d439269dec7d3b1b0ebcfef5831ea0f3f8acbb1daff1577de8d'){
      if(hashCookie!='e4b7b5b1162da37abeff1df9ad7590fdf2197ac7a00acfec38d78c666a4df1f60663675ee40df49dff7ae5f93993d72b75a4de998e6f0af063d6348a2c97a74c'){
        this.router.navigate(['/principal']);
      }else{
        this.idUsuario=this.cookieService.get('user_id');
        this.getDataUser();
      }
    }else{
      this.idUsuario=this.cookieService.get('user_id');
      this.getDataUser();
    }
  }

  getDataUser(){
    this.userService.listarUsuarioPorID(this.idUsuario).subscribe(
      resp=>{this.usrData=resp; this.usrData3 = {
        ...this.usrData2,
        ...this.usrData[0]
      }; console.log(this.usrData3)},err=>console.log(err)
    );
  }
}
