import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<app-response></app-response>`,
})
export class AppComponent {


  
  constructor(private http: HttpClient) {
    // this.http.get('/api/BirthdayRsvp')
    //   .subscribe((resp: any) => this.value = resp.text);
  }

}
