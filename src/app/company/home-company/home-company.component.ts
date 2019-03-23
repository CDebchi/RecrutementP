import { Component, OnInit } from '@angular/core';
import { CompanyApiService } from '../../company-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {
  company;  
  token;  
  jobNbr;
  ListJob;
  constructor(private router : Router, private cas : CompanyApiService, private auth : AuthService) {
    
    this.token = this.auth.connectedUser;
   }

  ngOnInit() {   
    this.cas.GetCompanyId(this.token.company).subscribe(res => {
      this.company = res;

      this.cas.GetJobByCompany(this.token.company).subscribe(res => {
        this.ListJob = res;
      })
    })
  }
  
  removeFakePathUrl(f) {     
    if(f)   {
      return f.slice(12, f.length); 
    }
  }
  setJob(id){
    localStorage.setItem('job',id);
    this.router.navigateByUrl('Company/JobDetail');
  }
}
