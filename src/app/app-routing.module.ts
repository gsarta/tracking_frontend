import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login',component: LoginComponent },
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  {path: 'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
