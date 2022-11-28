import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { RegisterDto } from 'src/app/core/models/auth/registerDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  @ViewChild("tab", { static: false }) tab: MatTabGroup;
  constructor() { }
dto:RegisterDto=new RegisterDto();;
  ngOnInit(): void {
    
  }

  doregister(){

  }
  tabClick() {
    const tabGroup = this.tab;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
  
    tabGroup.selectedIndex = 1;
  }
}
