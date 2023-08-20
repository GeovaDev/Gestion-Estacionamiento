import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InicioLoginComponent } from './components/inicio-login/inicio-login.component';
import { LoginServiceService } from './services/login-service.service';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InicioLoginComponent,
    NosotrosComponent,
    ServiciosComponent,
    RegistrarseComponent,
    FooterComponent,
    ContactanosComponent,
    PrincipalComponent,
    RegistrarVehiculoComponent,
    ListarVehiculosComponent,
    ListarUsuariosComponent,
    VerAsignacionesComponent,
    UserAccountComponent,
    ConfiguracionComponent,
    MisVehiculosComponent,
    EntradaUsuarioComponent,
    HistorialIngresosComponent,
    RegistrarEntradaAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
