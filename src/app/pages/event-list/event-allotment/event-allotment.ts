import {Component, Inject} from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { TranslocoService } from '@ngneat/transloco';
import { Event } from 'src/app/core/models/event/event';
import { AlertService } from 'src/app/core/services/alert/alert.service';
@Component({
    selector: 'event-allotment',
    templateUrl: 'event-allotment.html',
  styleUrls: ['event-allotment.scss']
  })
  export class EventAllotmentDialog {
    event:Event;
    constructor(public dialogRef: MatDialogRef<EventAllotmentDialog>, @Inject(MAT_DIALOG_DATA) public data: Event,public alert:AlertService,public translation:TranslocoService) {
      this.event = {...data};
    }
    save(){
        this.dialogRef.close(this.event);
      }
      close(){
        this.dialogRef.close();
      }
}