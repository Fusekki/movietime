import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TheaterSearchComponent } from './components/theater-search/theater-search.component';
import { MovieSearchResultsComponent } from './components/movie-search-results/movie-search-results.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieVideosComponent } from './components/movie-videos/movie-videos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: ':user/profile', component: DashboardComponent },
  { path: ':user/movies/:zipcode', component: MovieSearchResultsComponent },
  { path: ':user/movies/:video/videos', component: MovieVideosComponent },
  // These defaults need to be last
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
