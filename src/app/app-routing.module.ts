import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterProfilComponent } from './register-profil/register-profil.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './company/company.component';
import { HomeCompanyComponent } from './company/home-company/home-company.component';
import { PostJobComponent } from './company/post-job/post-job.component';
import { ListJobsComponent } from './company/list-jobs/list-jobs.component';
import { JobDetailComponent } from './company/job-detail/job-detail.component';
import { from } from 'rxjs';

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
  },
  {
    path : 'Company',
    component : CompanyComponent,
    children : [
      {
        path : 'CompanyHome',
        component : HomeCompanyComponent,
        data : {title : 'Company Dashbord'}
      },
      {
        path : 'PostJob',
        component : PostJobComponent,
        data : {title : 'post Job'}
      },
      {
        path : 'ListJob',
        component : ListJobsComponent,
        data : {title : 'List Of Jobs'},
      },
      {
        path : 'JobDetail',
        component : JobDetailComponent,
        data : {title : 'Job Detail'}
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
