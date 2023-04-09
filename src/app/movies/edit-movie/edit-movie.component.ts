import { moviesDTO } from './../movies.model';
import { movieTheatersCreationDTO } from './../../movie-theaters/movie-theater.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute){}
  
  model: moviesDTO;
  
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      
    });
  }
}
