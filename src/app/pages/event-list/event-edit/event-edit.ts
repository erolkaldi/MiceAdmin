import {Component, Inject} from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { TranslocoService } from '@ngneat/transloco';
import { Event } from 'src/app/core/models/event/event';
import { EventTypes } from 'src/app/core/models/event/eventType';
import { FeeTypes } from 'src/app/core/models/event/feeType';
import { AlertService } from 'src/app/core/services/alert/alert.service';
@Component({
    selector: 'event-edit',
    templateUrl: 'event-edit.html',
  styleUrls: ['event-edit.scss']
  })
  export class EventEditDialog {
    event:Event;
    eventTypes=EventTypes;
    feeTypes=FeeTypes;
    constructor(public dialogRef: MatDialogRef<EventEditDialog>, @Inject(MAT_DIALOG_DATA) public data: Event,public alert:AlertService,public translation:TranslocoService) {
      this.event = {...data};
    }
  
save(){
  if(!this.event.code || this.event.code.length==0 ||
    !this.event.name || this.event.name.length==0 ||
    !this.event.eventType || this.event.eventType==0 ||
    !this.event.feeType || this.event.feeType==0 ||
    !this.event.contact || this.event.contact.length==0 ||
    !this.event.email || this.event.email.length==0 ||
    !this.event.phone || this.event.phone.length==0 ||
    !this.event.beginDate || !this.event.endDate ||
    !this.event.registerBegin || !this.event.registerEnd){
this.alert.error(this.translation.translate('messages.emptyfield'))
return
  }
  this.dialogRef.close(this.event);
}
close(){
  this.dialogRef.close();
}
  }