import { genreCreationDTO } from './../genres,models';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute){}

  model:genreCreationDTO = {name: 'Drama'};

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params =>{
        
    });
  }

  saveChanges(genreCreationDTO:genreCreationDTO)
  {
     console.log(genreCreationDTO);
  }

}
