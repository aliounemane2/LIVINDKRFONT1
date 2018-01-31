import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RedirectService } from '../../service/redirect.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private tokenservice: TokenService, private redirect: RedirectService) { 
  }
    
  ngOnInit() {
    document.body.classList.remove("full-lg");
    if(this.tokenservice.isAuthorized() === false){
        this.redirect.redirectTologinForParam("Veuillez vous connecter pour accéder aux ressources de l'application");
    }
  }

}