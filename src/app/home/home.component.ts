import { Component, OnInit } from '@angular/core';
import {JobApiService } from '../job-api.service';
import { CompanyApiService } from '../company-api.service';
import { FormGroup,FormGroupDirective, Validators,NgForm, FormArray, FormControl} from '@angular/forms';
import { Control } from '../control';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  AllJobActive;
  constructor(private jas : JobApiService) {
    this.jas.GetAllJobs().subscribe(res => {
      console.log(res);
      this.AllJobActive = res;
    })
   }

  ngOnInit() {
  }

  removeFakePathUrl(f) {     
    return f.slice(12, f.length);
    
  }
}
