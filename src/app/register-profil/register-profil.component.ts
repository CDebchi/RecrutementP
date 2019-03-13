import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserApiService } from '../user-api.service';
import { FormGroup,FormGroupDirective, Validators,NgForm, FormArray, FormControl} from '@angular/forms';
import { Control } from '../control';



@Component({
  selector: 'app-register-profil',
  templateUrl: './register-profil.component.html',
  styleUrls: ['./register-profil.component.css']
})
export class RegisterProfilComponent implements OnInit {

  exist;
  User : FormGroup;
 
  constructor(private Auth : AuthService, private uas : UserApiService) {
    this.User = new FormGroup({      
        firstName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
        lastname:new FormControl('',[Validators.required, Validators.maxLength(20)]),
        email:new FormControl('',[Validators.required, Validators.email]),
        password:new FormControl('',[Validators.required, Validators.maxLength(40), Validators.minLength(8)]),
        gender:new FormControl(''),
        passwordv: new FormControl('',[Validators.required, Validators.maxLength(40), Validators.minLength(8)])
      
    });
   }

  ngOnInit() {
  }

  Register(form){

    this.uas.GetUserEmail(form.value.email).subscribe(res => {
      if(res){
        if(form.value.password == form.value.passwordv){
     
          this.Auth.registerProfil(form.value).subscribe(res => {
            alert('Welcome :)')
          });     
      }
      }
      else{
        alert('Email already exist!!');
      }
    })
    

}

existt (){
  this.uas.GetUserEmail(this.User.value.email).subscribe(res => {
    console.log(res);
    this.exist = res;
    if(this.exist === false){
      this.User.controls.email.setErrors({valid : false})
    }
    
  })}
}



