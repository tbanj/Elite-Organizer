import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EliteApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliteApi {
  private baseUrl = 'https://elite-schedule-app-i2-c0c91.firebaseio.com'
  private currentTourney:any = {}
  private tourneyData = {}
  constructor(public http: Http) {}

  getTornaments() {
    return this.http.get(`${this.baseUrl}/tournaments.json`)
      .map(response =>{
        return response.json()
      })
  }
  

 getTournamentData(tourneyId, forceRefresh: boolean = false) : Observable<any> {
  if(!forceRefresh && this.tourneyData[tourneyId]){
      this.currentTourney = this.tourneyData[tourneyId];
      console.log('** no need to make HTTp request just return data');
  return Observable.of(this.currentTourney)      
  }
  console.log('** about to make HTTP request');
  return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
      .map(response => {
        this.tourneyData[tourneyId] = response.json()
        this.currentTourney = this.tourneyData[tourneyId]
        return this.currentTourney;
      })
  
 }
 getCurrentTourney(){
   return this.currentTourney
 }

refreshCurrentTourney(){
  return this.getTournamentData(this.currentTourney.tournament.id, true)
}

}
