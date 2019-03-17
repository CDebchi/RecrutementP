import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterProfilComponent } from './register-profil/register-profil.component';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Control } from './control';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompanyComponent } from './company/company.component';
import { HomeCompanyComponent } from './company/home-company/home-company.component';
import { UpdateCompanyComponent } from './company/update-company/update-company.component';
import { PostJobComponent } from './company/post-job/post-job.component';
import { ListJobsComponent } from './company/list-jobs/list-jobs.component';
import { JobDetailComponent } from './company/job-detail/job-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterCompanyComponent,
    RegisterProfilComponent,
    NavBarComponent,
    CompanyComponent,
    HomeCompanyComponent,
    UpdateCompanyComponent,
    PostJobComponent,
    ListJobsComponent,
    JobDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Control,
    JwtModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
