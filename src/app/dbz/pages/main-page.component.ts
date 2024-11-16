import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interace';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  public characters: Character[]= [{
    name:'Kril',
    power: 1000
  },{
      name:'Goku',
      power:9500
  },{
        name:'Vegeta',
        power: 7500
}];


}
