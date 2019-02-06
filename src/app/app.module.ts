import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { AgmCoreModule } from '@agm/core'
import { MyApp } from './app.component';
import { MyTeamsPage } from './../pages/my-teams/my-teams';
import { TornamentsPage } from './../pages/tornaments/tornaments';
import { GamePage } from './../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamHomePage } from './../pages/team-home/team-home';
import { StandingsPage } from './../pages/standings/standings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EliteApi } from '../providers/elite-api/elite-api';
import { UserSettingsProvider } from '../providers/user-settings/user-settings';
import { MapPage } from '../pages/map/map';


@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TornamentsPage,
    StandingsPage,
    TeamHomePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyClE5YtVAYjddGVoH-qEyZKmXBfYmKQW5Q'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TornamentsPage,
    StandingsPage,
    TeamHomePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi,
    UserSettingsProvider
  ]
})
export class AppModule {}
