import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/core/models/event/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor() { }
events:Event[]=[]
displayedColumns: string[] = ['code', 'name', 'begin', 'end','type','buttons'];
  ngOnInit(): void {
    let event=new Event()
    event.code="ANT-FUAR"
    event.name="ANT KITAP FUARI"
    event.beginDate=new Date("2023.02.15")
    event.endDate=new Date("2023.02.22")
    event.registerBegin=new Date("2023.01.18")
    event.registerEnd=new Date("2023.02.14")
    event.eventType="FUAR"
    event.contact="Ayhan Yalım"
    event.email="ayhan@micetrio.com"
    event.phone="0535 333 45 45"
    event.feeType="Register Only"
    this.events.push(event)
  }

}
