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
items:MenuItem[]=[{Name:"Home",Url:"home",Icon:"home",Search:"home",Order:0},
{Name:"Dashboard",Url:"home",Icon:"dashboard",Search:"dashboard",Order:0},
{Name:"Events",Url:"home",Icon:"calendar_month",Search:"events",Order:0},
{Name:"Settings",Url:"home",Icon:"settings",Search:"settings",Order:0}

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
