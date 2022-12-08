import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { LoginDto } from 'src/app/core/models/auth/loginDto';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private storage: StorageService,
    private alertify: AlertService,
    private authService:AuthService,
    private router:Router,
    private translation:TranslocoService,
    private titleService:Title
  ) {}
  dto: LoginDto = { email: '', password: '' };
  ngOnInit(): void {
    this.dto.email = this.storage.getString('email') ?? '';
  }
  trylogin() {
    if (this.dto.email.length < 5) {
      this.alertify.error(this.translation.translate('messages.invalidemail'));
      return;
    }
    if (this.dto.password.length < 5) {
      this.alertify.error(this.translation.translate('messages.passwordminlength'));
      return;
    }
    this.authService.signIn(this.dto).subscribe((response)=>{
      if(!response.success){
        this.alertify.error(response.message)
       }
       else{
        this.storage.setString('access_token',response.data.access_Token);
        this.storage.setString('email',this.dto.email);
        this.storage.setString('user_name',response.data.name);
        this.storage.setString('company_name',response.data.company);
        this.titleService.setTitle(response.data.company);
        this.router.navigate(['home'])
       }
    });
  }
  resetPassword(){
    
  }
}
