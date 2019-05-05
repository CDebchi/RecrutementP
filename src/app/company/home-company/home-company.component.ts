import { Component, OnInit } from '@angular/core';
import { CompanyApiService } from '../../company-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormGroup,FormGroupDirective, Validators,NgForm, FormArray, FormControl} from '@angular/forms';

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
  CompanyForm;
  fileUpload;
  constructor(private dataRoute: ActivatedRoute,private router : Router, private cas : CompanyApiService, private auth : AuthService) {
    
    this.token = this.auth.connectedUser;
    this.cas.GetCompanyId(this.token.company).subscribe(res => {
      this.company = res;
      console.log(this.company)
      this.cas.GetJobByCompany(this.token.company).subscribe(res => {
        this.ListJob = res;
      })
    })
    this.CompanyForm = new FormGroup({
      nameCompany : new FormControl('',[Validators.required]),
      adress : new FormControl('',[Validators.required]),
      otherAdress : new FormControl(''),
      phone : new FormControl('',[Validators.minLength(8),Validators.maxLength(8)]),
      size : new FormControl('',[Validators.required]),
      logo : new FormControl(''),
      website : new FormControl('',),
      facebook : new FormControl(''),
      linkedin : new FormControl(''),
    })
    this.CompanyForm.controls.nameCompany.setValue(this.company.nameCompany);
    this.CompanyForm.controls.adress.setValue(this.company.adress);
    this.CompanyForm.controls.otherAdress.setValue(this.company.otherAdress);
    this.CompanyForm.controls.phone.setValue(this.company.phone);
    this.CompanyForm.controls.size.setValue(this.company.size);
    this.CompanyForm.controls.website.setValue(this.company.website);
    this.CompanyForm.controls.facebook.setValue(this.company.facebook);
    this.CompanyForm.controls.linkedin.setValue(this.company.linkedin);
   }

  ngOnInit() {   

  }
  
  removeFakePathUrl(f) {     
    if(f)   {
      return f.slice(12, f.length); 
    }
  }
  setJob(id){
    this.router.navigate(['/Company/JobDetail', id]);
  }
  uploadFile() {
    const fba = new FormData();
    fba.append('file', this.fileUpload[0]);
    this.cas.UploadImg(fba).subscribe(res => {
    });
  }
  filechangeEvent(fileInput: any) {
    this.fileUpload = <Array<File>>fileInput.target.files;
  }
}
