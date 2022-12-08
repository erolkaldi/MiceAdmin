import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { ChangePassword } from 'src/app/core/models/auth/changePasswordDto';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { SidenavService } from 'src/app/core/sidenav/sidenav.service';
import { ResetPasswordDialog } from '../reset-password/change-password/reset-password';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: StorageService,
    public sidenav: SidenavService,
    public dialog: MatDialog,
    private alert:AlertService,
    private translation:TranslocoService
  ) {
    router.events.subscribe((val) => {
      if (authService.isLoggedIn()) {
        this.loggedIn = true;
        this.userName = this.storage.getString('user_name') ?? '';
        
      } else {
        this.loggedIn = false;
      }
      this.page='pages'+router.url.replace('/','.');
    });
  }
  loggedIn: boolean = false;
  userName: string = '';
  activeLanguage: string = 'tr';
  page:string=""
  ngOnInit(): void {
    this.activeLanguage = this.storage.getString('active_language') ?? 'tr';
  }
  dologout() {
    this.storage.removeItem('access_token');
    this.storage.removeItem('company_name');
    this.storage.removeItem('user_name');
    window.location.reload();
  }
  changeLanguage(lang: string) {
    this.storage.setString('active_language', lang);
    this.activeLanguage = lang;
    window.location.reload();
  }
  showMenu(){
    this.sidenav.toggle();
  }
  changePassword(){
    var data=new ChangePassword();
    const dialogRef = this.dialog.open(ResetPasswordDialog,{data});

    dialogRef.afterClosed().subscribe(result => {
      if(result && result!=null){
        this.alert.success(this.translation.translate('messages.passwordchanged'));
      }
    });
  }
}
