import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvent: any = [];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getSpecialEventData();
  }

  getSpecialEventData(): any {
    this.eventService.getSpecialEvent()
      .subscribe(
        res => this.specialEvent = res,
        err => console.log(err)
      );
  }

}
