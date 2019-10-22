import  * as team from './team'; 
import  * as referee from './referee'; 
import  * as score from './score'; 
import  * as season from './season'; 


export default class match {
 awayTeam: team.default;
 group: string;
 homeTeam:team.default;
 id: number;
 lastUpdated:Date;
 matchDay:number;
 referees:referee.default[];
 score: score.default;
 season: season.default;
 stage: string;
 status: string;
 utcDate: Date;
  }