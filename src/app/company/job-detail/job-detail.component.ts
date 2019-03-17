import { Component, OnInit } from '@angular/core';
import { CompanyApiService } from '../../company-api.service';
import { FormGroup,FormGroupDirective, Validators,NgForm, FormArray, FormControl} from '@angular/forms';
import { Control } from '../../control';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { AuthService } from '../../auth.service';
import { JobApiService } from '../../job-api.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills: FormArray;
  decode;
  token;
  LocalJob;
  job : FormGroup;
  
  company_id;

  constructor(private cas : CompanyApiService, private auth : AuthService, private jas : JobApiService) {
    this.token = this.auth.connectedUser;
    this.LocalJob = localStorage.getItem('job');
    // localStorage.removeItem('job');
    this.job = new FormGroup({
      post : new FormControl('',[Validators.required]),
      type_job : new FormControl('',[Validators.required]),
      time_job : new FormControl('',[Validators.required]),
      job_description : new FormControl('',[Validators.required]),
      skills : new FormArray([])
    });
    this.company_id = this.token.company;
    this.jas.GetJobById(localStorage.getItem('job')).subscribe(res => {
      this.LocalJob = res;
      console.log(res)
    })
   }

  ngOnInit() {
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our skill
    if ((value || '').trim()) {
      this.skills = this.job.get('skills') as FormArray;
      const form = new FormGroup({skill: new FormControl(value)})
      this.skills.push(form)
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(index): void {
    this.skills = this.job.get('skills') as FormArray;
    if (index >= 0) {
      this.skills.removeAt(index);
    }
  }
  DeleteJob(id, job){
    this.cas.DeleteJob(id, job).subscribe(res => {
      console.log(res);
    })
  }
  UpdateJob(id,body){
    this.jas.UpdateJob(id, body).subscribe(res => {
      console.log(res);
    })
  }
}
