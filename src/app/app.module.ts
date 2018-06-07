import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { YoutubePlayerModule } from 'ngx-youtube-player';

import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { AreaService } from './services/area.service';
import { ApiService } from './services/api.service';
import { MovieService } from './services/movie.service';
import { MoviedbService } from './services/moviedb.service';

import { DurationPipe } from './classes/duration-pipe';

import { ReportService } from './services/report.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './classes/in-memory-data.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportComponent } from './components/report/report.component';
import { MovieSearchResultsComponent } from './components/movie-search-results/movie-search-results.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { MovieVideosComponent } from './components/movie-videos/movie-videos.component';
import { TheatreTimesComponent } from './components/theatre-times/theatre-times.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';


@NgModule({
  declarations: [
    AppComponent,
    DurationPipe,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ReportComponent,
    MovieSearchResultsComponent,
    YoutubePlayerComponent,
    MovieVideosComponent,
    TheatreTimesComponent,
    MovieInfoComponent,
    MoviePosterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    YoutubePlayerModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  providers: [ApiService,
    AreaService,
    MovieService,
    MoviedbService,
    ReportService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
