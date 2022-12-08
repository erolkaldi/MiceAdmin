import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { ChangePassword } from 'src/app/core/models/auth/changePasswordDto';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.scss']
})
export class ResetPasswordDialog {
  passwordDto:ChangePassword
  hideold:boolean=true
  hidenew:boolean=true
  hideconf:boolean=true
  constructor(public dialogRef: MatDialogRef<ResetPasswordDialog>, @Inject(MAT_DIALOG_DATA) public data: ChangePassword,public alert:AlertService,public translation:TranslocoService) {
    this.passwordDto = {...data};
  }

save(){
if(!this.passwordDto.oldPassword || this.passwordDto.oldPassword.length==0 ||
  !this.passwordDto.newPassword || this.passwordDto.newPassword.length==0 ||
  !this.passwordDto.confirmPassword || this.passwordDto.confirmPassword.length==0
  ){
this.alert.error(this.translation.translate('messages.emptyfield'))
return
}
if(this.passwordDto.newPassword!=this.passwordDto.confirmPassword){
  this.alert.error(this.translation.translate('register.confirmnotmatch'))
return
}
this.dialogRef.close(true);
}
close(){
this.dialogRef.close();
}
}