import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TranslocoService } from '@ngneat/transloco';
import { User } from 'src/app/core/models/user/user';
import Swal from 'sweetalert2';
import { UserEditDialog } from './user-edit/user-edit';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public dialog: MatDialog,private translation:TranslocoService) { }

  users:User[]=[]
displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phone','blocked','buttons'];
dataSource = new MatTableDataSource<User>([]);
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    
    for(var i=0;i<10;i++){
      let user=new User()
      user.id=i.toString()
      user.firstName="AYHAN"
      user.lastName="YALIM"
      user.email="ayhan@micetrio.com"
      user.phone="0535 333 45 45"
      user.blocked=false;
      this.users.push(user)
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.data=this.users;
  }
  deleteUser(user:User){
    Swal.fire({
      title: this.translation.translate('messages.warning'),
      text: this.translation.translate('messages.askdelete'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translation.translate('messages.acceptdelete'),
    }).then((result) => {
      if (result.isConfirmed) {
        //delete it
      }
    })
  }
  createNew(){
    let user=new User();
    user.id="101";
    this.openDialog(user);
  }
  openDialog(data:User) {
    const dialogRef = this.dialog.open(UserEditDialog,{data});

    dialogRef.afterClosed().subscribe(result => {
      if(result && result!=null){
        var index=this.users.findIndex(item=> item.id==result.id);
          if(index==-1){
            this.users.push(result);
          }
          else{
            this.users[index]=result;
          }
          this.dataSource.data=this.users;
      }
    });
  }
 
}
