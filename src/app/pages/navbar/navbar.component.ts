import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { SidenavService } from 'src/app/core/sidenav/sidenav.service';

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
    public sidenav: SidenavService
  ) {
    router.events.subscribe((val) => {
      if (authService.isLoggedIn()) {
        this.loggedIn = true;
        this.userName = this.storage.getString('user_name') ?? '';
        this.companyName =
          this.storage.getString('company_name') ?? 'Micetrio';
      } else {
        this.loggedIn = false;
      }
    });
  }
  loggedIn: boolean = false;
  userName: string = '';
  activeLanguage: string = 'tr';
  companyName: string = 'Micetrio';
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
}
