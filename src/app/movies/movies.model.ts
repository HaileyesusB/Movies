export interface movieCreationDTO
{
    title:string;
    summary: string;
    poster: File;
    inTheaters:boolean;
    releaseDate: Date;
    trailer:string;
    generesId: number[];
    movieTheaterId: number[];
}


export interface moviesDTO
{
    title:string;
    summary: string;
    poster: string;
    inTheaters:boolean;
    releaseDate: Date;
    trailer:string
}