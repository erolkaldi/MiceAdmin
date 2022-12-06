import {Component, Inject} from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { TranslocoService } from '@ngneat/transloco';
import { User } from 'src/app/core/models/user/user';
import { AlertService } from 'src/app/core/services/alert/alert.service';
@Component({
    selector: 'user-edit',
    templateUrl: 'user-edit.html',
  styleUrls: ['user-edit.scss']
  })
  export class UserEditDialog {
    user:User;
    constructor(public dialogRef: MatDialogRef<UserEditDialog>, @Inject(MAT_DIALOG_DATA) public data: User,
    public alert:AlertService,public translation:TranslocoService) {
      this.user = {...data};
    }
  
save(){
  if(!this.user.firstName || this.user.firstName.length==0 ||
  !this.user.lastName || this.user.lastName.length==0 ||
  !this.user.email || this.user.email.length==0 ||
  !this.user.phone || this.user.phone.length==0 ){
this.alert.error(this.translation.translate('messages.emptyfield'))
return
}
  this.dialogRef.close(this.user);
}
close(){
  this.dialogRef.close();
}
  }