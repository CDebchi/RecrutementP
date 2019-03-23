import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Control } from '../../control';
import { CompanyApiService } from '../../company-api.service';
import { ProfilApiService } from '../../profil-api.service';
import { JobApiService } from '../../job-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  
  constructor(private jas : JobApiService, private route : Router) {
    
    this.jas.GetAllJobs().subscribe((res : any) => {
      this.dataSource = new MatTableDataSource(res); 
      console.log(this.dataSource)        
    }) 
    console.log(this.dataSource)  
    
   }

  ngOnInit() {
    
    
  }

}
