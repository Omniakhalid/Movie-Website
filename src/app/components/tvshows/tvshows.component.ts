import { TrendingService } from './../../services/trending.service';
import { Component, OnInit } from '@angular/core';
TrendingService
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }
  trendingTvShows:any[]=[]
  getTVShows(){
    this._TrendingService.getTrending("tv").subscribe((data)=>{
      this.trendingTvShows = data.results
    })
  }

  ngOnInit(): void {
    this.getTVShows()
  }

}
