import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  error(message:string){
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
  warning(message:string){
    Swal.fire({
      title: 'Warning!',
      text: message,
      icon: 'info',
      confirmButtonText: 'OK'
    })
  }
}
