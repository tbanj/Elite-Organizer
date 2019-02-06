import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable()
export class UserSettingsProvider {

  constructor(private storage: Storage) {
    console.log('Hello UserSettingsProvider Provider');
  }
  favouriteTeam(team, tournamentId, tournamentName){
    let item = {team: team, tournamentId: tournamentId, tournamentName: tournamentName}
    this.storage.set(team.id.toString(), JSON.stringify(item))
  }

unFavouriteTeam(team){
  this.storage.remove(team.id.toString())
}
isFavouriteTeam(teamId: string) : Promise<boolean>{
  return this.storage.get(teamId).then(value => value ? true : false)
}
getAllFavourite(){
  let results = []
  this.storage.forEach(data => {
    console.log('***inside forEach', data);
    results.push(JSON.parse(data))
  })
  return results
}

}
