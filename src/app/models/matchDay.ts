// matchDay.ts
import  * as matchField from './match'; 
import  * as filter from './filter';
import  * as competition from './competition';


export default class matchDay {
    count:number;
    filters: filter.default;
    competition: competition.default;   
    matches:matchField.default[]
  }