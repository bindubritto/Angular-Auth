import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventsData: any = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEventsData();
  }

  getEventsData(): any {
    this.eventService.getEvents()
      .subscribe(
        res => this.eventsData = res,
        err => console.log(err)
      );
  }
}
