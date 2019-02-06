import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { Spinner } from 'ionic-angular/components/spinner/spinner';

import * as _ from 'lodash'

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams = []
  private allTeams: any
  private allTeamDivisions: any
  public queryText: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private eliteApi: EliteApi,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting teams....',
      spinner: 'dots'
    })
    loader.present().then(()=>{
      let selectedTourney = this.navParams.data
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data =>{
        this.allTeams = data.teams;

        this.allTeamDivisions =
          _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeam'], item))
            .value()

        this.teams = this.allTeamDivisions
        console.log('division teams', this.teams);
        
        loader.dismiss()
      })
    })
    console.log('ionViewDidLoad TeamsPage');
  }
  itemTapped($event,team){
    this.navCtrl.push(TeamHomePage,team)
  }
  updateTeams(){
    let queryTextLower = this.queryText.toLowerCase()
    let filteredTeams = []
    _.forEach(this.allTeamDivisions, td => {
      let teams = _.filter(td.divisionTeam, t => (<any>t).name.toLowerCase().includes(queryTextLower))
    if(teams.length){
        filteredTeams.push({divisionName: td.divisionName, divisionTeam: teams})
    }
    })
    this.teams = filteredTeams
  }
}
