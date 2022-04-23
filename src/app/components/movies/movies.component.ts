import { Component, OnInit } from '@angular/core';
import { TrendingService } from './../../services/trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }
  trendingMovies:any[]=[]
  getMovies(){
    this._TrendingService.getTrending("movie").subscribe((data)=>{
      this.trendingMovies = data.results
    })
  }
  ngOnInit(): void {
    this.getMovies();
  }

}//8000466
