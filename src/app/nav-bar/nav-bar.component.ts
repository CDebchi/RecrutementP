import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    
  user;
  connected;
  company;
  profil;
  constructor(private auth : AuthService) {
      
      if (localStorage.getItem('token')){
        this.connected = true
        this.user = this.auth.connectedUser;
        
      }
      else{
        this.connected = false;
        this.user = false;
      }
   }

  ngOnInit() {
  }


  logout(){
    localStorage.removeItem('token');
    location.reload();
  }
}
