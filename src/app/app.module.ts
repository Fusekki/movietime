import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ReportService } from './services/report.service';
import { UserService } from './services/user.service';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './classes/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppDashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [ReportService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
