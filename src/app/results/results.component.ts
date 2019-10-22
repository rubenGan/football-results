import { Component, OnInit } from '@angular/core';
import * as utils from '../../environments/globals'; 
import matchDay from '../models/matchDay';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  matchDay: matchDay;
  private apiKey: string= utils.apiKey;
  private leagueCode:string = utils.leagueCode;
  private year:string = utils.year;
  public leaguesList:any =[    
    {
    "Text":"Premier League",
    "Value":"PL"
  },
  {
    "Text":"Brazilian Division One",
    "Value":"BSA"
  },
  {
    "Text":"Champions league",
    "Value":"CL"
  },
  {
    "Text":"Europa league",
    "Value":"EC"
  },
  {
    "Text":"France League 1",
    "Value":"FL1"
  },
  {
    "Text":"Eredivisie",
    "Value":"DED"
  },
  {
    "Text":"Bundesliga",
    "Value":"BL1"
  },
  {
    "Text":"La Liga Santander",
    "Value":"PD"
  },
  {
    "Text":"Championship",
    "Value":"ELC"
  },
  {
    "Text":" Italy Serie A",
    "Value":"SA"
  },
  {
    "Text":"World Cup",
    "Value":"PL"
  },
  {
    "Text":"Liga NOS",
    "Value":"PPL"
  }
];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://api.football-data.org/v2/competitions/'+ this.leagueCode +'/matches/?matchday=2',{
      headers: { 'X-Auth-Token': this.apiKey },
      responseType: 'json'
    })
    .subscribe((data: matchDay) => {
      this.matchDay = data;
  });
}

changeLeague(codeLeague) {
  this.http.get('http://api.football-data.org/v2/competitions/'+ codeLeague +'/matches/?matchday=2',{
    headers: { 'X-Auth-Token': this.apiKey },
    responseType: 'json'
  })
  .subscribe((data: matchDay) => {
    this.matchDay = data;
});
}

  }


