
import { AgenciaComponent } from './agencia/agencia.component';
import { ContadorComponent } from './contador/contador.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionCrearComponent } from './sesion/sesion-crear/sesion-crear.component'; 
import { SesionCargarComponent } from './sesion/sesion-cargar/sesion-cargar.component';
import { UsuarioComponent } from './usuario/usuario.component'; 
import { HomeComponent } from './home/home.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [

  // vista sesion : tienen acceso todo el publico, se usa para iniciar sesion a la aplicacion 
  { path: 'sesion/cargar', component: SesionCargarComponent },
  { path: 'sesion/crear', component: SesionCrearComponent },

  // vista home : tienen acceso 
  { path: 'home', component: HomeComponent },

  // vista agencia : tienen acceso 
  { path: 'agencia', component: AgenciaComponent },

  // vista contador : tienen acceso 
  { path: 'contador', component: ContadorComponent },


  // vista registro : tienen acceso 
  { path: 'registro', component: RegistroComponent },

  // vista usuario : tienen acceso 
  { path: 'usuario', component: UsuarioComponent },

   


  { path: 'routePath', component: Component },
  { path: '**', pathMatch: 'full', redirectTo: 'home/' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
