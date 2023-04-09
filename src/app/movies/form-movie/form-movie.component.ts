import { movieTheatersCreationDTO } from './../../movie-theaters/movie-theater.model';
import { movieCreationDTO } from './../movies.model';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { moviesDTO } from '../movies.model';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}
  form:FormGroup;

  @Input()
  model: moviesDTO;
  

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  nonSelectedGenres: multipleSelectorModel[] = [
    {key: 1, value: 'Drama'},
    {key: 2, value: 'Comedy'},
    {key: 3, value: 'Sci-Fic'}

  ];

  selectedGenres: multipleSelectorModel[] = [];
  
  nonSelectedMovieTheaters: multipleSelectorModel[] = [
    {key: 1, value: 'Agore'},
    {key: 2, value: 'Sambil'},
    {key: 3, value: 'Megacentro'}
  ];

  selectedMovieTheaters: multipleSelectorModel[] =[];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
       title: ['', {
        validators:  [Validators.required]
       }],
       summary:'',
       inTheaters: false,
       trailer: '',
       releaseDate: '',
       poster: '',
       genersId: '',
       movieTheaterId: ''
    }); 

    if(this.model !== undefined)
    {
       this.form.patchValue(this.model); 
    }
  }

  saveChanges(){
    const genersIds = this.selectedGenres.map(value => value.key);
    this.form.get('genersId').setValue(genersIds);

    const movieTheaterIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('movieTheaterId').setValue(movieTheaterIds);
    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file : File){
    this.form.get('poster').setValue(file);
  }

  changeMarkDown(content: string){ 
    this.form.get('summary').setValue(content);
  }

}

