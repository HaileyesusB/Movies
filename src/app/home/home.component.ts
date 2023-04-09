import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.moviesInTheaters =
    [{
      title: 'Spider-Man',
      releaseDate: new Date('2021-10-15'),
      price: 1200.89,
      poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX67_CR0,0,67,98_AL_.jpg'
    },
    {
      title: 'Spider-Man 2',
      releaseDate: new Date('2022-10-17'),
      price: 1400.89,
      poster: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY98_CR2,0,67,98_AL_.jpg'
    },
    {
      title: 'Spider-Man 3',
      releaseDate: new Date('2023-10-17'),
      price: 1500.89,
      poster: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX67_CR0,0,67,98_AL_.jpg'
    }];
  
    this.moviesInFutureRelease;

  }

  title : any = 'angular-movies';
  display = true;

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  duplicateNumber(n:number)
  {
    return n*2;
  }
  handelRating(rate: number)
  {
    alert(`The user selected ${rate}`);
  }
  moviesInTheaters:any;
  moviesInFutureRelease:any;

 
}
