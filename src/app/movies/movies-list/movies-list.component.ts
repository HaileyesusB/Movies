import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  ngOnInit(): void {
    
 /*   setTimeout(() => {
    
    }, 3000);
  
  */
    this.moviesInTheaters =
    [{
      title: 'Spider-Man',
      releaseDate: new Date('2021-10-15'),
      price: 1200.89
    },
    {
      title: 'Spider-Man 2',
      releaseDate: new Date('2022-10-17'),
      price: 1400.89
    },
    {
      title: 'Spider-Man 3',
      releaseDate: new Date('2023-10-17'),
      price: 1500.89
    }];

    this.moviesInFutureRelease =
    [{
      title: 'Ant-Man',
      releaseDate: new Date('2016-02-15'),
      price: 200.89
    },
    {
      title: 'Ant-Man 2',
      releaseDate: new Date('2017-10-17'),
      price: 1400.89
    },
    {
      title: 'Ant-Man 3',
      releaseDate: new Date('2018-10-17'),
      price: 1500.89
    }]
  }
  moviesInTheaters:any;
  moviesInFutureRelease:any;
  @Input()
  movie:any;
  remove(index:number)
  {
    this.movie.splice(index, 1);
  }
}
