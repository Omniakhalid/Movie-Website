import { TrendingService } from './../../services/trending.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }
  trendingPeople:any[]=[]
  getPeople(){
    this._TrendingService.getTrending("people").subscribe((data)=>{
      this.trendingPeople = data.results
    })
  }

  ngOnInit(): void {
    this.getPeople();
  }

}
