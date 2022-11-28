import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router:Router
  ) {}
  dto: LoginDto = { email: '', password: '' };
  ngOnInit(): void {
    this.dto.email = this.storage.getString('email') ?? '';
  }
  trylogin() {
    if (this.dto.email.length < 5) {
      this.alertify.error('Please enter valid email');
      return;
    }
    if (this.dto.password.length < 5) {
      this.alertify.error('Password must be atleast 5 characters');
      return;
    }
    this.authService.signIn(this.dto).subscribe((response)=>{
      if(response.accessToken==''){
        this.alertify.error(response.message)
       }
       else{
        this.storage.setString('accessToken',response.accessToken);
        this.storage.setString('email',this.dto.email);
        this.router.navigate(['home'])
       }
    });
  }
}
