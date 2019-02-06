import { TornamentsPage } from './../tornaments/tornaments';
import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { TeamHomePage } from '../team-home/team-home';
import { UserSettingsProvider } from '../../providers/user-settings/user-settings';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {
  
  constructor(
    public navCtrl: NavController,
    private eliteApi: EliteApi,
    private userSettings: UserSettingsProvider,
    private loadingController: LoadingController
  ) {
  }
  favourites = [];
  goToTornaments(){
    this.navCtrl.push(TornamentsPage)
  }
  favouriteTapped($event, favorite){
    let loader = this.loadingController.create({
      content: 'Getting data....',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
      .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team))
    console.log('taped');
    
  }
  ionViewDidEnter(){
    this.favourites = this.userSettings.getAllFavourite()
  }

}
