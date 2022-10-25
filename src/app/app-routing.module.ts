import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ConductorGuard } from './conductor.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { PasajeroGuard } from './pasajero.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'buthome',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [PasajeroGuard]
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule),
    canActivate: [PasajeroGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'found-p',
    loadChildren: () => import('./pages/found-p/found-p.module').then( m => m.FoundPPageModule),
    canActivate: [ConductorGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate: [ConductorGuard]
  },
  {
    path: 'registro-pasajero',
    loadChildren: () => import('./pages/registro-pasajero/registro-pasajero.module').then( m => m.RegistroPasajeroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login-pasajero',
    loadChildren: () => import('./pages/login-pasajero/login-pasajero.module').then( m => m.LoginPasajeroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'buthome',
    loadChildren: () => import('./pages/buthome/buthome.module').then( m => m.ButhomePageModule)
    
  },
  {
    path: 'datauser',
    loadChildren: () => import('./pages/datauser/datauser.module').then( m => m.DatauserPageModule)
    ,canActivate: [ConductorGuard]
  }




  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
