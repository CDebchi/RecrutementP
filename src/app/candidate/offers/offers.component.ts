import { Component, OnInit, ViewChild } from '@angular/core';
import { Control } from '../../control';
import { MatSort, MatTableDataSource} from '@angular/material';
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
  
  isChecked;
  dataSource: MatTableDataSource<any>;

  constructor(private jas : JobApiService, private router : Router) {       
  }
  ngOnInit() {    
    this.jas.GetAllJobs().subscribe((res : any) => {
      this.dataSource = new MatTableDataSource(res); 
  //     this.dataSource.filterPredicate = (data, filter) => {
  //       const filterObject = filter.trim().toLowerCase();
  //       const listAsFlatString = (obj): string => {
  //         let returnVal = '';
  //         Object.values(obj).forEach((val) => {
  //         if (typeof val !== 'object') {
  //           returnVal = returnVal + ' ' + val;
  //         } else if (val !== null) {
  //           returnVal = returnVal + ' ' + listAsFlatString(val);
  //         }
  //       });
  //   return returnVal.trim().toLowerCase();
  // };
  //          return listAsFlatString(data).includes(filterObject);
  //       };
    });
  }
  removeFakePathUrl(f) {     
    if(f)   {
      return f.slice(12, f.length); 
    }  
  }
 

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
