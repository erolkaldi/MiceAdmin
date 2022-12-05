import {Component, Inject} from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { User } from 'src/app/core/models/user/user';
@Component({
    selector: 'user-edit',
    templateUrl: 'user-edit.html',
  styleUrls: ['user-edit.scss']
  })
  export class UserEditDialog {
    user:User;
    constructor(public dialogRef: MatDialogRef<UserEditDialog>, @Inject(MAT_DIALOG_DATA) public data: User) {
      this.user = {...data};
    }
  
save(){
  this.dialogRef.close(this.user);
}
close(){
  this.dialogRef.close();
}
  }