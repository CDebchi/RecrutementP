import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { UserApiService } from '../user-api.service';
import { FormGroup, Validators, FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  Company : FormGroup;
  
  constructor(private Auth : AuthService, private uas : UserApiService) {
    this.Company = new FormGroup({
      nameCompany : new FormControl('',[Validators.required]),
      adress : new FormControl('',[Validators.required]),
      otherAdress : new FormControl(''),
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(8)]),
      passwordv : new FormControl('',[Validators.required, Validators.minLength(8)]),
      phone : new FormControl('',[Validators.minLength(8),Validators.maxLength(8)]),
      size : new FormControl(''),
      website : new FormControl(''),
      facebook : new FormControl(''),
      linkedin : new FormControl(''),
    })
   }

  ngOnInit() {
  }

  Register(form){

    this.uas.GetUserEmail(form.value.email).subscribe(res => {
      if(res){
        if(form.value.password == form.value.passwordv){
     
          this.Auth.registerCompany(form.value).subscribe(res => {
            alert('Welcome :)');
          });     
      }
      else{
        alert('Wrong password!!')
      }
      }
      else{
        alert('Email already exist!!');
      }
    })
    

}
}
