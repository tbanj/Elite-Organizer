import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';

import * as _ from 'lodash'

/**
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  public allStandings: any[]
  public standings: any[]
  public team: any
  public divisionFilter = 'division'

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private eliteApi: EliteApi) {
    
  }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney()
    this.standings = tourneyData.standings

    this.allStandings = tourneyData.standings
    // this.allStandings =
    //   _.chain(this.standings)
    //     .groupBy('division')
    //     .toPairs()    
    //     .map(item => _.zipObject(['divisionName','divisionStandings'], item))
    //     .value()

        console.log('standing:', this.standings);
        console.log('divison Standings', this.allStandings);
        this.filterDivision()
        
        
    }

    filterDivision(){
      if(this.divisionFilter == 'all'){
        this.standings = this.allStandings
      }else{
        this.standings = _.filter(this.allStandings, s => s.division == this.team.division)
      }
    }
    getHeader(record, recordIndex, records){
      if(recordIndex % 10 === 0 || record.division !== records[recordIndex - 1].division){
        return record.division;
      }
      return null
    }
    
}
