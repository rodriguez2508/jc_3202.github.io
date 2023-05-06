import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';

// Rutas ---------------

import { AppRoutingModule } from './app-routing.module';

// Rutas ---------------


// Servicios ---------------

// import { HomeService } from '../services/home/home.service';

// Servicios ---------------

// Componentes ---------------

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ContadorComponent } from './contador/contador.component';
import { RegistroComponent } from './registro/registro.component';
import { AgenciaComponent } from './agencia/agencia.component';

import { SesionCrearComponent } from './sesion/sesion-crear/sesion-crear.component';
import { SesionCargarComponent } from './sesion/sesion-cargar/sesion-cargar.component';
import { SesionHeaderComponent } from './sesion/shared/sesion-header/sesion-header.component';


// Componentes ---------------



// Angular-Material ---------------

import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SesionFooterComponent } from './sesion/shared/sesion-footer/sesion-footer.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/shared/home-header/home-header.component';
import { HomeFooterComponent } from './home/shared/home-footer/home-footer.component';


// Angular-Material ---------------


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ContadorComponent,
    RegistroComponent,
    AgenciaComponent,

    // Sesion
    // 
    SesionCrearComponent,
    SesionCargarComponent,
    SesionHeaderComponent,
    SesionFooterComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent
    // 
    // Sesion

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

    // angular-material

    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,

    // angular-material

    // MatIconModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
