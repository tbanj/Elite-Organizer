import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the TornamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tornaments',
  templateUrl: 'tornaments.html',
})
export class TornamentsPage  {
  public tournaments:any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private eliteApi: EliteApi,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments....'
    })
    loader.present().then(()=>{
      this.eliteApi.getTornaments().subscribe(data =>{
         this.tournaments = data
        loader.dismiss()
      })
    })
    console.log('onload'); 
  }
  itemTapped($event, tourney){
   this.navCtrl.push(TeamsPage, tourney)
  }
}
