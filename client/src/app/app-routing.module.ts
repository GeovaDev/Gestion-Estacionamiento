import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioLoginComponent } from './components/inicio-login/inicio-login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistrarVehiculoComponent } from './components/registrar-vehiculo/registrar-vehiculo.component';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { VerAsignacionesComponent } from './components/ver-asignaciones/ver-asignaciones.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { MisVehiculosComponent } from './components/mis-vehiculos/mis-vehiculos.component';
import { EntradaUsuarioComponent } from './components/entrada-usuario/entrada-usuario.component';
import { HistorialIngresosComponent } from './components/historial-ingresos/historial-ingresos.component';
import { RegistrarEntradaAdmComponent } from './components/registrar-entrada-adm/registrar-entrada-adm.component';

const routes: Routes = [
  {
    path : "",
    redirectTo:"/principal",
    pathMatch:"full"
  },
  {
    path:"principal",
    component: PrincipalComponent
  },
  {
    path:"nosotros",
    component:NosotrosComponent
  },
  {
    path:"servicios",
    component:ServiciosComponent
  },
  {
    path:"registrarse",
    component:RegistrarseComponent
  },
  {
    path:"contactanos",
    component:ContactanosComponent
  },
  {
    path:"inicio",
    component:InicioLoginComponent
  },
  {
    path:"registrar-vehiculo",
    component:RegistrarVehiculoComponent
  },
  {
    path:"listar-vehiculos",
    component:ListarVehiculosComponent
  },
  {
    path:"listar-usuarios",
    component:ListarUsuariosComponent
  },
  {
    path:"ver-asignaciones",
    component:VerAsignacionesComponent
  },
  {
    path:"mi-cuenta",
    component:UserAccountComponent
  },
  {
    path:"configuracion",
    component:ConfiguracionComponent
  },
  {
    path:"mis-vehiculos",
    component:MisVehiculosComponent
  },
  {
    path:"registrar-ingreso",
    component:EntradaUsuarioComponent
  },
  {
    path:"historial-ingresos",
    component:HistorialIngresosComponent
  },
  {
    path:"registrar-ingreso-adm",
    component:RegistrarEntradaAdmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
