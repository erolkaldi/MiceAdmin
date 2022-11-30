import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private translation:TranslocoService) { }
  success(message:string){
    Swal.fire({
      title: this.translation.translate('messages.success'),
      text: message,
      icon: 'success',
      confirmButtonText: this.translation.translate('messages.ok')
    })
  }
  error(message:string){
    Swal.fire({
      title: this.translation.translate('messages.error'),
      text: message,
      icon: 'error',
      confirmButtonText: this.translation.translate('messages.ok')
    })
  }
  warning(message:string){
    Swal.fire({
      title: this.translation.translate('messages.warning'),
      text: message,
      icon: 'info',
      confirmButtonText: this.translation.translate('messages.ok')
    })
  }
}
