import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDaterangepickerMd } from '../../projects/ngx-datepicker-material/src/lib/daterangepicker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDaterangepickerMd
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
