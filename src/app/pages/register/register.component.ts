import { Component, OnInit } from '@angular/core';
import { RegisterDto } from 'src/app/core/models/auth/registerDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
dto:RegisterDto=new RegisterDto();;
  ngOnInit(): void {
    
  }

  doregister(){
    
  }

}
