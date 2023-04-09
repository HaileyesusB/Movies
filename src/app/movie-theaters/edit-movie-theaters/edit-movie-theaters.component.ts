import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theaters',
  templateUrl: './edit-movie-theaters.component.html',
  styleUrls: ['./edit-movie-theaters.component.css']
})
export class EditMovieTheatersComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute){}
  model: movieTheatersDTO= {name: 'Haile', latitude: 9.063518043005642, longtude:-321.1262512207032}

  ngOnInit(): void { 
   this.activatedRoute.params.subscribe(params=>{});
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){

  }

}

-321.1262512207032