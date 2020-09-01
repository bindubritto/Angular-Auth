import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = 'http://localhost:3000/api/events';
  private specialEventUrl = 'http://localhost:3000/api/special';


  constructor(private http: HttpClient) { }

  getEvents(): any {
    return this.http.get(this.eventsUrl);
  }

  getSpecialEvent(): any {
    return this.http.get(this.specialEventUrl);
  }


}
