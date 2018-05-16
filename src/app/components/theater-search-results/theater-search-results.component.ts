import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ApiService } from '../../services/api.service';

import { AreaService } from '../../services/area.service';
import { UserService } from '../../services/user.service';
import { Area } from '../../classes/area';
import { User } from '../../classes/user';


@Component({
  selector: 'app-theater-search-results',
  templateUrl: './theater-search-results.component.html',
  styleUrls: ['./theater-search-results.component.css']
})
export class TheaterSearchResultsComponent implements OnInit {

  area: Area;
  user: User;
  zipcode: number;
  username: string;
  theaters: any[];

  constructor(
    private apiService: ApiService,
    private areaService: AreaService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();

    this.route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.getArea();
      // Save this for when we go live
      this.getTheaters();
    });
  }


  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('user');
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }

  getZipcode(): void {
    this.areaService.getArea(this.zipcode).subscribe(area => (this.area = area));
  }

  getArea(): void {
    this.areaService.getArea(this.zipcode).subscribe(area => (this.area = area));
  }

  // getTheaters(): void {
  //   this.apiService.getMovies()
  //   .subscribe(data => { console.log(data); });
  // }

  getTheaters(): void {
    this.apiService.getTheaters().subscribe(theaters => (this.theaters = theaters));
  }

}
