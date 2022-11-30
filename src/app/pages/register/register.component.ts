import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { RegisterDto } from 'src/app/core/models/auth/registerDto';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { HttpService } from 'src/app/core/services/http/http.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { endpoints } from 'src/environments/endpoints';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  @ViewChild("tab", { static: false }) tab: MatTabGroup;
  constructor(private alertify:AlertService,
    private translation:TranslocoService,
    private http:HttpService,
    private router:Router,
    private storage:StorageService) { }
dto:RegisterDto=new RegisterDto();;
  ngOnInit(): void {
    
  }

  doregister(){
    if (this.dto.email.length < 5) {
      this.alertify.error(this.translation.translate('messages.invalidemail'));
      this.tabClick(1);
      return;
    }
    if (this.dto.userEmail.length < 5) {
      this.alertify.error(this.translation.translate('messages.invalidemail'));
      this.tabClick(0);
      return;
    }
    if (this.dto.companyName.length < 1 || this.dto.phone.length<1) {
      this.alertify.error(this.translation.translate('messages.emptyfield'));
      this.tabClick(1);
      return;
    }
    if (this.dto.firstName.length < 1 || this.dto.lastName.length<1 || this.dto.userPhone.length<1) {
      this.alertify.error(this.translation.translate('messages.emptyfield'));
      this.tabClick(0);
      return;
    }
    if (this.dto.password.length < 1 || this.dto.confirmPassword.length<1) {
      this.alertify.error(this.translation.translate('messages.emptyfield'));
      this.tabClick(1);
      return;
    }
    if (this.dto.password!=this.dto.confirmPassword) {
      this.alertify.error(this.translation.translate('register.confirmnotmatch'));
      this.tabClick(1);
      return;
    }
    this.http.post(endpoints.auth.registercompany,this.dto).subscribe((response)=> {
      if(response.success){
        this.alertify.success(this.translation.translate("register.completed"))
        this.storage.setString("email",this.dto.userEmail);
        this.storage.setString("user_name",this.dto.firstName+' '+this.dto.lastName);
        this.router.navigate(['login']);
      }
      else{
        this.alertify.error(this.translation.translate(response.message));
      }
    })

  }
  tabClick(index:number) {
    const tabGroup = this.tab;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
  
    tabGroup.selectedIndex = index;
  }
}
