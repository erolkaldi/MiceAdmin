import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private translation:TranslocoService,private alert:AlertService,private router:Router) { }
email:string=""
  ngOnInit(): void {
  }
reset(){
if(this.email.length<5){
this.alert.error(this.translation.translate('messages.invalidemail'))
return;
}

this.alert.success(this.translation.translate('messages.resetpasswordresult'))
this.router.navigate(['login'])
}
}
