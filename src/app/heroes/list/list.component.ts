import { Component,Input } from '@angular/core';
import { Character } from '../../dbz/interfaces/character.interace';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input()
 public characterList: Character[] = [{
   name:'Trunks',
   power:10
 }]

}
