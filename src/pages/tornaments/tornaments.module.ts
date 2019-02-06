import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TornamentsPage } from './tornaments';

@NgModule({
  declarations: [
    TornamentsPage,
  ],
  imports: [
    IonicPageModule.forChild(TornamentsPage),
  ],
})
export class TornamentsPageModule {}
