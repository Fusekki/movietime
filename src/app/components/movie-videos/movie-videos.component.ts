import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { MoviedbService } from '../../services/moviedb.service';
import { Videos, Video } from '../../interfaces/videos';


@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.css']
})
export class MovieVideosComponent implements OnInit {
  id: number;
  videos: Video[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private moviedbService: MoviedbService) { }

  ngOnInit() {
    this.getVideoId();
    this.getVideos(this.id)
    .subscribe((videos: Videos) => {
      for (const video of videos.results) {
        this.videos.push(video);
      }
    });
  }

  getVideoId(): void {
    this.id = +this.route.snapshot.paramMap.get('video');
  }

  getVideos(id) {
    return this.moviedbService.getVideos(id);
  }

  goBack(): void {
    this.location.back();
  }

}
