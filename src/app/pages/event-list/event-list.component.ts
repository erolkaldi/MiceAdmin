import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Event } from 'src/app/core/models/event/event';
import { EventEditDialog } from './event-edit/event-edit';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { TranslocoService } from '@ngneat/transloco';
import { EventAllotmentDialog } from './event-allotment/event-allotment';
import { Allotment } from 'src/app/core/models/event/allotment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor(public dialog: MatDialog,private translation:TranslocoService) { }
events:Event[]=[]
displayedColumns: string[] = ['code', 'name', 'begin', 'end','type','fee','buttons'];
dataSource = new MatTableDataSource<Event>([]);
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    
    for(var i=0;i<100;i++){
      let event=new Event()
    event.id=i.toString()
    event.name="ANT KITAP FUARI"
    event.beginDate=new Date("2023.02.15")
    event.endDate=new Date("2023.02.22")
    event.registerBegin=new Date("2023.01.18")
    event.registerEnd=new Date("2023.02.14")
    event.eventType=2
    event.contact="Ayhan Yalım"
    event.email="ayhan@micetrio.com"
    event.phone="0535 333 45 45"
    event.feeType=1
      event.code="ANT-FUAR"+i
      event.allotments=[]
      for(var x=0;x<50;x++){
        let all =new Allotment();
      all.allotment=50;
      all.eventDate=new Date("2023.02.15")
      all.id=x.toString();
      all.eventId=i.toString();
      event.allotments.push(all);
      }
      this.events.push(event)
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.data=this.events;
  }

  deleteEvent(event:Event){
    Swal.fire({
      title: this.translation.translate('messages.warning'),
      text: this.translation.translate('messages.askdelete'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translation.translate('messages.acceptdelete'),
    }).then((result) => {
      if (result.isConfirmed) {
        //delete it
      }
    })
  }
  createNew(){
    let event=new Event();
    event.id="101";
    this.openDialog(event);
  }
  openDialog(data:Event) {
    const dialogRef = this.dialog.open(EventEditDialog,{data});

    dialogRef.afterClosed().subscribe(result => {
      if(result && result!=null){
        var index=this.events.findIndex(item=> item.id==result.id);
          if(index==-1){
            this.events.push(result);
          }
          else{
            this.events[index]=result;
          }
          this.dataSource.data=this.events;
      }
    });
  }
  openAllotment(data:Event) {
    const dialogRef = this.dialog.open(EventAllotmentDialog,{data});

    dialogRef.afterClosed().subscribe(result => {
      if(result && result!=null){
        var index=this.events.findIndex(item=> item.id==result.id);
          if(index==-1){
            this.events.push(result);
          }
          else{
            this.events[index]=result;
          }
          this.dataSource.data=this.events;
      }
    });
  }
  getEvents(){

  }
}
