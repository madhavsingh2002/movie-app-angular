import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchMovie:string = "";
  MovieDetail: any ={
    Title: '',
    imdbRating: '',
    Rated: '',
    Year: '',
    Runtime: '',
    Actors: '',
    Plot: '',
    Poster: '',
    Genre: ''
  };
  constructor(private http:HttpClient){}
  
 ngOnInit(): void {
   
 }
 searchMovieData(): void {
  if(this.searchMovie){
    const apiKey = '86b435f4'
    const url = `http://www.omdbapi.com/?t=${this.searchMovie}&apikey=${apiKey}`
    this.http.get(url).subscribe(
      (data:any) => {
        this.MovieDetail =data;
        console.log(data)
      },
      (err)=> {console.log(err)}
    )
  }
 }
}
