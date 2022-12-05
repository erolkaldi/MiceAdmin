import {Component, Inject} from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Event } from 'src/app/core/models/event/event';
import { EventTypes } from 'src/app/core/models/event/eventType';
import { FeeTypes } from 'src/app/core/models/event/feeType';
@Component({
    selector: 'event-edit',
    templateUrl: 'event-edit.html',
  styleUrls: ['event-edit.scss']
  })
  export class EventEditDialog {
    event:Event;
    eventTypes=EventTypes;
    feeTypes=FeeTypes;
    constructor(public dialogRef: MatDialogRef<EventEditDialog>, @Inject(MAT_DIALOG_DATA) public data: Event) {
      this.event = {...data};
    }
  
save(){
  this.dialogRef.close(this.event);
}
close(){
  this.dialogRef.close();
}
  }