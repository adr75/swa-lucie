import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ThanksComponent } from './components/pages/thanks/thanks.component';
import { ResponseComponent } from './components/pages/response/response.component';

@NgModule({
  declarations: [AppComponent, ThanksComponent, ResponseComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
