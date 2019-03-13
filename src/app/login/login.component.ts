import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators, FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User : FormGroup;
  constructor(private Auth : AuthService) { 
    this.User = new FormGroup({      
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8)]),    
  });
  }

  ngOnInit() {
  }

  Login(form){
    this.Auth.login(form.value).subscribe(res => {
      if(res['success']){
        console.log(res);
        localStorage.setItem('jwt',res['access_token'])
      }
      else{
        alert(res['message']);
      }

    })
  }
}
