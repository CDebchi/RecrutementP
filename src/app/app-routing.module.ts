import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterProfilComponent } from './register-profil/register-profil.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    data: {title : 'Home'}
  },
  {
    path:'RegisterProfil',
    component:RegisterProfilComponent,
    data:{title:'Register Profil'}
  },
  {
    path:'RegisterCompany',
    component:RegisterCompanyComponent,
    data:{title:'Register Company'}
  },
  {
    path:'Login',
    component:LoginComponent,
    data:{title:'Login'}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
