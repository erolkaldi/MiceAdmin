import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService,private storage : StorageService) { 
    router.events.subscribe((val) => {
      if(authService.isLoggedIn()){
        this.loggedIn=true;
      }
      else{
        this.loggedIn=false;
      }
  });
  }
  loggedIn:boolean = false;
userName:string="";
  ngOnInit(): void {
    this.userName=this.storage.getString("user_name") ?? "";
  }

}
