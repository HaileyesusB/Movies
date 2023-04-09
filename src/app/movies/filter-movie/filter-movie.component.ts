import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-movie',
  templateUrl: './filter-movie.component.html',
  styleUrls: ['./filter-movie.component.css']
})
export class FilterMovieComponent implements OnInit {
  constructor(private formBuilder: FormBuilder ){}
  form:FormGroup;

  genres =[{id:1, name: 'Drama'}, {id:2, name: 'Comedy'}, {id:3, name: 'Action'}];
  
  movies=[
  {title: 'Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX67_CR0,0,67,98_AL_.jpg'},
  {title: 'Man', poster: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY98_CR2,0,67,98_AL_.jpg'},
  {title: 'New', poster: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX67_CR0,0,67,98_AL_.jpg'},
];
 originalMovies = this.movies;

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      title: '',
      genereId:0,
      upcomingReleases:false, 
      inTheaters:false

    });
    
    this.form.valueChanges
        .subscribe(values => {
           this.movies = this.originalMovies;
           this.filterMovie(values);

    });
  }

  filterMovie(values: any)
  {
    if(values.title)
    {
      this.movies = this.movies.filter(movie =>{
        return movie.title.toLowerCase().indexOf(values.title.toLowerCase()) !== -1;
      });
    }
  }

  clearForm()
  {
     this.form.reset(); 
  }

}
