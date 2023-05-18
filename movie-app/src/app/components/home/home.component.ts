import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularmovies:any
  top_rated:any
  now_playing:any
  upcoming:any
  constructor(private http:HttpClient){

  }
   getpopularmovies(){
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=9fc0b4db7010ebe15f369cba0cf8d13a')
    .subscribe((movie:any)=>{
      
      this.popularmovies=movie.results
      console.log(this.popularmovies);
    })
   }


   gettopratedmovies(){
    this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9fc0b4db7010ebe15f369cba0cf8d13a')
    .subscribe((movie:any)=>{
      
      this.top_rated=movie.results
      console.log(this.top_rated);
    })
   }

   getnowplayingmovies(){
    this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9fc0b4db7010ebe15f369cba0cf8d13a')
    .subscribe((movie:any)=>{
      
      this.now_playing=movie.results
      console.log(this.now_playing);
    })
   }


   getupcomingmovies(){
    this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=9fc0b4db7010ebe15f369cba0cf8d13a')
    .subscribe((movie:any)=>{
      
      this.upcoming=movie.results
      console.log(this.upcoming);
    })
   }



   ngOnInit(): void {
     this.getpopularmovies()
     this.gettopratedmovies()
     this.getnowplayingmovies()
     this.getupcomingmovies()
   }
}
