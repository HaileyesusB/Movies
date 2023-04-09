import { genreCreationDTO } from './../genres,models';
import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { upperCaseValidator } from 'src/app/Validators/upperCaseValidator';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {
    
  }

  saveChanges(genreCreationDTO: genreCreationDTO)
  {
    //.. save the genre
   // this.onSaveChanges.emit(this.form.value);
   console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }
}
