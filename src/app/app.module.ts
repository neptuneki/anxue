import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpsComponent } from './bps/bps.component';
import { BpDetailComponent } from './bp-detail/bp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BpsComponent,
    BpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
