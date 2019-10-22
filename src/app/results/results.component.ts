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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://api.football-data.org/v2/competitions/PL/matches/?matchday=2',{
      headers: { 'X-Auth-Token': this.apiKey },
      responseType: 'json'
    })
    .subscribe((data: matchDay) => {
      debugger;
      this.matchDay = data;
      console.log(this.matchDay);
  });
}

  }


