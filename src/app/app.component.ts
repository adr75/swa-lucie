import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'World';

  
  constructor(private http: HttpClient) {
    this.http.get('/api/BirthdayRsvp')
      .subscribe((resp: any) => this.value = resp.text);
  }

}
