import { movieTheatersCreationDTO } from './../movie-theater.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-movie-thearer',
  templateUrl: './create-movie-thearer.component.html',
  styleUrls: ['./create-movie-thearer.component.css']
})
export class CreateMovieThearerComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }

  saveChanges(movieTheater: movieTheatersCreationDTO)
  {
   console.log(movieTheater);
  }

}
