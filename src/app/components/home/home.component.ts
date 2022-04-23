import { TrendingService } from './../../services/trending.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }
  trendingMovies:any[]=[]
  trendingTvShows:any[]=[]
  getTrendingItems(){
    this._TrendingService.getTrending("all").subscribe((data)=>{
      console.log(data.results);
      this.trendingMovies=data.results.filter((item:any)=>{
        return item.media_type == 'movie'
      });
      console.log(this.trendingMovies)
      this.trendingTvShows=data.results.filter((item:any)=>{
        return item.media_type == 'tv'
      });
      
    })
  }
  ngOnInit(): void {
    this.getTrendingItems();
  }

}
