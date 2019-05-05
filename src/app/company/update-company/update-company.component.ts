import { Component, OnInit } from '@angular/core';
import { CompanyApiService } from '../../company-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  token;
  Company;
  constructor(private dataRoute: ActivatedRoute,private router : Router, private cas : CompanyApiService, private auth : AuthService) { 
    this.token = this.auth.connectedUser;
    this.cas.GetCompanyId(this.token.company).subscribe( res => {
      this.Company = res;
      console.log(res);
    })
  }

  ngOnInit() {
  }

}
