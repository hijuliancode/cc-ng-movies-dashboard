import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../../../core/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    public moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.moviesService.getAllMovies();
  }

}
