import { movieCreationDTO } from './../movies.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  saveChanges(movieCreationDTO: movieCreationDTO)
  {
    console.log(movieCreationDTO);
  }

}
