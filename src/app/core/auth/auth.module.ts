import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.intercoptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true
  }
  ]
})
export class AuthModule { }
