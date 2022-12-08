import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/core/models/menu/menuitem';
import { SidenavService } from 'src/app/core/sidenav/sidenav.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(private router:Router,private sidenav:SidenavService) { }
  filterArgs={Name:""}
items:MenuItem[]=[{Name:"pages.home",Url:"home",Icon:"home",Search:"home",Order:0},
{Name:"pages.events",Url:"events",Icon:"calendar_month",Search:"events",Order:1},
{Name:"pages.users",Url:"users",Icon:"people",Search:"users",Order:2},
{Name:"pages.settings",Url:"settings",Icon:"settings",Search:"settings",Order:3}
//translate yazılacak search alanı için

]
  ngOnInit(): void {
   
  }
navigate(url:string){
  this.router.navigate([url]);
  this.sidenav.toggle();
  this.clearSearch();
}
clearSearch(){
  this.filterArgs.Name=""
}
}
