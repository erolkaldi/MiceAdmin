import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Event } from 'src/app/core/models/event/event';
import { EventEditDialog } from './event-edit/event-edit';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
events:Event[]=[]
displayedColumns: string[] = ['code', 'name', 'begin', 'end','type','fee','buttons'];
dataSource = new MatTableDataSource<Event>([]);
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    
    for(var i=0;i<100;i++){
      let event=new Event()
    event.id=i.toString()
    event.code="ANT-FUAR"
    event.name="ANT KITAP FUARI"
    event.beginDate=new Date("2023.02.15")
    event.endDate=new Date("2023.02.22")
    event.registerBegin=new Date("2023.01.18")
    event.registerEnd=new Date("2023.02.14")
    event.eventType="2"
    event.contact="Ayhan Yalım"
    event.email="ayhan@micetrio.com"
    event.phone="0535 333 45 45"
    event.feeType="1"
      event.code="ANT-FUAR"+i
      this.events.push(event)
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.data=this.events;
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

  getEvents(){

  }
}
